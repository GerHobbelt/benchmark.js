# <a href="https://benchmarkjs.com/">Benchmark.js</a> <span>v2.1.4-25</span>

<!-- div class="toc-container" -->




<!-- div -->

## <a name="toc-methods"></a> Methods

* <a href="#benchmarkname-fn-options">`Benchmark`</a>
* <a href="#benchmarkdeferredclone">`Benchmark.Deferred`</a>
* <a href="#benchmarkdeferredprototyperesolve">`Benchmark.Deferred.prototype.resolve`</a>
* <a href="#benchmarkeventtype">`Benchmark.Event`</a>
* <a href="#benchmarksuitename-options">`Benchmark.Suite`</a>
* <a href="#benchmarksuiteprototypeabort">`Benchmark.Suite.prototype.abort`</a>
* <a href="#benchmarksuiteprototypeaddname-fn-options">`Benchmark.Suite.prototype.add`</a>
* <a href="#benchmarksuiteprototypecloneoptions">`Benchmark.Suite.prototype.clone`</a>
* <a href="#benchmarksuiteprototypefiltercallback">`Benchmark.Suite.prototype.filter`</a>
* <a href="#benchmarksuiteprototypereset">`Benchmark.Suite.prototype.reset`</a>
* <a href="#benchmarksuiteprototyperunoptions">`Benchmark.Suite.prototype.run`</a>
* <a href="#benchmarkfilterarray-callback">`Benchmark.filter`</a>
* <a href="#benchmarkformatnumbernumber">`Benchmark.formatNumber`</a>
* <a href="#benchmarkinvokebenches-name-args">`Benchmark.invoke`</a>
* <a href="#benchmarkjoinobject-separator1-separator2:">`Benchmark.join`</a>
* <a href="#benchmarkrunincontextcontextroot">`Benchmark.runInContext`</a>
* <a href="#benchmarkprototypeabort">`Benchmark.prototype.abort`</a>
* <a href="#benchmarkprototypecloneoptions">`Benchmark.prototype.clone`</a>
* <a href="#benchmarkprototypecompareother">`Benchmark.prototype.compare`</a>
* <a href="#benchmarkprototypeemittype-args">`Benchmark.prototype.emit`</a>
* <a href="#benchmarkprototypelistenerstype">`Benchmark.prototype.listeners`</a>
* <a href="#benchmarkprototypeofftype-listener">`Benchmark.prototype.off`</a>
* <a href="#benchmarkprototypeontype-listener">`Benchmark.prototype.on`</a>
* <a href="#benchmarkprototypereset">`Benchmark.prototype.reset`</a>
* <a href="#benchmarkprototyperunoptions">`Benchmark.prototype.run`</a>
* <a href="#benchmarkprototypetostring">`Benchmark.prototype.toString`</a>

<!-- /div -->




<!-- div -->

## <a name="toc-properties"></a> Properties

