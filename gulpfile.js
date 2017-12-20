var gulp = require('gulp');
var less = require('gulp-less');
var LessAutoprefix = require('less-plugin-autoprefix');
var stripCssComments = require('gulp-strip-css-comments');
var MarkdownIt = require('@gerhobbelt/markdown-it');
var gutil = require('gulp-util');
var fncallback = require('@gerhobbelt/gulp-fncallback');
var path = require('path');
var fs = require('fs');

var autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });

// LESS --> CSS for the example/jsperf code 
gulp.task('less', function () {
  return gulp.src('./example/jsperf/*.less')
    .pipe(less({
      plugins: [autoprefix]
    }))
    .pipe(stripCssComments({
      preserve: function mustRemoveComment(body) {
        // console.log('test CSS comment: ', body);
        // return !!body.match(/license/gi);
        return false;
      }
    }))
    .pipe(gulp.dest('./example/jsperf/'));
});

// LESS --> CSS for the documentation & example website available via 'gh-pages' 
gulp.task('site-css', function () {
  return gulp.src('./website-assets/stylesheets/website.less')
    .pipe(less({
      plugins: [autoprefix]
    }))
    .pipe(stripCssComments({
      preserve: function mustRemoveComment(body) {
        // console.log('test CSS comment: ', body);
        // return !!body.match(/license/gi);
        return false;
      }
    }))
    .pipe(gulp.dest('./website-assets/stylesheets/'));
});

// Replace all version mentions of Benchmark.JS in the source code
// comments and MarkDown documentation: 
gulp.task('patch-version', function () {
  var pkg = require("./package.json");
  console.log('BenchmarkJS version: ', pkg.version);
   
  return gulp.src(['./**/*.md', './benchmark.js'], {base: './'})
    .pipe(fncallback(function (file, enc, cb) {
      var fn = file.relative;
      if (file.isBuffer() && !(fn || '').match(/\bnode_modules\b/)) {
        var content = file.contents.toString('utf8');

        // Replace all version mentions of Benchmark.JS in the source code
        // comments and MarkDown documentation: 
        var content_n = content.replace(/(\bBenchmark\b[^\n0-9]+)[0-9]+\.[0-9]+\.[0-9]+(-[0-9]+)?/gi, function (m, p1) {
          return p1 + pkg.version;
        });

        // Update benchmark.js version info: that one won't be caught
        // by the previous regex:
        content_n = content_n.replace(/(\bversion:\s+['"])[0-9]+\.[0-9]+\.[0-9]+(-[0-9]+)?/gi, function (m, p1) {
          return p1 + pkg.version;
        });

        // Report all patched files, i.e. only list the ones which did actually *change*:
        if (content_n !== content) {
          console.log('patching version info in file:\t', file.relative);
          file.contents = new Buffer(content_n);
        }
      }

      cb();
    }))
    .pipe(gulp.dest('./'));
});

// Build the 'gh-pages' web pages using `markdown-it` and the template 
// available in `website-assets/` 
gulp.task('gh-pages', function () {
  var md = new MarkdownIt({
    html:         true,         // Enable HTML tags in source
    xhtmlOut:     false,        // Use '/' to close single tags (<br />).
                                // This is only for full CommonMark compatibility.
    breaks:       false,        // Convert '\n' in paragraphs into <br>
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
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    
    //highlight: function (/*str, lang*/) { return ''; }
  });

  var tpl = fs.readFileSync('website-assets/html/index.html.template', 'utf8');

  return gulp.src(['./README.md', './doc/README.md'], {base: './'})
    .pipe(fncallback(function (file, enc, cb) {
      var fn = file.relative;

      var content = file.contents.toString('utf8');

      var result = md.render(content);
      
      file.path = file.path.replace('README.md', 'index.html');

      console.log('path = ', fn, fn.replace(/\\/g, '/'), fn.replace(/\\/g, '/').match(/\//g));
      var p = fn.replace(/\\/g, '/').match(/\//g) || [];
      var dirdepth = p.length;
      var tpl_vars = {
        cloner: 'GerHobbelt',
        author: 'BestieJS',
        file: file,
        content: result, 
        basedir: ['.', '..', '../..', '../../..'][dirdepth],
      };
      result = gutil.template(tpl /* 'test <%= name %> <%= file.path %>' */, tpl_vars);

      file.contents = new Buffer(result);

      cb();
    }))
    .pipe(gulp.dest('./'));
});

// Copy JS assets for the example/jsperf/ pages for the website, which
// doesn't have the node_modules/... dir tree.
gulp.task('copy-js-assets', function () {
  return gulp.src([
    './node_modules/lodash/lodash.js', 
    './node_modules/platform/platform.js', 
    './node_modules/json5/lib/json5.js', 
    './node_modules/markdown-it/dist/markdown-it.js', 
    './node_modules/qunitjs/qunit/qunit.css', 
    './node_modules/qunitjs/qunit/qunit.js', 
    './node_modules/qunit-extras/qunit-extras.js',
    './node_modules/requirejs/require.js'
  ])
  .pipe(gulp.dest('./website-assets/js-libraries/'));
});

 
gulp.task('default', ['patch-version', 'less', 'site-css', 'copy-js-assets', 'gh-pages']);
