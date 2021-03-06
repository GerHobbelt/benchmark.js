/*!
 * ui.js
 * Copyright Mathias Bynens
 * Modified by John-David Dalton
 * Available under MIT license
 */
(function(window, document) {

  /** Cache of error messages */
  var errors = [];

  /** Current activity description (used by a potential crash report) */
  var current_task_description = null;

  /** Google Analytics account id */
  var gaId = '';

  /** Cache of event handlers */
  var handlers = {};

  /** Cache for HTML chunk updates via `setHTML()` */
  var htmlChunkCache = {};

  /** A flag to indicate that the page has loaded */
  var pageLoaded = false;

  /** Benchmark results element id prefix (e.g. `results-1`) */
  var prefix = 'results-';

  /** The element responsible for scrolling the page (assumes ui.js is just before </body>) */
  var scrollEl = document.body;

  /** Used to resolve a value's internal [[Class]] */
  var toString = {}.toString;

  /** Namespace */
  var ui = new Benchmark.Suite();

  /** Object containing various CSS class names */
  var classNames = {
    // used for error styles
    'error': 'error',
    // used to make content visible
    'show': 'show',
    // used to reset result styles
    'results': 'results'
  };

  /** Used to flag environments/features */
  var has = {
    // used for pre-populating form fields
    'localStorage': !!(function () {
      try {
        return !localStorage.getItem(+new Date());
      } catch(e) {}
    })(),
    // used to distinguish between a regular test page and an embedded chart
    'runner': !!$('runner')
  };

  /** Object containing various text messages */
  var texts = {
    // inner text for the various run button states
    'run': {
      'again': 'Run again',
      'ready': 'Run tests',
      'running': 'Stop running'
    },
    // common status values
    'status': {
      'again': 'Done. Ready to run again.',
      'ready': 'Ready to run.'
    }
  };

  /** The options object for Benchmark.Suite#run */
  var runOptions = {
    'async': true,
    'queued': true
  };

  /** API shortcuts */
  var filter = Benchmark.filter,
      formatNumber = Benchmark.formatNumber,
      join = Benchmark.join;

  /** Reference to external MarkDown library with `.render()` API: */
  var markDown = window.markdownit({
    html:         true,         // Enable HTML tags in source
    xhtmlOut:     false,        // Use '/' to close single tags (<br />).
                                // This is only for full CommonMark compatibility.
    breaks:       true,         // Convert '\n' in paragraphs into <br>
    langPrefix:   'language-',  // CSS language prefix for fenced blocks. Can be
                                // useful for external highlighters.
    linkify:      true,         // Autoconvert URL-like text to links

    // Enable some language-neutral replacement + quotes beautification
    typographer:  true,

    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: '“”‘’',

    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externally.
    // If result starts with <pre... internal wrapper is skipped.
    highlight: function (/*str, lang*/) { 
      return ''; 
    }
  });

  function mdRender(md) {
    return markDown.render(md);
  }

  function mdRenderInline(md) {
    return markDown.renderInline(md);
  }

  // only keep the first line of content of the rendered output, for use as 'inline' element elsewhere.
  function mdRenderPartialInline(md) {
    md = markDown.render(md);
    md = md.trim().split('\n')[0].replace(/^.*?<[ph][^>]*>(.*?)(<\/[ph][^>]*>|<br>).*/, '$1').trim();
    return md;
  }

  /*--------------------------------------------------------------------------*/

  handlers.benchmark = {

    /**
     * The onCycle callback, used for onStart as well, assigned to new benchmarks.
     *
     * @private
     */
    'cycle': function(ev) {
      var bench = this,
          size = bench.stats.sample.length,
          target = ev.target;

      current_task_description = (ev.type === 'start' ? 'preparing' : 'running') + ' benchmark #' + target.id + ': ' + target.name;

      if (!bench.aborted) {
        setStatus(mdRenderPartialInline(bench.name) + ' × ' + formatNumber(bench.count) + ' (' +
          size + ' sample' + (size == 1 ? '' : 's') + ')');

        // and update the running status of the benchmark in the table as well:
        ui.render(bench.id - 1);
      }
    },

    /**
     * The onStart callback assigned to new benchmarks.
     *
     * @private
     */
    'start': function() {
      // call user provided init() function
      if (isFunction(window.init) && !ui.has_executed_init) {
        // We are going to execute userland code here: it can crash 
        // hence we have to wrap it in `try/catch` to ensure decent user feedback
        // on failure.
        try {
          window.init();
          ui.has_executed_init = true;
        } catch (e) {
          ui.has_executed_init = false;
          var error = e || new Error(String(e));

          logError(e, 'running the benchmark\'s init() function failed');
        }
      }
    }
  };

  handlers.button = {

    /**
     * The "run" button click event handler used to run or abort the benchmarks.
     *
     * @private
     */
    'run': function() {
      var stopped = !ui.running;
      ui.abort();
      ui.length = 0;

      if (stopped) {
        logError({ 'clear': true });
        ui.push.apply(ui, _.filter(ui.benchmarks, function(bench) {
          return !bench.error && bench.reset();
        }));
        ui.run(runOptions);
      } else {
        // call user provided init() function
        if (isFunction(window.init) && !ui.has_executed_init) {
          init();
          ui.has_executed_init = true;
        }
      }
    }
  };

  handlers.title = {

    /**
     * The title table cell click event handler used to run the corresponding benchmark.
     *
     * @private
     * @param {Object} event The event object.
     */
    'click': function(event) {
      event || (event = window.event);

      var id,
          index,
          target = event.target || event.srcElement;

      while (target && (!target.id || !target.id.match(/title-/))) {
        target = target.parentNode;
      }
      if (target) {
        id = target.id;
        index = id && --id.split('-')[1] || 0;
        ui.push(ui.benchmarks[index].reset());
        ui.running ? ui.render(index) : ui.run(runOptions);
      }
    },

    /**
     * The title cell keyup event handler used to simulate a mouse click when hitting the ENTER key.
     *
     * @private
     * @param {Object} event The event object.
     */
    'keyup': function(event) {
      if (13 === (event || window.event).keyCode) {
        handlers.title.click(event);
      }
    }
  };

  handlers.window = {

    /**
     * The window hashchange event handler supported by Chrome 5+, Firefox 3.6+, and IE8+.
     *
     * @private
     */
    'hashchange': function() {
      ui.parseHash();

      var scrollTop,
          params = ui.params,
          chart = params.chart,
          filterBy = params.filterby;

      if (pageLoaded) {
        // configure browserscope
        if (ui.browserscope) {
          ui.browserscope.postable = has.runner && !('nopost' in params);
        }

        // configure chart renderer
        if (chart || filterBy) {
          scrollTop = $('results').offsetTop;
          if (ui.browserscope) {
            ui.browserscope.render({ 'chart': chart, 'filterBy': filterBy });
          }
        }
        if (has.runner) {
          // // call user provided init() function
          // if (isFunction(window.init)) {
          //   init();
          // }
          ui.has_executed_init = false;
          // auto-run
          if ('run' in params) {
            scrollTop = $('runner').offsetTop;
            setTimeout(handlers.button.run, 1);
          }
          // scroll to the relevant section
          if (scrollTop) {
            scrollEl.scrollTop = scrollTop;
          }
        }
      }
    },

    /**
     * The window load event handler used to initialize the UI.
     *
     * @private
     */
    'load': function() {
      // only for pages with a comment form
      if (has.runner) {
        // init the ui
        addClass('controls', classNames.show);
        addClass('controls-at-top', classNames.show);
        addListener('run', 'click', handlers.button.run);

        setHTML('run', texts.run.ready);
        setHTML('user-agent', Benchmark.platform.toString());
        setStatus(texts.status.ready);

        // prefill author details
        if (has.localStorage) {
          _.each([$('author'), $('author-email'), $('author-url')], function(element) {
            if (!element) return;
            element.value = localStorage[element.id] || '';
            element.oninput = element.onkeydown = function(event) {
              event && event.type < 'k' && (element.onkeydown = null);
              localStorage[element.id] = element.value;
            };
          });
        }
        // show warning when Firebug is enabled (avoids showing for Firebug Lite)
        try {
          // Firebug 1.9 no longer has `console.firebug`
          if (console.firebug || /firebug/i.test(console.table())) {
            addClass('firebug', classNames.show);
          }
        } catch(e) {}
      }
      // clear length so tests can be manually queued
      ui.length = 0;

      // evaluate hash values after all other "load" events have fired
      _.defer(function() {
        pageLoaded = true;
        handlers.window.hashchange();
      });
    }
  };

  /*--------------------------------------------------------------------------*/

  /**
   * Shortcut for document.getElementById().
   *
   * @private
   * @param {Element|string} id The id of the element to retrieve.
   * @returns {Element} The element, if found, or null.
   */
  function $(id) {
    return typeof id === 'string' ? document.getElementById(id) : id;
  }

  /**
   * Adds a CSS class name to an element's className property.
   *
   * @private
   * @param {Element|string} element The element or id of the element.
   * @param {string} className The class name.
   * @returns {Element} The element.
   */
  function addClass(element, className) {
    if ((element = $(element)) && !hasClass(element, className)) {
      element.className += (element.className ? ' ' : '') + className;
    }
    return element;
  }

  /**
   * Registers an event listener on an element.
   *
   * @private
   * @param {Element|string} element The element or id of the element.
   * @param {string} eventName The name of the event.
   * @param {Function} handler The event handler.
   * @returns {Element} The element.
   */
  function addListener(element, eventName, handler) {
    if ((element = $(element))) {
      if (typeof element.addEventListener !== 'undefined') {
        element.addEventListener(eventName, handler, false);
      } else if (typeof element.attachEvent !== 'undefined') {
        element.attachEvent('on' + eventName, handler);
      }
    }
    return element;
  }

  /**
   * Appends to an element's innerHTML property.
   *
   * @private
   * @param {Element|string} element The element or id of the element.
   * @param {string} html The HTML to append.
   * @returns {Element} The element.
   */
  function appendHTML(element, html) {
    if ((element = $(element)) && html != null) {
      element.innerHTML += html;
    }
    return element;
  }

  /**
   * Shortcut for document.createElement().
   *
   * @private
   * @param {string} tag The tag name of the element to create.
   * @returns {Element} A new element of the given tag name.
   */
  function createElement(tagName) {
    return document.createElement(tagName);
  }

  /**
   * Checks if an element is assigned the given class name.
   *
   * @private
   * @param {Element|string} element The element or id of the element.
   * @param {string} className The class name.
   * @returns {boolean} If assigned the class name return true, else false.
   */
  function hasClass(element, className) {
    return !!(element = $(element)) &&
      (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
  }

  /**
   * Set an element's innerHTML property.
   *
   * @private
   * @param {Element|string} element The element or id of the element.
   * @param {string} html The HTML to set.
   * @returns {Element} The element.
   */
  function setHTML(element, html) {
    var $el = $(element);
    if ($el) {
      html = html == null ? '' : html;
      // only update the DOM when we are actually going to *change* it:
      if (htmlChunkCache[element] !== html) {
      //if ($el.innerHTML !== html) {
        $el.innerHTML = html;
        htmlChunkCache[element] = html;
        // if ($el.innerHTML !== html) {    // this check triggers some times as the browser can clean up our data! --> `innerHTML !== html`
        //   debugger;
        // }
      }
    }
    return $el;
  }

  // strip the common leading whitespace block off all input lines
  function unindent(s) {
    var w = Infinity;
    var end_of_leading = 0;
    var is_leading = true;
    var may_be_trailing = 0;
    if (s == null) {
      return '';
    }
    var a = s.split('\n').map(function (l, i) {
      l = l.replace(/^\s+/, function (ws) {
        // TAB = 4 spaces
        return ws.replace(/\t/g, '    ');
      });

      if (l.trim().length > 0) {
        is_leading = false;
        may_be_trailing = 0;
        var m = /^ +/.exec(l);
        if (m) {
          w = Math.min(w, m[0].length);
        }
      } else {
        if (is_leading) {
          end_of_leading = i + 1;
        } else if (!may_be_trailing) {
          may_be_trailing = i;
        }
        l = '';
      }

      return l;
    });
    if (w === Infinity) {
      w = 0;
    }
    console.log('line ws width = ', w);

    // strip off leading and trailing empty lines:
    a = a.slice(end_of_leading, may_be_trailing ? may_be_trailing : a.length);

    if (w > 0) {
      var re = new RegExp('^' + (new Array(w + 1)).join(' '));
      a = a.map(function (l) {
        return l.replace(re, '');
      });
    }
    return a.join('\n');
  }

  // escape a piece of text to be HTML-safe inside a <pre> block:
  function escape(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
  }

  // sanitize the input Markdown/HTML
  function sanitize(s) {
    // TODO: use punkave/sanitize-html or almost/safe-html
    return s || '⋯⋯⋯⋯⋯';
  }


  /*--------------------------------------------------------------------------*/

  /**
   * Gets the Hz, i.e. operations per second, of `bench` adjusted for the
   * margin of error.
   *
   * @private
   * @param {Object} bench The benchmark object.
   * @returns {number} Returns the adjusted Hz.
   */
  function getHz(bench) {
    return 1 / (bench.stats.mean + bench.stats.moe);
  }

  /**
   * Checks if a value has an internal [[Class]] of Function.
   *
   * @private
   * @param {Mixed} value The value to check.
   * @returns {boolean} Returns `true` if the value is a function, else `false`.
   */
  function isFunction(value) {
    return toString.call(value) === '[object Function]';
  }

  /**
   * Appends to or clears the error log.
   *
   * @private
   * @param {string|Object} text The text to append or options object.
   */
  function logError(text, extra_text) {
    var table,
        div = $('error-info'),
        options = {};

    // print 'higher level error' info *before* reporting the primary (detail) error:
    if (extra_text) {
      logError(extra_text);
    }

    // juggle arguments
    if (text instanceof Error) {
      // we received an Exception as first argument; optionally followed by
      // a 'higher level' extra_text info message or object:
      options.text = text.message;
      options.exception = text;
      options.stacktrace = extractStackTrace(text);
    }
    else if (typeof text === 'object' && (text.text || text.clear)) {
      options = text;
    }
    else if (typeof text === 'object') {
      options.text = text.message;
      options.infos = text;
    }
    else if (text != null) {
      options.text = text;
    }

    if (!div) {
      table = $('test-table');
      div = createElement('div');
      div.id = 'error-info';
      table.parentNode.insertBefore(div, table.nextSibling);
    }
    if (options.clear) {
      div.className = div.innerHTML = '';
      errors.length = 0;
      return;
    }

    // construct the error message:
    text = '<p>' + (options.text || 'ERROR') + '</p>';
    var infos = [];
    if (options.infos) {
      if (Array.isArray(options.infos)) {
        infos = infos.concat(options.infos);
      } else {
        for (var k in options.infos) {
          if (options.infos[k] != null) {
            infos.push(k + ': ' + options.infos[k]);
          }
        }
      }
    } 
    if (current_task_description) {
      infos.push('activity: ' + current_task_description);
    }
    if (options.stacktrace) {
      infos.push('stackTrace: ' + join(options.stacktrace, ' &#187; '));
    }
    if (infos.length) {
      text += '<ul><li>' + join(infos, '</li><li>') + '</li></ul>';
    }

    if (_.indexOf(errors, text) < 0) {
      errors.push(text);
      addClass(div, classNames.show);
      appendHTML(div, text);
    }
  }

  /**
   * Extract the stacktrace from the given exception/error object, if available.
   *
   * @private
   * @param {Error} ex The exception which carries the stack dump to be extracted.
   *        When no exception instance is passed to this function, the current
   *        call stack will be obtained and produced instead.
   *
   * @return {Array} Returns an array of stacktrace lines, if any. Always returns an array,
   *         which *MAY* be empty if no stacktrace is accessible.
   */
  function extractStackTrace(ex) {
    var st = [];
    if (ex && ex.stack) {
      var stackdump = '' + ex.stack;
      st = stackdump.split('\n');
      st.shift();
      var depth_track = 0;
      st = st.map(function translate(f) {
        f = f
        .trim()
        // anonymous - unnamed functions:
        .replace(/^at [a-z]+:\/\/.+?\/([a-z0-9_]+)\.js:([0-9]+)(?:\:.*)?$/i, 'SRC::$1.L$2')
        .replace(/^at ([a-z_\$][a-z0-9_\$\.]*)\s[^\s]+$/i, '$1');

        if (f.indexOf('Suite.ui.') === 0) {
          depth_track++;
        } else if (depth_track) {
          depth_track++;
        }
        if (depth_track > 2) {
          // nuke all remaining stack lines from this point forward:
          f = null;
        }
        return f;
      })
      .filter(function (l) {
        return l != null;
      });
    } else {
      try {
        throw new Error('stackdump');
      } catch (e) {
        if (e.stack) {
          st = extractStackTrace(e);
        }
      }
    } 
    return st;
  }

  /**
   * Sets the status text.
   *
   * @private
   * @param {string} text The text to write to the status.
   */
  function setStatus(text) {
    setHTML('status', text);
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Parses the window.location.hash value into an object assigned to `ui.params`.
   *
   * @static
   * @memberOf ui
   * @returns {Object} The suite instance.
   */
  function parseHash() {
    var me = this,
        hashes = window.location.hash.slice(1).split('&'),
        params = me.params || (me.params = {});

    // remove old params
    _.forOwn(params, function(value, key) {
      delete params[key];
    });

    // add new params
    _.each(hashes[0] && hashes, function(value) {
      value = value.split('=');
      params[value[0].toLowerCase()] = (value[1] || '').toLowerCase();
    });
    return me;
  }

  /**
   * Renders the results table cell of the corresponding benchmark(s).
   *
   * @static
   * @memberOf ui
   * @param {number} [index] The index of the benchmark to render.
   * @returns {Object} The suite instance.
   */
  function render(index) {
    if (index != null && (index < 0 || index >= ui.benchmarks.length)) {
      debugger;
    }
    _.each(index == null ? (index = 0, ui.benchmarks) : [ui.benchmarks[index]], function(bench) {
      var parsed,
          cell = $(prefix + (++index)),
          error = bench.error,
          hz = bench.hz;

      // reset title and class
      //cell.title = '';
      cell.className = classNames.results;

      // status: error
      if (error) {
        setHTML(cell, 'Error');
        addClass(cell, classNames.error);
        logError(error, 'failed to complete benchmark #' + bench.id + ': ' + bench.name);
      }
      else {
        // status: running
        if (bench.running) {
          setHTML(cell, 'running&hellip;');
        }
        // status: completed
        else if (bench.cycles) {
          // obscure details until the suite has completed
          if (ui.running) {
            setHTML(cell, 'completed');
          }
          else {
            cell.title = 'Ran ' + formatNumber(bench.count) + ' times in ' +
              bench.times.cycle.toFixed(3) + ' seconds.';
            setHTML(cell, formatNumber(hz.toFixed(hz < 100 ? 2 : 0)) +
              ' <small>&plusmn;' + bench.stats.rme.toFixed(2) + '%</small>');
          }
        }
        else {
          // status: pending
          if (ui.running && ui.indexOf(bench) > -1) {
            setHTML(cell, 'pending&hellip;');
          }
          // status: ready
          else {
            setHTML(cell, 'ready');
          }
        }
      }
    });
    return ui;
  }

  /*--------------------------------------------------------------------------*/

  ui.on('add', function(event) {
    var bench = event.target,
        index = ui.benchmarks.length,
        id;

    id = index + 1;
    if (id !== bench.id) {
      debugger;
    }
    id = bench.id;

    var table = $('test-rows-container');
    var table_row_template = $('test-row-template').innerHTML;

    // When this benchmark is the first item in a new group, we must must also
    // construct its group header in HTML (possibly recursively when the group
    // itself is the first member of another group...)
    function printGroupHeader(group_info, level) {
      level = level || 1;

      // check if there's a grand(+).parent specified and when so, are we 
      // occupying the first slot in there?
      if (group_info._group_parent && group_info._group_item_index === 0) {
        printGroupHeader(group_info._group_parent, level + 1);
      }

      var table_group_row_template = $('test-group-row-template').innerHTML;
      appendHTML(table, table_group_row_template.replace(/ID/g, id).replace(/LEVEL/g, level));

      var title = $('group-description-' + level + '-' + id);

      setHTML(title, mdRender(group_info.name));
    }

    if (bench._group_parent && bench._group_item_index === 0) {
      printGroupHeader(bench._group_parent);
    }

    appendHTML(table, table_row_template.replace(/ID/g, id));

    var title = $('title-' + id),
        sourceDisplay = $('code-' + id),
        row = $('test-row-' + id);

    setHTML(title, mdRender(bench.name));
    setHTML(sourceDisplay, '<pre><code>' + escape(unindent(bench.fn)) + '</code></pre>');

    if (typeof bench.ranking !== 'undefined' && !bench.ranking) {
      addClass(row, 'no-ranking');
    }

    ui.benchmarks.push(bench);

    if (has.runner) {
      title.tabIndex = 0;
      title.title = 'Click to run this test again.';

      // As the `appendHTML()` above will nuke any events registered with already 
      // existing elements in the table, we better use Event Delegation here and
      // bind the handler to the table instead!
      // 
      // The added benefit then is we only need to add it *once*, but we *may*
      // register the same handler for every line again without any harm as the
      // registered event handlers are deduped: see also 
      // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Multiple_identical_event_listeners 
      addListener(table, 'click', handlers.title.click);
      addListener(table, 'keyup', handlers.title.keyup);

      bench.on('start', handlers.benchmark.start);
      bench.on('start cycle', handlers.benchmark.cycle);
      ui.render(index);
    }
  })
  .on('start cycle', function(ev) {
    var target = ev.target;
    current_task_description = 'running benchmark #' + target.id + ': ' + target.name;

    ui.render(ev.type === 'start' ? null : target.id - 1);
    setHTML('run', texts.run.running);
  })
  .on('complete', function(ev) {
    current_task_description = 'summarizing benchmark results';

    var benches = filter(ui.benchmarks, 'successful'),
        fastest = filter(benches, 'fastest'),
        slowest = filter(benches, 'slowest');

    ui.render();
    setHTML('run', texts.run.again);
    setStatus(texts.status.again);

    // highlight result cells
    _.each(benches, function(bench) {
      var cell = $(prefix + (_.indexOf(ui.benchmarks, bench) + 1)),
          fastestHz = getHz(fastest[0]),
          hz = getHz(bench),
          percent = (1 - (hz / fastestHz)) * 100,
          span = cell.getElementsByTagName('span')[0],
          text = 'fastest';

      if (_.indexOf(fastest, bench) > -1) {
        // mark fastest
        addClass(cell, text);
        text += '<br>(&#x2715;&#x00a0;1)';
      }
      else {
        var is_slower = (percent > 0);
        percent = Math.abs(percent);
        text = isFinite(hz)
          ? formatNumber(percent < 1 ? percent.toFixed(2) : Math.round(percent)) + '% ' + (is_slower ? 'slower' : 'faster') + '<br>(&#x2715;&#x00a0;' + (fastestHz / hz).toFixed(1) + ')'
          : '';

        // mark slowest
        if (_.indexOf(slowest, bench) > -1) {
          addClass(cell, 'slowest');
        }
      }
      // write ranking
      if (span) {
        setHTML(span, text);
      } else {
        appendHTML(cell, '<span>' + text + '</span>');
      }
    });

    if (ui.browserscope) {
      ui.browserscope.post();
    }
  });

  /*--------------------------------------------------------------------------*/

  /**
   * An array of benchmarks created from test cases.
   *
   * @memberOf ui
   * @type Array
   */
  ui.benchmarks = [];

  /**
   * The parsed query parameters of the pages url hash.
   *
   * @memberOf ui
   * @type Object
   */
  ui.params = {};

  // parse query params into ui.params hash
  ui.parseHash = parseHash;

  // (re)render the results of one or more benchmarks
  ui.render = render;

  // copy the content of these IDs to the setup display section of the test page:
  ui.initPrepSections = function (dom, init, setup_teardown) {
    dom = $(dom);
    init = $(init);
    setup_teardown = $(setup_teardown);
    setHTML('user-output', dom.innerHTML);
    setHTML('prep-code-display', '<code>' + escape(unindent(dom.innerHTML) + '\n<script>\n' + unindent(init.innerHTML) + '\n\n// -----------------\n// setup + teardown:\n// -----------------\n\n' + unindent(setup_teardown.innerHTML) + '\n</script>'));
  };

  ui.initFromJSON = function (json) {
    setHTML('test-title-1', mdRenderInline(json.title || '???'));
    setHTML('test-title-2', mdRenderInline(json.title || '???'));
    setHTML('test-description', mdRender(json.description || '(none)'));

    if (ui.browserscope) {
      ui.browserscope.key = json.browserscope_API_key;

      ui.browserscope.init();
    }

    setHTML('user-output', json.HTML);

    if (json.related) {
      var rellst = [];

      for (var i = 0; i < json.related.length; i++) {
        var link = json.related[i];
        rellst.push('<li><a href="?' + ((Math.random() * 1000) | 0) /* hack: force reload */ + '#testfile=' + link + '">' + link.replace(/\.json5?/, '') + '</a></li>');
      }
      setHTML('related-tests', rellst.join('\n'));
    }

    var prep_source_code = unindent(json.init) + '\n\n// -----------------\n// setup:\n// -----------------\n\n' + unindent(json.setup) + '\n\n// -----------------\n// teardown:\n// -----------------\n\n' + unindent(json.teardown) + '\n';
    setHTML('prep-code-display', '<code>' + escape(unindent(json.HTML) + '\n<script>\n' + prep_source_code + '\n</script>') + '</code>');
    // run this code in global scope:
    console.log('init code loading into global scope:\n', prep_source_code);
    current_task_description = 'run init + setup + teardown code sections';

    // We are going to execute userland code here: it can crash 
    // hence we have to wrap it in `try/catch` to ensure decent user feedback
    // on failure.
    try {
      globalEval(prep_source_code);
    } catch (e) {
      var error = e || new Error(String(e));

      logError(e, 'running the benchmark\'s preparation code failed');
    }

    current_task_description = null;

    function addBenchmarks(tests, group_parent) {
      var bench;
      for (var i = 0, l = tests; (bench = l[i]); i++) {
        // augment bench/group-spec with a reference to its parent, if there's any:
        if (group_parent) {
          // WARNING: name `_group_parent` member of benchmark with 'private underscore'
          //          so that benchmark.js doesn't barf inside `Benchmark.reset()`
          //          due to the deepCopy+change detect code in there, which would 
          //          then add infinite numbers of change inspection queue entries! 
          bench._group_parent = group_parent;

          // and give every benchmark/sub-group an index within its own parent/group.
          bench._group_item_index = i;

          // and copy all attributes from the group into the item, but DO NOT
          // overwrite any existing attributes!
          for (var key in group_parent) {
            if (key !== 'tests' && !(key in bench)) {
              bench[key] = group_parent[key];
            }
          }
        }

        // check if the entry is a group-spec rather than a bench-spec:
        if (!bench.fn && Array.isArray(bench.tests)) {
          addBenchmarks(bench.tests, bench);
        } else {
          ui.add(bench);
        }
      }
    }

    addBenchmarks(json.tests);
  };

  /*--------------------------------------------------------------------------*/

  // expose
  window.ui = ui;

  // don't let users alert, confirm, prompt, or open new windows
  window.alert = window.confirm = window.prompt = window.open = function() {};

  window.setHTML = setHTML;

  // parse hash query params when it changes
  addListener(window, 'hashchange', handlers.window.hashchange);

  // bootstrap onload
  addListener(window, 'load', handlers.window.load);

  // parse location hash string
  ui.parseHash();

  // provide a simple UI for toggling between chart types and filtering results
  // (assumes ui.js is just before </body>)
  (function() {
    var sibling = $('bs-results'),
        p = createElement('p');

    p.innerHTML =
      '<span id=charts><strong>Chart type:</strong> <a href=#>bar</a>, ' +
      '<a href=#>column</a>, <a href=#>line</a>, <a href=#>pie</a>, ' +
      '<a href=#>table</a></span><br>' +
      '<span id=filters><strong>Filter:</strong> <a href=#>popular</a>, ' +
      '<a href=#>all</a>, <a href=#>desktop</a>, <a href=#>family</a>, ' +
      '<a href=#>major</a>, <a href=#>minor</a>, <a href=#>mobile</a>, ' +
      '<a href=#>prerelease</a></span>';

    sibling.parentNode.insertBefore(p, sibling);

    // use DOM0 event handler to simplify canceling the default action
    $('charts').onclick =
    $('filters').onclick = function(event) {
      event || (event = window.event);
      var target = event.target || event.srcElement;
      if (target.href || (target = target.parentNode).href) {
        if (ui.browserscope) {
          ui.browserscope.render(
            target.parentNode.id === 'charts'
              ? { 'chart': target.innerHTML }
              : { 'filterBy': target.innerHTML }
          );
        }
      }
      // cancel the default action
      return false;
    };
  }());

  /*--------------------------------------------------------------------------*/

  // fork for runner or embedded chart
  if (has.runner) {
    // detect the scroll element
    (function() {
      var scrollTop,
          div = document.createElement('div'),
          body = document.body,
          bodyStyle = body.style,
          bodyHeight = bodyStyle.height,
          html = document.documentElement,
          htmlStyle = html.style,
          htmlHeight = htmlStyle.height;

      bodyStyle.height = htmlStyle.height = 'auto';
      div.style.cssText = 'display:block;height:9001px;';
      body.insertBefore(div, body.firstChild);
      scrollTop = html.scrollTop;

      // set `scrollEl` that's used in `handlers.window.hashchange()`
      if (html.clientWidth !== 0 && ++html.scrollTop && html.scrollTop === scrollTop + 1) {
        scrollEl = html;
      }
      body.removeChild(div);
      bodyStyle.height = bodyHeight;
      htmlStyle.height = htmlHeight;
      html.scrollTop = scrollTop;
    }());

    // catch and display errors from the "preparation code"
    window.onerror = function (message, fileName, lineNumber, charPos, exception) {
      logError(exception, {
        message: message,
        fileName: fileName,
        lineNumber: lineNumber
      });
      scrollEl.scrollTop = $('error-info').offsetTop;
    };
  }
  else {
    // short circuit unusable methods
    ui.render = function() {};
    ui.off('start cycle complete');
    setTimeout(function() {
      ui.off();
      if (ui.browserscope) {
        ui.browserscope.post = function() {};
      }
      _.invokeMap(ui.benchmarks, 'off');
    }, 1);
  }

  /*--------------------------------------------------------------------------*/

  // optimized asynchronous Google Analytics snippet based on
  // https://mathiasbynens.be/notes/async-analytics-snippet
  if (gaId) {
    (function() {
      var script = createElement('script'),
          sibling = document.getElementsByTagName('script')[0];

      window._gaq = [['_setAccount', gaId], ['_trackPageview']];
      script.src = 'https://www.google-analytics.com/ga.js';
      sibling.parentNode.insertBefore(script, sibling);
    }());
  }
}(this, document));