* <a href="#benchmarkdeferredprototypebenchmark">`Benchmark.Deferred.prototype.benchmark`</a>
* <a href="#benchmarkdeferredprototypecycles">`Benchmark.Deferred.prototype.cycles`</a>
* <a href="#benchmarkdeferredprototypeelapsed">`Benchmark.Deferred.prototype.elapsed`</a>
* <a href="#benchmarkdeferredprototypetimestamp">`Benchmark.Deferred.prototype.timeStamp`</a>
* <a href="#benchmarkeventprototypeaborted">`Benchmark.Event.prototype.aborted`</a>
* <a href="#benchmarkeventprototypecancelled">`Benchmark.Event.prototype.cancelled`</a>
* <a href="#benchmarkeventprototypecurrenttarget">`Benchmark.Event.prototype.currentTarget`</a>
* <a href="#benchmarkeventprototyperesult">`Benchmark.Event.prototype.result`</a>
* <a href="#benchmarkeventprototypetarget">`Benchmark.Event.prototype.target`</a>
* <a href="#benchmarkeventprototypetimestamp">`Benchmark.Event.prototype.timeStamp`</a>
* <a href="#benchmarkeventprototypetype">`Benchmark.Event.prototype.type`</a>
* <a href="#benchmarksuiteoptions">`Benchmark.Suite.options`</a>
* <a href="#benchmarksuiteoptionsname">`Benchmark.Suite.options.name`</a>
* <a href="#benchmarksuiteprototypeaborted">`Benchmark.Suite.prototype.aborted`</a>
* <a href="#benchmarksuiteprototypelength">`Benchmark.Suite.prototype.length`</a>
* <a href="#benchmarksuiteprototyperunning">`Benchmark.Suite.prototype.running`</a>
* <a href="#benchmarkoptions">`Benchmark.options`</a>
* <a href="#benchmarkoptionsasync">`Benchmark.options.async`</a>
* <a href="#benchmarkoptionsdefer">`Benchmark.options.defer`</a>
* <a href="#benchmarkoptionsdelay">`Benchmark.options.delay`</a>
* <a href="#benchmarkoptionsid">`Benchmark.options.id`</a>
* <a href="#benchmarkoptionsinitcount">`Benchmark.options.initCount`</a>
* <a href="#benchmarkoptionsmaxtime">`Benchmark.options.maxTime`</a>
* <a href="#benchmarkoptionsminsamples">`Benchmark.options.minSamples`</a>
* <a href="#benchmarkoptionsmintime">`Benchmark.options.minTime`</a>
* <a href="#benchmarkoptionsname">`Benchmark.options.name`</a>
* <a href="#benchmarkoptionsonabort">`Benchmark.options.onAbort`</a>
* <a href="#benchmarkoptionsoncomplete">`Benchmark.options.onComplete`</a>
* <a href="#benchmarkoptionsoncycle">`Benchmark.options.onCycle`</a>
* <a href="#benchmarkoptionsonerror">`Benchmark.options.onError`</a>
* <a href="#benchmarkoptionsonreset">`Benchmark.options.onReset`</a>
* <a href="#benchmarkoptionsonstart">`Benchmark.options.onStart`</a>
* <a href="#benchmarkoptionsoperationsperround">`Benchmark.options.operationsPerRound`</a>
* <a href="#benchmarkoptionsranking">`Benchmark.options.ranking`</a>
* <a href="#benchmarkplatform">`Benchmark.platform`</a>
* <a href="#benchmarksupport">`Benchmark.support`</a>
* <a href="#benchmarksupportbrowser">`Benchmark.support.browser`</a>
* <a href="#benchmarkversion">`Benchmark.version`</a>
* <a href="#benchmarkprototypeaborted">`Benchmark.prototype.aborted`</a>
* <a href="#benchmarkprototypecompiled">`Benchmark.prototype.compiled`</a>
* <a href="#benchmarkprototypecount">`Benchmark.prototype.count`</a>
* <a href="#benchmarkprototypecycles">`Benchmark.prototype.cycles`</a>
* <a href="#benchmarksupportdecompilation">`Benchmark.support.decompilation`</a>
* <a href="#benchmarkprototypeerror">`Benchmark.prototype.error`</a>
* <a href="#benchmarkprototypefn">`Benchmark.prototype.fn`</a>
* <a href="#benchmarkprototypehz">`Benchmark.prototype.hz`</a>
* <a href="#benchmarkprototypeoperationsperround">`Benchmark.prototype.operationsPerRound`</a>
* <a href="#benchmarkprototyperunning">`Benchmark.prototype.running`</a>
* <a href="#benchmarkprototypesetup">`Benchmark.prototype.setup`</a>
* <a href="#benchmarkprototypestats">`Benchmark.prototype.stats`</a>
* <a href="#benchmarkprototypeteardown">`Benchmark.prototype.teardown`</a>
* <a href="#benchmarksupporttimeout">`Benchmark.support.timeout`</a>
* <a href="#benchmarkprototypetimes">`Benchmark.prototype.times`</a>
* <a href="#benchmark-statsdeviation">`Benchmark#stats.deviation`</a>
* <a href="#benchmark-statsmean">`Benchmark#stats.mean`</a>
* <a href="#benchmark-statsmoe">`Benchmark#stats.moe`</a>
* <a href="#benchmark-statsrme">`Benchmark#stats.rme`</a>
* <a href="#benchmark-statssample">`Benchmark#stats.sample`</a>
* <a href="#benchmark-statssem">`Benchmark#stats.sem`</a>
* <a href="#benchmark-statsvariance">`Benchmark#stats.variance`</a>
* <a href="#benchmark-timescycle">`Benchmark#times.cycle`</a>
* <a href="#benchmark-timeselapsed">`Benchmark#times.elapsed`</a>
* <a href="#benchmark-timesperiod">`Benchmark#times.period`</a>
* <a href="#benchmark-timestimestamp">`Benchmark#times.timeStamp`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->




<!-- div -->

## Methods




<!-- div -->

### <a name="benchmarkname-fn-options"></a> `Benchmark(name, fn, [options={}])` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L375 "View in source") [&#x24C9;][1]

The Benchmark constructor.
<br>
<br>
Note: The Benchmark constructor exposes a handful of lodash methods to
make working with arrays, collections, and objects easier. The lodash
methods are:<br>
[`each/forEach`](https://lodash.com/docs#forEach), [`forOwn`](https://lodash.com/docs#forOwn),
[`has`](https://lodash.com/docs#has), [`indexOf`](https://lodash.com/docs#indexOf),
[`map`](https://lodash.com/docs#map), and [`reduce`](https://lodash.com/docs#reduce)




#### Arguments

1. `name` *(string)*: A name to identify the benchmark.
2. `fn` *(Function|string)*: The test to benchmark.
3. `[options={}]` *(Object)*: Options object.




#### Example

```js
// basic usage (the `new` operator is optional)
var bench = new Benchmark(fn);

// or using a name first
var bench = new Benchmark('foo', fn);

// or with options
var bench = new Benchmark('foo', fn, {

  // displayed by `Benchmark#toString` if `name` is not available
  id: 'xyz',

  // called when the benchmark starts running
  onStart: onStart,

  // called after each run cycle
  onCycle: onCycle,

  // called when aborted
  onAbort: onAbort,

  // called when a test errors
  onError: onError,

  // called when reset
  onReset: onReset,

  // called when the benchmark completes running
  onComplete: onComplete,

  // compiled/called before the test loop
  setup: setup,

  // compiled/called after the test loop
  teardown: teardown
});

// or name and options
var bench = new Benchmark('foo', {

  // a flag to indicate the benchmark is deferred
  defer: true,

  // benchmark test function
  fn: function (deferred) {
    // call `Deferred#resolve` when the deferred test is finished
    deferred.resolve();
  }
});

// or options only
var bench = new Benchmark({

  // benchmark name
  name: 'foo',

  // benchmark test as a string
  fn: '[1,2,3,4].sort()'
});

// a test's `this` binding is set to the benchmark instance
var bench = new Benchmark('foo', function () {
  'My name is '.concat(this.name); // "My name is foo"
});
```

---

<!-- /div -->



<!-- div -->

### <a name="benchmarkdeferredclone"></a> `Benchmark.Deferred(clone)` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L422 "View in source") [&#x24C9;][1]

The Deferred constructor.




#### Arguments

1. `clone` *(Object)*: The cloned benchmark instance.

---

<!-- /div -->



<!-- div -->

### <a name="benchmarkdeferredprototyperesolve"></a> `Benchmark.Deferred.prototype.resolve()` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L756 "View in source") [&#x24C9;][1]

Handles cycling/completing the deferred benchmark.

---

<!-- /div -->



<!-- div -->

### <a name="benchmarkeventtype"></a> `Benchmark.Event(type)` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L445 "View in source") [&#x24C9;][1]

The Event constructor.
<br>
<br>
Every Event instance has these members at least:
<br>
<br>
<br>
* `timeStamp`: the event creation timestamp *(via `_.now()`)*
<br>
* `global`: a reference to the `global` context which is also available  to the `setup`/`fn`/`teardown` benchmark functions/code.
<br>
* `type`: the `type` value when that constructor argument is a String.




#### Arguments

1. `type` *(Object|string)*: The event type.

---

<!-- /div -->



<!-- div -->

### <a name="benchmarksuitename-options"></a> `Benchmark.Suite(name, [options={}])` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L503 "View in source") [&#x24C9;][1]

The Suite constructor.
<br>
<br>
Note: Each Suite instance has a handful of wrapped lodash methods to
make working with Suites easier. The wrapped lodash methods are:<br>
[`each/forEach`](https://lodash.com/docs#forEach), [`indexOf`](https://lodash.com/docs#indexOf),
[`map`](https://lodash.com/docs#map), and [`reduce`](https://lodash.com/docs#reduce)




#### Arguments

1. `name` *(string)*: A name to identify the suite.
2. `[options={}]` *(Object)*: Options object.




#### Example

```js
// basic usage (the `new` operator is optional)
var suite = new Benchmark.Suite;

// or using a name first
var suite = new Benchmark.Suite('foo');

// or with options
var suite = new Benchmark.Suite('foo', {

  // called when the suite starts running
  onStart: onStart,

  // called between running benchmarks
  onCycle: onCycle,

  // called when aborted
  onAbort: onAbort,

  // called when a test errors
  onError: onError,

  // called when reset
  onReset: onReset,

  // called when the suite completes running
  onComplete: onComplete
});
```

---

<!-- /div -->



<!-- div -->

### <a name="benchmarksuiteprototypeabort"></a> `Benchmark.Suite.prototype.abort()` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L1071 "View in source") [&#x24C9;][1]

Aborts all benchmarks in the suite.




#### Returns

*(Object)*: The suite instance.

---

<!-- /div -->



<!-- div -->

### <a name="benchmarksuiteprototypeaddname-fn-options"></a> `Benchmark.Suite.prototype.add(name, fn, [options={}])` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L1131 "View in source") [&#x24C9;][1]

Adds a test to the benchmark suite.




#### Arguments

1. `name` *(string)*: A name to identify the benchmark.
2. `fn` *(Function|string)*: The test to benchmark.
3. `[options={}]` *(Object)*: Options object which is passed into the Benchmark constructor for this test.




#### Returns

*(Object)*: The suite instance.




#### Example

```js
// basic usage
suite.add(fn);

// or using a name first
suite.add('foo', fn);

// or with options
suite.add('foo', fn, {
  onCycle: onCycle,
  onComplete: onComplete
});

// or name and options
suite.add('foo', {
  fn: fn,
  onCycle: onCycle,
  onComplete: onComplete
});

// or options only
suite.add({
  name: 'foo',
  fn: fn,
  onCycle: onCycle,
  onComplete: onComplete
});
```

---

<!-- /div -->



<!-- div -->

### <a name="benchmarksuiteprototypecloneoptions"></a> `Benchmark.Suite.prototype.clone(options)` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L1150 "View in source") [&#x24C9;][1]

Creates a new suite with cloned benchmarks.




#### Arguments

1. `options` *(Object)*: Options object to overwrite cloned suite options.




#### Returns

*(Object)*: The new suite instance.

---

<!-- /div -->



<!-- div -->

### <a name="benchmarksuiteprototypefiltercallback"></a> `Benchmark.Suite.prototype.filter(callback)` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L1173 "View in source") [&#x24C9;][1]

An `Array#filter` like method.




#### Arguments

1. `callback` *(Function|string)*: The `filter()` function/alias called per iteration.




#### Returns

*(Object)*: A new suite of benchmarks that passed the `callback` filter.

---

<!-- /div -->



<!-- div -->

### <a name="benchmarksuiteprototypereset"></a> `Benchmark.Suite.prototype.reset()` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L1188 "View in source") [&#x24C9;][1]

Resets all benchmarks in the suite.




#### Returns

*(Object)*: The suite instance.

---

<!-- /div -->



<!-- div -->

### <a name="benchmarksuiteprototyperunoptions"></a> `Benchmark.Suite.prototype.run([options={}])` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L1225 "View in source") [&#x24C9;][1]

Runs the suite.




#### Arguments

1. `[options={}]` *(Object)*: Options object.




#### Returns

*(Object)*: The suite instance.




#### Example

```js
// basic usage
suite.run();

// or with options
suite.run({ async: true, queued: true });
```

---

<!-- /div -->



<!-- div -->

### <a name="benchmarkfilterarray-callback"></a> `Benchmark.filter(array, callback)` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L812 "View in source") [&#x24C9;][1]

A generic `Array#filter` like method.




#### Arguments

1. `array` *(Array)*: The array to iterate over.
2. `callback` *(Function|string)*: The function/alias called per iteration.
<br>
<br>
Supported aliases:<br>
<br>
&#42; `'successful'`: exclude those benchmark runs which have errored out, haven't run, or have a `hz` &#42;(calculated frequency, i.e. number of runs per second)&#42; of `Infinity` 
<br>
&#42; `'ranking'`: exclude those benchmarks which do not participate in ranking, i.e. have their `ranking` option set to a truthy value or undefined.
<br>
&#42; `'fastest'`: ...
<br>
&#42; `'slowest'`: ...




#### Returns

*(Array)*: A new array of values that passed callback filter.




#### Example

```js
// get odd numbers
Benchmark.filter([1, 2, 3, 4, 5], function (n) {
  return n % 2;
}); // -> [1, 3, 5];

// get fastest benchmarks
Benchmark.filter(benches, 'fastest');

// get slowest benchmarks
Benchmark.filter(benches, 'slowest');

// get benchmarks that completed without erroring
Benchmark.filter(benches, 'successful');
```

---

<!-- /div -->



<!-- div -->

### <a name="benchmarkformatnumbernumber"></a> `Benchmark.formatNumber(number)` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L849 "View in source") [&#x24C9;][1]

Converts a number to a more readable comma-separated string representation.




#### Arguments

1. `number` *(number)*: The number to convert.




#### Returns

*(string)*: The more readable string representation.

---

<!-- /div -->



<!-- div -->

### <a name="benchmarkinvokebenches-name-args"></a> `Benchmark.invoke(benches, name, [args])` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L894 "View in source") [&#x24C9;][1]

Invokes a method on all items in an array.




#### Arguments

1. `benches` *(Array)*: Array of benchmarks to iterate over.
2. `name` *(Object|string)*: The name of the method to invoke OR options object.
3. `[args]` *(...&#42;)*: Arguments to invoke the method with.




#### Returns

*(Array)*: A new array of values returned from each method invoked.




#### Example

```js
// invoke `reset` on all benchmarks
Benchmark.invoke(benches, 'reset');

// invoke `emit` with arguments
Benchmark.invoke(benches, 'emit', 'complete', listener);

// invoke `run(true)`, treat benchmarks as a queue, and register invoke callbacks
Benchmark.invoke(benches, {

  // invoke the `run` method
  name: 'run',

  // pass a single argument
  args: true,

  // treat as queue, removing benchmarks from front of `benches` until empty
  queued: true,

  // called before any benchmarks have been invoked.
  onStart: onStart,

  // called between invoking benchmarks
  onCycle: onCycle,

  // called after all benchmarks have been invoked.
  onComplete: onComplete
});
```

---

<!-- /div -->



<!-- div -->

### <a name="benchmarkjoinobject-separator1-separator2:"></a> `Benchmark.join(object, [separator1=','], [separator2=': '])` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L1050 "View in source") [&#x24C9;][1]

Creates a string of joined array values or object key-value pairs.




#### Arguments

1. `object` *(Array|Object)*: The object to operate on.
2. `[separator1=',']` *(string)*: The separator used between key-value pairs.
3. `[separator2=': ']` *(string)*: The separator used between keys and values.




#### Returns

*(string)*: The joined result.

---

<!-- /div -->



<!-- div -->

### <a name="benchmarkrunincontextcontextroot"></a> `Benchmark.runInContext([context=root])` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L125 "View in source") [&#x24C9;][1]

Create a new `Benchmark` function using the given `context` object.




#### Arguments

1. `[context=root]` *(Object)*: The context object.




#### Returns

*(Function)*: Returns a new `Benchmark` function.

---

<!-- /div -->



<!-- div -->

### <a name="benchmarkprototypeabort"></a> `Benchmark.prototype.abort()` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L1391 "View in source") [&#x24C9;][1]

Aborts the benchmark without recording times.




#### Returns

*(Object)*: The benchmark instance.

---

<!-- /div -->



<!-- div -->

### <a name="benchmarkprototypecloneoptions"></a> `Benchmark.prototype.clone(options)` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L1455 "View in source") [&#x24C9;][1]

Creates a new benchmark using the same test and options.




#### Arguments

1. `options` *(Object)*: Options object to overwrite cloned options.




#### Returns

*(Object)*: The new benchmark instance.




#### Example

```js
var bizarro = bench.clone({
  name: 'doppelganger'
});
```

---

<!-- /div -->



<!-- div -->

### <a name="benchmarkprototypecompareother"></a> `Benchmark.prototype.compare(other)` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L1479 "View in source") [&#x24C9;][1]

Determines if a benchmark is faster than another.




#### Arguments

1. `other` *(Object)*: The benchmark to compare.




#### Returns

*(number)*: Returns `-1` if slower, `1` if faster, and `0` if indeterminate.

---

<!-- /div -->



<!-- div -->

### <a name="benchmarkprototypeemittype-args"></a> `Benchmark.prototype.emit(type, [args])` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L1265 "View in source") [&#x24C9;][1]

Executes all registered listeners of the specified event type.




#### Arguments

1. `type` *(Object|string)*: The event type or object.
2. `[args]` *(...&#42;)*: Arguments to invoke the listener with.




#### Returns

*(&#42;)*: Returns the return value of the last listener executed.

---

<!-- /div -->



<!-- div -->

### <a name="benchmarkprototypelistenerstype"></a> `Benchmark.prototype.listeners(type)` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L1295 "View in source") [&#x24C9;][1]

Returns an array of event listeners for a given type that can be manipulated
to add or remove listeners.




#### Arguments

1. `type` *(string)*: The event type.




#### Returns

*(Array)*: The listeners array.

---

<!-- /div -->



<!-- div -->

### <a name="benchmarkprototypeofftype-listener"></a> `Benchmark.prototype.off([type], [listener])` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L1328 "View in source") [&#x24C9;][1]

Unregisters a listener for the specified event type(s),
or unregisters all listeners for the specified event type(s),
or unregisters all listeners for all event types.




#### Arguments

1. `[type]` *(string)*: The event type.
2. `[listener]` *(Function)*: The function to unregister.




#### Returns

*(Object)*: The current instance.




#### Example

```js
// unregister a listener for an event type
bench.off('cycle', listener);

// unregister a listener for multiple event types
bench.off('start cycle', listener);

// unregister all listeners for an event type
bench.off('cycle');

// unregister all listeners for multiple event types
bench.off('start cycle complete');

// unregister all listeners for all event types
bench.off();
```

---

<!-- /div -->



<!-- div -->

### <a name="benchmarkprototypeontype-listener"></a> `Benchmark.prototype.on(type, listener)` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L1370 "View in source") [&#x24C9;][1]

Registers a listener for the specified event type(s).




#### Arguments

1. `type` *(string)*: The event type.
2. `listener` *(Function)*: The function to register.




#### Returns

*(Object)*: The current instance.




#### Example

```js
// register a listener for an event type
bench.on('cycle', listener);

// register a listener for multiple event types
bench.on('start cycle', listener);
```

---

<!-- /div -->



<!-- div -->

### <a name="benchmarkprototypereset"></a> `Benchmark.prototype.reset()` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L1532 "View in source") [&#x24C9;][1]

Reset properties and abort if running.




#### Returns

*(Object)*: The benchmark instance.

---

<!-- /div -->



<!-- div -->

### <a name="benchmarkprototyperunoptions"></a> `Benchmark.prototype.run([options={}])` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2308 "View in source") [&#x24C9;][1]

Runs the benchmark.




#### Arguments

1. `[options={}]` *(Object)*: Options object.
<br>
<br>
Supported options:<br>
<br>
&#42; `async`




#### Returns

*(Object)*: The benchmark instance.




#### Example

```js
// basic usage
bench.run();

// or with options
bench.run({ async: true });
```

---

<!-- /div -->



<!-- div -->

### <a name="benchmarkprototypetostring"></a> `Benchmark.prototype.toString()` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L1613 "View in source") [&#x24C9;][1]

Displays relevant benchmark information when coerced to a string.




#### Returns

*(string)*: A string representation of the benchmark instance.

---

<!-- /div -->

<!-- /div -->




<!-- div -->

## Properties




<!-- div -->

### <a name="benchmarkdeferredprototypebenchmark"></a> `Benchmark.Deferred.prototype.benchmark` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2846 "View in source") [&#x24C9;][1]

The deferred benchmark instance.

---

<!-- /div -->



<!-- div -->

### <a name="benchmarkdeferredprototypecycles"></a> `Benchmark.Deferred.prototype.cycles` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2854 "View in source") [&#x24C9;][1]

The number of deferred cycles performed while benchmarking.

---

<!-- /div -->



<!-- div -->

### <a name="benchmarkdeferredprototypeelapsed"></a> `Benchmark.Deferred.prototype.elapsed` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2862 "View in source") [&#x24C9;][1]

The time taken to complete the deferred benchmark *(secs)*.

---

<!-- /div -->



<!-- div -->

### <a name="benchmarkdeferredprototypetimestamp"></a> `Benchmark.Deferred.prototype.timeStamp` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2870 "View in source") [&#x24C9;][1]

A timestamp of when the deferred benchmark started *(ms)*.

---

<!-- /div -->



<!-- div -->

### <a name="benchmarkeventprototypeaborted"></a> `Benchmark.Event.prototype.aborted` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2887 "View in source") [&#x24C9;][1]

A flag to indicate if the emitters listener iteration is aborted.

---

<!-- /div -->



<!-- div -->

### <a name="benchmarkeventprototypecancelled"></a> `Benchmark.Event.prototype.cancelled` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2895 "View in source") [&#x24C9;][1]

A flag to indicate if the default action is cancelled.

---

<!-- /div -->



<!-- div -->

### <a name="benchmarkeventprototypecurrenttarget"></a> `Benchmark.Event.prototype.currentTarget` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2903 "View in source") [&#x24C9;][1]

The object whose listeners are currently being processed.

---

<!-- /div -->



<!-- div -->

### <a name="benchmarkeventprototyperesult"></a> `Benchmark.Event.prototype.result` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2911 "View in source") [&#x24C9;][1]

The return value of the last executed listener.

---

<!-- /div -->



<!-- div -->

### <a name="benchmarkeventprototypetarget"></a> `Benchmark.Event.prototype.target` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2919 "View in source") [&#x24C9;][1]

The object to which the event was originally emitted.

---

<!-- /div -->



<!-- div -->

### <a name="benchmarkeventprototypetimestamp"></a> `Benchmark.Event.prototype.timeStamp` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2927 "View in source") [&#x24C9;][1]

A timestamp of when the event was created *(ms)*.

---

<!-- /div -->



<!-- div -->

### <a name="benchmarkeventprototypetype"></a> `Benchmark.Event.prototype.type` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2935 "View in source") [&#x24C9;][1]

The event type.

---

<!-- /div -->



<!-- div -->

### <a name="benchmarksuiteoptions"></a> `Benchmark.Suite.options` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2947 "View in source") [&#x24C9;][1]

The default options copied by suite instances.

---

<!-- /div -->



<!-- div -->

### <a name="benchmarksuiteoptionsname"></a> `Benchmark.Suite.options.name` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2955 "View in source") [&#x24C9;][1]

The name of the suite.

---

<!-- /div -->



<!-- div -->

### <a name="benchmarksuiteprototypeaborted"></a> `Benchmark.Suite.prototype.aborted` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2976 "View in source") [&#x24C9;][1]

A flag to indicate if the suite is aborted.

---

<!-- /div -->



<!-- div -->

### <a name="benchmarksuiteprototypelength"></a> `Benchmark.Suite.prototype.length` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2968 "View in source") [&#x24C9;][1]

The number of benchmarks in the suite.

---

<!-- /div -->



<!-- div -->

### <a name="benchmarksuiteprototyperunning"></a> `Benchmark.Suite.prototype.running` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2984 "View in source") [&#x24C9;][1]

A flag to indicate if the suite is running.

---

<!-- /div -->



<!-- div -->

### <a name="benchmarkoptions"></a> `Benchmark.options` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2357 "View in source") [&#x24C9;][1]

The default options copied by benchmark instances.

---

<!-- /div -->



<!-- div -->

### <a name="benchmarkoptionsasync"></a> `Benchmark.options.async` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2366 "View in source") [&#x24C9;][1]

A flag to indicate that benchmark cycles will execute asynchronously
by default.

---

<!-- /div -->



<!-- div -->

### <a name="benchmarkoptionsdefer"></a> `Benchmark.options.defer` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2374 "View in source") [&#x24C9;][1]

A flag to indicate that the benchmark clock is deferred.

---

<!-- /div -->



<!-- div -->

### <a name="benchmarkoptionsdelay"></a> `Benchmark.options.delay` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2401 "View in source") [&#x24C9;][1]

The delay between test cycles *(secs)*.

---

<!-- /div -->



<!-- div -->

### <a name="benchmarkoptionsid"></a> `Benchmark.options.id` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2410 "View in source") [&#x24C9;][1]

Displayed by `Benchmark#toString` when a `name` is not available
*(auto-generated if absent)*.

---

<!-- /div -->



<!-- div -->

### <a name="benchmarkoptionsinitcount"></a> `Benchmark.options.initCount` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2418 "View in source") [&#x24C9;][1]

The default number of times to execute a test on a benchmark's first cycle.

---

<!-- /div -->



<!-- div -->

### <a name="benchmarkoptionsmaxtime"></a> `Benchmark.options.maxTime` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2438 "View in source") [&#x24C9;][1]

The maximum time a benchmark is allowed to run before finishing *(secs)*.
<br>
<br>
Note: Cycle delays aren't counted toward the maximum time.

---

<!-- /div -->



<!-- div -->

### <a name="benchmarkoptionsminsamples"></a> `Benchmark.options.minSamples` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2446 "View in source") [&#x24C9;][1]

The minimum sample size required to perform statistical analysis.

---

<!-- /div -->



<!-- div -->

### <a name="benchmarkoptionsmintime"></a> `Benchmark.options.minTime` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2454 "View in source") [&#x24C9;][1]

The time needed to reduce the percent uncertainty of measurement to `1`% *(secs)*.

---

<!-- /div -->



<!-- div -->

### <a name="benchmarkoptionsname"></a> `Benchmark.options.name` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2462 "View in source") [&#x24C9;][1]

The name of the benchmark.

---

<!-- /div -->



<!-- div -->

### <a name="benchmarkoptionsonabort"></a> `Benchmark.options.onAbort` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2470 "View in source") [&#x24C9;][1]

An event listener called when the benchmark is aborted.

---

<!-- /div -->



<!-- div -->

### <a name="benchmarkoptionsoncomplete"></a> `Benchmark.options.onComplete` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2478 "View in source") [&#x24C9;][1]

An event listener called when the benchmark completes running.

---

<!-- /div -->



<!-- div -->

### <a name="benchmarkoptionsoncycle"></a> `Benchmark.options.onCycle` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2486 "View in source") [&#x24C9;][1]

An event listener called after each run cycle.

---

<!-- /div -->



<!-- div -->

### <a name="benchmarkoptionsonerror"></a> `Benchmark.options.onError` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2494 "View in source") [&#x24C9;][1]

An event listener called when a test errors.

---

<!-- /div -->



<!-- div -->

### <a name="benchmarkoptionsonreset"></a> `Benchmark.options.onReset` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2502 "View in source") [&#x24C9;][1]

An event listener called when the benchmark is reset.

---

<!-- /div -->



<!-- div -->

### <a name="benchmarkoptionsonstart"></a> `Benchmark.options.onStart` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2510 "View in source") [&#x24C9;][1]

An event listener called when the benchmark starts running.

---

<!-- /div -->



<!-- div -->

### <a name="benchmarkoptionsoperationsperround"></a> `Benchmark.options.operationsPerRound` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2428 "View in source") [&#x24C9;][1]

The default number of tests run per benchmark function call: set this if you 
want the ops/sec to represent the number of single operations when your benchmark 
code is itself a loop or a repeating sequence of the same operations.

---

<!-- /div -->



<!-- div -->

### <a name="benchmarkoptionsranking"></a> `Benchmark.options.ranking` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2394 "View in source") [&#x24C9;][1]

A flag to indicate that the benchmark participates in the ranking process, i.e. 
will be included in 'fastest'/'slowest' filtered reports.
<br>
<br>
Non-ranked benchmarks, when used as part of a suite, may for example serve as
additional/'foreign' reference material in overview reports which report all
benchmark results, not just the slowest or fastest one(s). Such non-ranked
benchmarks do not 'pollute' the fastest/slowest results and can therefor be
used to, for example, compare the other benchmarks against an more or less
reduced/simplified version of the code-under-test without having that one
'win everything' and serve as `100`% *(= fastest)* reference for the rest.
<br>
<br>
When you don't specify the `ranking` option for a benchmark, then it
is assumed to be ranked *(`ranking = true` is default)*.

---

<!-- /div -->



<!-- div -->

### <a name="benchmarkplatform"></a> `Benchmark.platform` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2521 "View in source") [&#x24C9;][1]

Platform object with properties describing things like browser name,
version, and operating system. See [`platform.js`](https://mths.be/platform).

---

<!-- /div -->



<!-- div -->

### <a name="benchmarksupport"></a> `Benchmark.support` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L209 "View in source") [&#x24C9;][1]

An object used to flag environments/features.

---

<!-- /div -->



<!-- div -->

### <a name="benchmarksupportbrowser"></a> `Benchmark.support.browser` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L219 "View in source") [&#x24C9;][1]

Detect if running in a browser environment.

---

<!-- /div -->



<!-- div -->

### <a name="benchmarkversion"></a> `Benchmark.version` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2542 "View in source") [&#x24C9;][1]

The semantic version number.

---

<!-- /div -->



<!-- div -->

### <a name="benchmarkprototypeaborted"></a> `Benchmark.prototype.aborted` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2635 "View in source") [&#x24C9;][1]

A flag to indicate if the benchmark is aborted.

---

<!-- /div -->



<!-- div -->

### <a name="benchmarkprototypecompiled"></a> `Benchmark.prototype.compiled` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2611 "View in source") [&#x24C9;][1]

The compiled test function.

---

<!-- /div -->



<!-- div -->

### <a name="benchmarkprototypecount"></a> `Benchmark.prototype.count` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2575 "View in source") [&#x24C9;][1]

The number of times a test was executed.

---

<!-- /div -->



<!-- div -->

### <a name="benchmarkprototypecycles"></a> `Benchmark.prototype.cycles` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2583 "View in source") [&#x24C9;][1]

The number of cycles performed while benchmarking.

---

<!-- /div -->



<!-- div -->

### <a name="benchmarksupportdecompilation"></a> `Benchmark.support.decompilation` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L236 "View in source") [&#x24C9;][1]

Detect if function decompilation is support.

---

<!-- /div -->



<!-- div -->

### <a name="benchmarkprototypeerror"></a> `Benchmark.prototype.error` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2619 "View in source") [&#x24C9;][1]

The error object if the test failed.

---

<!-- /div -->



<!-- div -->

### <a name="benchmarkprototypefn"></a> `Benchmark.prototype.fn` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2627 "View in source") [&#x24C9;][1]

The test to benchmark.

---

<!-- /div -->



<!-- div -->

### <a name="benchmarkprototypehz"></a> `Benchmark.prototype.hz` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2591 "View in source") [&#x24C9;][1]

The number of executions per second.

---

<!-- /div -->



<!-- div -->

### <a name="benchmarkprototypeoperationsperround"></a> `Benchmark.prototype.operationsPerRound` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2603 "View in source") [&#x24C9;][1]

The number of tests per single benchmark execution: 
this represents the number of single operations when your benchmark 
code is itself a loop or a repeating sequence of the same operations.
<br>
<br>
This value MAY be set up by the `setup` code to override the default of `1`.

---

<!-- /div -->



<!-- div -->

### <a name="benchmarkprototyperunning"></a> `Benchmark.prototype.running` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2643 "View in source") [&#x24C9;][1]

A flag to indicate if the benchmark is running.

---

<!-- /div -->



<!-- div -->

### <a name="benchmarkprototypesetup"></a> `Benchmark.prototype.setup` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2706 "View in source") [&#x24C9;][1]

Compiled into the test and executed immediately **before** the test loop.




#### Example

```js
// basic usage
var bench = Benchmark({
  setup: function () {
    var c = this.count,
        element = document.getElementById('container');
    while (c--) {
      element.appendChild(document.createElement('div'));
    }
  },
  fn: function () {
    element.removeChild(element.lastChild);
  }
});

// compiles to something like:
var c = this.count,
    element = document.getElementById('container');
while (c--) {
  element.appendChild(document.createElement('div'));
}
var start = new Date;
while (count--) {
  element.removeChild(element.lastChild);
}
var end = new Date - start;

// or using strings
var bench = Benchmark({
  setup: '\
    var a = 0;\n\
    (function () {\n\
      (function () {\n\
        (function () {',
  fn: 'a += 1;',
  teardown: '\
         }())\n\
       }())\n\
     }())'
});

// compiles to something like:
var a = 0;
(function () {
  (function () {
    (function () {
      var start = new Date;
      while (count--) {
        a += 1;
      }
      var end = new Date - start;
    }())
  }())
}())
```

---

<!-- /div -->



<!-- div -->

### <a name="benchmarkprototypestats"></a> `Benchmark.prototype.stats` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2722 "View in source") [&#x24C9;][1]

An object of stats including mean, margin or error, and standard deviation.

---

<!-- /div -->



<!-- div -->

### <a name="benchmarkprototypeteardown"></a> `Benchmark.prototype.teardown` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2714 "View in source") [&#x24C9;][1]

Compiled into the test and executed immediately **after** the test loop.

---

<!-- /div -->



<!-- div -->

### <a name="benchmarksupporttimeout"></a> `Benchmark.support.timeout` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L227 "View in source") [&#x24C9;][1]

Detect if the Timers API exists.

---

<!-- /div -->



<!-- div -->

### <a name="benchmarkprototypetimes"></a> `Benchmark.prototype.times` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2787 "View in source") [&#x24C9;][1]

An object of timing data including cycle, elapsed, period, start, and stop.

---

<!-- /div -->



<!-- div -->

### <a name="benchmark-statsdeviation"></a> `Benchmark#stats.deviation` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2754 "View in source") [&#x24C9;][1]

The sample standard deviation.

---

<!-- /div -->



<!-- div -->

### <a name="benchmark-statsmean"></a> `Benchmark#stats.mean` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2762 "View in source") [&#x24C9;][1]

The sample arithmetic mean *(secs)*.

---

<!-- /div -->



<!-- div -->

### <a name="benchmark-statsmoe"></a> `Benchmark#stats.moe` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2730 "View in source") [&#x24C9;][1]

The margin of error.

---

<!-- /div -->



<!-- div -->

### <a name="benchmark-statsrme"></a> `Benchmark#stats.rme` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2738 "View in source") [&#x24C9;][1]

The relative margin of error *(expressed as a percentage of the mean)*.

---

<!-- /div -->



<!-- div -->

### <a name="benchmark-statssample"></a> `Benchmark#stats.sample` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2770 "View in source") [&#x24C9;][1]

The array of sampled periods.

---

<!-- /div -->



<!-- div -->

### <a name="benchmark-statssem"></a> `Benchmark#stats.sem` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2746 "View in source") [&#x24C9;][1]

The standard error of the mean.

---

<!-- /div -->



<!-- div -->

### <a name="benchmark-statsvariance"></a> `Benchmark#stats.variance` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2778 "View in source") [&#x24C9;][1]

The sample variance.

---

<!-- /div -->



<!-- div -->

### <a name="benchmark-timescycle"></a> `Benchmark#times.cycle` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2795 "View in source") [&#x24C9;][1]

The time taken to complete the last cycle *(secs)*.

---

<!-- /div -->



<!-- div -->

### <a name="benchmark-timeselapsed"></a> `Benchmark#times.elapsed` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2803 "View in source") [&#x24C9;][1]

The time taken to complete the benchmark *(secs)*.

---

<!-- /div -->



<!-- div -->

### <a name="benchmark-timesperiod"></a> `Benchmark#times.period` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2811 "View in source") [&#x24C9;][1]

The time taken to execute the test once *(secs)*.

---

<!-- /div -->



<!-- div -->

### <a name="benchmark-timestimestamp"></a> `Benchmark#times.timeStamp` [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2819 "View in source") [&#x24C9;][1]

A timestamp of when the benchmark started *(ms)*.

---

<!-- /div -->

<!-- /div -->

<!-- /div -->




 [1]: #toc-methods "Jump back to the TOC."
