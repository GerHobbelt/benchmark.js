# <a href="https://benchmarkjs.com/">Benchmark.js</a> <span>v2.1.1</span>

<!-- div class="toc-container" -->

<!-- div -->

## `Benchmark`
* <a href="#Benchmark">`Benchmark`</a>
* <a href="#Benchmark-filter">`Benchmark.filter`</a>
* <a href="#Benchmark-formatNumber">`Benchmark.formatNumber`</a>
* <a href="#Benchmark-invoke">`Benchmark.invoke`</a>
* <a href="#Benchmark-join">`Benchmark.join`</a>
* <a href="#Benchmark-options">`Benchmark.options`</a>
* <a href="#Benchmark-platform">`Benchmark.platform`</a>
* <a href="#Benchmark-runInContext">`Benchmark.runInContext`</a>
* <a href="#Benchmark-support">`Benchmark.support`</a>
* <a href="#Benchmark-version">`Benchmark.version`</a>

<!-- /div -->

<!-- div -->

## `Benchmark.Deferred`
* <a href="#Benchmark-Deferred">`Benchmark.Deferred`</a>

<!-- /div -->

<!-- div -->

## `Benchmark.Deferred.prototype`
* <a href="#Benchmark-Deferred-prototype-benchmark">`Benchmark.Deferred.prototype.benchmark`</a>
* <a href="#Benchmark-Deferred-prototype-cycles">`Benchmark.Deferred.prototype.cycles`</a>
* <a href="#Benchmark-Deferred-prototype-elapsed">`Benchmark.Deferred.prototype.elapsed`</a>
* <a href="#Benchmark-Deferred-prototype-resolve">`Benchmark.Deferred.prototype.resolve`</a>
* <a href="#Benchmark-Deferred-prototype-timeStamp">`Benchmark.Deferred.prototype.timeStamp`</a>

<!-- /div -->

<!-- div -->

## `Benchmark.Event`
* <a href="#Benchmark-Event">`Benchmark.Event`</a>

<!-- /div -->

<!-- div -->

## `Benchmark.Event.prototype`
* <a href="#Benchmark-Event-prototype-aborted">`Benchmark.Event.prototype.aborted`</a>
* <a href="#Benchmark-Event-prototype-cancelled">`Benchmark.Event.prototype.cancelled`</a>
* <a href="#Benchmark-Event-prototype-currentTarget">`Benchmark.Event.prototype.currentTarget`</a>
* <a href="#Benchmark-Event-prototype-result">`Benchmark.Event.prototype.result`</a>
* <a href="#Benchmark-Event-prototype-target">`Benchmark.Event.prototype.target`</a>
* <a href="#Benchmark-Event-prototype-timeStamp">`Benchmark.Event.prototype.timeStamp`</a>
* <a href="#Benchmark-Event-prototype-type">`Benchmark.Event.prototype.type`</a>

<!-- /div -->

<!-- div -->

## `Benchmark.Suite`
* <a href="#Benchmark-Suite">`Benchmark.Suite`</a>
* <a href="#Benchmark-Suite-options">`Benchmark.Suite.options`</a>

<!-- /div -->

<!-- div -->

## `Benchmark.Suite.options`
* <a href="#Benchmark-Suite-options-name">`Benchmark.Suite.options.name`</a>

<!-- /div -->

<!-- div -->

## `Benchmark.Suite.prototype`
* <a href="#Benchmark-Suite-prototype-abort">`Benchmark.Suite.prototype.abort`</a>
* <a href="#Benchmark-Suite-prototype-aborted">`Benchmark.Suite.prototype.aborted`</a>
* <a href="#Benchmark-Suite-prototype-add">`Benchmark.Suite.prototype.add`</a>
* <a href="#Benchmark-Suite-prototype-clone">`Benchmark.Suite.prototype.clone`</a>
* <a href="#Benchmark-Suite-prototype-filter">`Benchmark.Suite.prototype.filter`</a>
* <a href="#Benchmark-Suite-prototype-length">`Benchmark.Suite.prototype.length`</a>
* <a href="#Benchmark-Suite-prototype-reset">`Benchmark.Suite.prototype.reset`</a>
* <a href="#Benchmark-Suite-prototype-run">`Benchmark.Suite.prototype.run`</a>
* <a href="#Benchmark-Suite-prototype-running">`Benchmark.Suite.prototype.running`</a>

<!-- /div -->

<!-- div -->

## `Benchmark.options`
* <a href="#Benchmark-options-async">`Benchmark.options.async`</a>
* <a href="#Benchmark-options-defer">`Benchmark.options.defer`</a>
* <a href="#Benchmark-options-delay">`Benchmark.options.delay`</a>
* <a href="#Benchmark-options-id">`Benchmark.options.id`</a>
* <a href="#Benchmark-options-initCount">`Benchmark.options.initCount`</a>
* <a href="#Benchmark-options-maxTime">`Benchmark.options.maxTime`</a>
* <a href="#Benchmark-options-minSamples">`Benchmark.options.minSamples`</a>
* <a href="#Benchmark-options-minTime">`Benchmark.options.minTime`</a>
* <a href="#Benchmark-options-name">`Benchmark.options.name`</a>
* <a href="#Benchmark-options-onAbort">`Benchmark.options.onAbort`</a>
* <a href="#Benchmark-options-onComplete">`Benchmark.options.onComplete`</a>
* <a href="#Benchmark-options-onCycle">`Benchmark.options.onCycle`</a>
* <a href="#Benchmark-options-onError">`Benchmark.options.onError`</a>
* <a href="#Benchmark-options-onReset">`Benchmark.options.onReset`</a>
* <a href="#Benchmark-options-onStart">`Benchmark.options.onStart`</a>

<!-- /div -->

<!-- div -->

## `Benchmark.prototype`
* <a href="#Benchmark-prototype-abort">`Benchmark.prototype.abort`</a>
* <a href="#Benchmark-prototype-aborted">`Benchmark.prototype.aborted`</a>
* <a href="#Benchmark-prototype-clone">`Benchmark.prototype.clone`</a>
* <a href="#Benchmark-prototype-compare">`Benchmark.prototype.compare`</a>
* <a href="#Benchmark-prototype-compiled">`Benchmark.prototype.compiled`</a>
* <a href="#Benchmark-prototype-count">`Benchmark.prototype.count`</a>
* <a href="#Benchmark-prototype-cycles">`Benchmark.prototype.cycles`</a>
* <a href="#Benchmark-prototype-emit">`Benchmark.prototype.emit`</a>
* <a href="#Benchmark-prototype-error">`Benchmark.prototype.error`</a>
* <a href="#Benchmark-prototype-fn">`Benchmark.prototype.fn`</a>
* <a href="#Benchmark-prototype-hz">`Benchmark.prototype.hz`</a>
* <a href="#Benchmark-prototype-listeners">`Benchmark.prototype.listeners`</a>
* <a href="#Benchmark-prototype-off">`Benchmark.prototype.off`</a>
* <a href="#Benchmark-prototype-on">`Benchmark.prototype.on`</a>
* <a href="#Benchmark-prototype-reset">`Benchmark.prototype.reset`</a>
* <a href="#Benchmark-prototype-run">`Benchmark.prototype.run`</a>
* <a href="#Benchmark-prototype-running">`Benchmark.prototype.running`</a>
* <a href="#Benchmark-prototype-setup">`Benchmark.prototype.setup`</a>
* <a href="#Benchmark-prototype-stats">`Benchmark.prototype.stats`</a>
* <a href="#Benchmark-prototype-teardown">`Benchmark.prototype.teardown`</a>
* <a href="#Benchmark-prototype-times">`Benchmark.prototype.times`</a>
* <a href="#Benchmark-prototype-toString">`Benchmark.prototype.toString`</a>

<!-- /div -->

<!-- div -->

## `Benchmark.support`
* <a href="#Benchmark-support-browser">`Benchmark.support.browser`</a>
* <a href="#Benchmark-support-decompilation">`Benchmark.support.decompilation`</a>
* <a href="#Benchmark-support-timeout">`Benchmark.support.timeout`</a>

<!-- /div -->

<!-- div -->

## `Benchmark#stats`
* <a href="#Benchmark#stats-deviation">`Benchmark#stats.deviation`</a>
* <a href="#Benchmark#stats-mean">`Benchmark#stats.mean`</a>
* <a href="#Benchmark#stats-moe">`Benchmark#stats.moe`</a>
* <a href="#Benchmark#stats-rme">`Benchmark#stats.rme`</a>
* <a href="#Benchmark#stats-sample">`Benchmark#stats.sample`</a>
* <a href="#Benchmark#stats-sem">`Benchmark#stats.sem`</a>
* <a href="#Benchmark#stats-variance">`Benchmark#stats.variance`</a>

<!-- /div -->

<!-- div -->

## `Benchmark#times`
* <a href="#Benchmark#times-cycle">`Benchmark#times.cycle`</a>
* <a href="#Benchmark#times-elapsed">`Benchmark#times.elapsed`</a>
* <a href="#Benchmark#times-period">`Benchmark#times.period`</a>
* <a href="#Benchmark#times-timeStamp">`Benchmark#times.timeStamp`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `Benchmark`

<!-- div -->

### <a id="Benchmark"></a>`Benchmark(name, fn, [options={}])`
[#](#Benchmark) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L365 "View in source") [&#x24C9;][1]

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
  'id': 'xyz',

  // called when the benchmark starts running
  'onStart': onStart,

  // called after each run cycle
  'onCycle': onCycle,

  // called when aborted
  'onAbort': onAbort,

  // called when a test errors
  'onError': onError,

  // called when reset
  'onReset': onReset,

  // called when the benchmark completes running
  'onComplete': onComplete,

  // compiled/called before the test loop
  'setup': setup,

  // compiled/called after the test loop
  'teardown': teardown
});

// or name and options
var bench = new Benchmark('foo', {

  // a flag to indicate the benchmark is deferred
  'defer': true,

  // benchmark test function
  'fn': function(deferred) {
    // call `Deferred#resolve` when the deferred test is finished
    deferred.resolve();
  }
});

// or options only
var bench = new Benchmark({

  // benchmark name
  'name': 'foo',

  // benchmark test as a string
  'fn': '[1,2,3,4].sort()'
});

// a test's `this` binding is set to the benchmark instance
var bench = new Benchmark('foo', function() {
  'My name is '.concat(this.name); // "My name is foo"
});
```
---

<!-- /div -->

<!-- div -->

### <a id="Benchmark-filter"></a>`Benchmark.filter(array, callback)`
[#](#Benchmark-filter) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L772 "View in source") [&#x24C9;][1]

A generic `Array#filter` like method.

#### Arguments
1. `array` *(Array)*: The array to iterate over.
2. `callback` *(Function|string)*: The function/alias called per iteration.

#### Returns
*(Array)*: A new array of values that passed callback filter.

#### Example
```js
// get odd numbers
Benchmark.filter([1, 2, 3, 4, 5], function(n) {
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

### <a id="Benchmark-formatNumber"></a>`Benchmark.formatNumber(number)`
[#](#Benchmark-formatNumber) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L801 "View in source") [&#x24C9;][1]

Converts a number to a more readable comma-separated string representation.

#### Arguments
1. `number` *(number)*: The number to convert.

#### Returns
*(string)*: The more readable string representation.

---

<!-- /div -->

<!-- div -->

### <a id="Benchmark-invoke"></a>`Benchmark.invoke(benches, name, [args])`
[#](#Benchmark-invoke) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L846 "View in source") [&#x24C9;][1]

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
  'name': 'run',

  // pass a single argument
  'args': true,

  // treat as queue, removing benchmarks from front of `benches` until empty
  'queued': true,

  // called before any benchmarks have been invoked.
  'onStart': onStart,

  // called between invoking benchmarks
  'onCycle': onCycle,

  // called after all benchmarks have been invoked.
  'onComplete': onComplete
});
```
---

<!-- /div -->

<!-- div -->

### <a id="Benchmark-join"></a>`Benchmark.join(object, [separator1=','], [separator2=': '])`
[#](#Benchmark-join) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L996 "View in source") [&#x24C9;][1]

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

### <a id="Benchmark-options"></a>`Benchmark.options`
[#](#Benchmark-options) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2159 "View in source") [&#x24C9;][1]

The default options copied by benchmark instances.

---

<!-- /div -->

<!-- div -->

### <a id="Benchmark-platform"></a>`Benchmark.platform`
[#](#Benchmark-platform) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2293 "View in source") [&#x24C9;][1]

Platform object with properties describing things like browser name,
version, and operating system. See [`platform.js`](https://mths.be/platform).

---

<!-- /div -->

<!-- div -->

### <a id="Benchmark-runInContext"></a>`Benchmark.runInContext([context=root])`
[#](#Benchmark-runInContext) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L125 "View in source") [&#x24C9;][1]

Create a new `Benchmark` function using the given `context` object.

#### Arguments
1. `[context=root]` *(Object)*: The context object.

#### Returns
*(Function)*: Returns a new `Benchmark` function.

---

<!-- /div -->

<!-- div -->

### <a id="Benchmark-support"></a>`Benchmark.support`
[#](#Benchmark-support) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L204 "View in source") [&#x24C9;][1]

An object used to flag environments/features.

---

<!-- /div -->

<!-- div -->

### <a id="Benchmark-version"></a>`Benchmark.version`
[#](#Benchmark-version) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2314 "View in source") [&#x24C9;][1]

The semantic version number.

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `Benchmark.Deferred`

<!-- div -->

### <a id="Benchmark-Deferred"></a>`Benchmark.Deferred(clone)`
[#](#Benchmark-Deferred) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L408 "View in source") [&#x24C9;][1]

The Deferred constructor.

#### Arguments
1. `clone` *(Object)*: The cloned benchmark instance.

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `Benchmark.Deferred.prototype`

<!-- div -->

### <a id="Benchmark-Deferred-prototype-benchmark"></a>`Benchmark.Deferred.prototype.benchmark`
[#](#Benchmark-Deferred-prototype-benchmark) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2600 "View in source") [&#x24C9;][1]

The deferred benchmark instance.

---

<!-- /div -->

<!-- div -->

### <a id="Benchmark-Deferred-prototype-cycles"></a>`Benchmark.Deferred.prototype.cycles`
[#](#Benchmark-Deferred-prototype-cycles) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2608 "View in source") [&#x24C9;][1]

The number of deferred cycles performed while benchmarking.

---

<!-- /div -->

<!-- div -->

### <a id="Benchmark-Deferred-prototype-elapsed"></a>`Benchmark.Deferred.prototype.elapsed`
[#](#Benchmark-Deferred-prototype-elapsed) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2616 "View in source") [&#x24C9;][1]

The time taken to complete the deferred benchmark *(secs)*.

---

<!-- /div -->

<!-- div -->

### <a id="Benchmark-Deferred-prototype-resolve"></a>`Benchmark.Deferred.prototype.resolve()`
[#](#Benchmark-Deferred-prototype-resolve) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L725 "View in source") [&#x24C9;][1]

Handles cycling/completing the deferred benchmark.

---

<!-- /div -->

<!-- div -->

### <a id="Benchmark-Deferred-prototype-timeStamp"></a>`Benchmark.Deferred.prototype.timeStamp`
[#](#Benchmark-Deferred-prototype-timeStamp) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2624 "View in source") [&#x24C9;][1]

A timestamp of when the deferred benchmark started *(ms)*.

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `Benchmark.Event`

<!-- div -->

### <a id="Benchmark-Event"></a>`Benchmark.Event(type)`
[#](#Benchmark-Event) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L424 "View in source") [&#x24C9;][1]

The Event constructor.

#### Arguments
1. `type` *(Object|string)*: The event type.

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `Benchmark.Event.prototype`

<!-- div -->

### <a id="Benchmark-Event-prototype-aborted"></a>`Benchmark.Event.prototype.aborted`
[#](#Benchmark-Event-prototype-aborted) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2641 "View in source") [&#x24C9;][1]

A flag to indicate if the emitters listener iteration is aborted.

---

<!-- /div -->

<!-- div -->

### <a id="Benchmark-Event-prototype-cancelled"></a>`Benchmark.Event.prototype.cancelled`
[#](#Benchmark-Event-prototype-cancelled) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2649 "View in source") [&#x24C9;][1]

A flag to indicate if the default action is cancelled.

---

<!-- /div -->

<!-- div -->

### <a id="Benchmark-Event-prototype-currentTarget"></a>`Benchmark.Event.prototype.currentTarget`
[#](#Benchmark-Event-prototype-currentTarget) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2657 "View in source") [&#x24C9;][1]

The object whose listeners are currently being processed.

---

<!-- /div -->

<!-- div -->

### <a id="Benchmark-Event-prototype-result"></a>`Benchmark.Event.prototype.result`
[#](#Benchmark-Event-prototype-result) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2665 "View in source") [&#x24C9;][1]

The return value of the last executed listener.

---

<!-- /div -->

<!-- div -->

### <a id="Benchmark-Event-prototype-target"></a>`Benchmark.Event.prototype.target`
[#](#Benchmark-Event-prototype-target) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2673 "View in source") [&#x24C9;][1]

The object to which the event was originally emitted.

---

<!-- /div -->

<!-- div -->

### <a id="Benchmark-Event-prototype-timeStamp"></a>`Benchmark.Event.prototype.timeStamp`
[#](#Benchmark-Event-prototype-timeStamp) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2681 "View in source") [&#x24C9;][1]

A timestamp of when the event was created *(ms)*.

---

<!-- /div -->

<!-- div -->

### <a id="Benchmark-Event-prototype-type"></a>`Benchmark.Event.prototype.type`
[#](#Benchmark-Event-prototype-type) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2689 "View in source") [&#x24C9;][1]

The event type.

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `Benchmark.Suite`

<!-- div -->

### <a id="Benchmark-Suite"></a>`Benchmark.Suite(name, [options={}])`
[#](#Benchmark-Suite) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L476 "View in source") [&#x24C9;][1]

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
  'onStart': onStart,

  // called between running benchmarks
  'onCycle': onCycle,

  // called when aborted
  'onAbort': onAbort,

  // called when a test errors
  'onError': onError,

  // called when reset
  'onReset': onReset,

  // called when the suite completes running
  'onComplete': onComplete
});
```
---

<!-- /div -->

<!-- div -->

### <a id="Benchmark-Suite-options"></a>`Benchmark.Suite.options`
[#](#Benchmark-Suite-options) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2701 "View in source") [&#x24C9;][1]

The default options copied by suite instances.

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `Benchmark.Suite.options`

<!-- div -->

### <a id="Benchmark-Suite-options-name"></a>`Benchmark.Suite.options.name`
[#](#Benchmark-Suite-options-name) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2709 "View in source") [&#x24C9;][1]

The name of the suite.

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `Benchmark.Suite.prototype`

<!-- div -->

### <a id="Benchmark-Suite-prototype-abort"></a>`Benchmark.Suite.prototype.abort()`
[#](#Benchmark-Suite-prototype-abort) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L1017 "View in source") [&#x24C9;][1]

Aborts all benchmarks in the suite.

#### Returns
*(Object)*: The suite instance.

---

<!-- /div -->

<!-- div -->

### <a id="Benchmark-Suite-prototype-aborted"></a>`Benchmark.Suite.prototype.aborted`
[#](#Benchmark-Suite-prototype-aborted) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2730 "View in source") [&#x24C9;][1]

A flag to indicate if the suite is aborted.

---

<!-- /div -->

<!-- div -->

### <a id="Benchmark-Suite-prototype-add"></a>`Benchmark.Suite.prototype.add(name, fn, [options={}])`
[#](#Benchmark-Suite-prototype-add) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L1077 "View in source") [&#x24C9;][1]

Adds a test to the benchmark suite.

#### Arguments
1. `name` *(string)*: A name to identify the benchmark.
2. `fn` *(Function|string)*: The test to benchmark.
3. `[options={}]` *(Object)*: Options object.

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
  'onCycle': onCycle,
  'onComplete': onComplete
});

// or name and options
suite.add('foo', {
  'fn': fn,
  'onCycle': onCycle,
  'onComplete': onComplete
});

// or options only
suite.add({
  'name': 'foo',
  'fn': fn,
  'onCycle': onCycle,
  'onComplete': onComplete
});
```
---

<!-- /div -->

<!-- div -->

### <a id="Benchmark-Suite-prototype-clone"></a>`Benchmark.Suite.prototype.clone(options)`
[#](#Benchmark-Suite-prototype-clone) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L1096 "View in source") [&#x24C9;][1]

Creates a new suite with cloned benchmarks.

#### Arguments
1. `options` *(Object)*: Options object to overwrite cloned options.

#### Returns
*(Object)*: The new suite instance.

---

<!-- /div -->

<!-- div -->

### <a id="Benchmark-Suite-prototype-filter"></a>`Benchmark.Suite.prototype.filter(callback)`
[#](#Benchmark-Suite-prototype-filter) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L1119 "View in source") [&#x24C9;][1]

An `Array#filter` like method.

#### Arguments
1. `callback` *(Function|string)*: The function/alias called per iteration.

#### Returns
*(Object)*: A new suite of benchmarks that passed callback filter.

---

<!-- /div -->

<!-- div -->

### <a id="Benchmark-Suite-prototype-length"></a>`Benchmark.Suite.prototype.length`
[#](#Benchmark-Suite-prototype-length) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2722 "View in source") [&#x24C9;][1]

The number of benchmarks in the suite.

---

<!-- /div -->

<!-- div -->

### <a id="Benchmark-Suite-prototype-reset"></a>`Benchmark.Suite.prototype.reset()`
[#](#Benchmark-Suite-prototype-reset) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L1134 "View in source") [&#x24C9;][1]

Resets all benchmarks in the suite.

#### Returns
*(Object)*: The suite instance.

---

<!-- /div -->

<!-- div -->

### <a id="Benchmark-Suite-prototype-run"></a>`Benchmark.Suite.prototype.run([options={}])`
[#](#Benchmark-Suite-prototype-run) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L1171 "View in source") [&#x24C9;][1]

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
suite.run({ 'async': true, 'queued': true });
```
---

<!-- /div -->

<!-- div -->

### <a id="Benchmark-Suite-prototype-running"></a>`Benchmark.Suite.prototype.running`
[#](#Benchmark-Suite-prototype-running) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2738 "View in source") [&#x24C9;][1]

A flag to indicate if the suite is running.

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `Benchmark.options`

<!-- div -->

### <a id="Benchmark-options-async"></a>`Benchmark.options.async`
[#](#Benchmark-options-async) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2168 "View in source") [&#x24C9;][1]

A flag to indicate that benchmark cycles will execute asynchronously
by default.

---

<!-- /div -->

<!-- div -->

### <a id="Benchmark-options-defer"></a>`Benchmark.options.defer`
[#](#Benchmark-options-defer) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2176 "View in source") [&#x24C9;][1]

A flag to indicate that the benchmark clock is deferred.

---

<!-- /div -->

<!-- div -->

### <a id="Benchmark-options-delay"></a>`Benchmark.options.delay`
[#](#Benchmark-options-delay) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2183 "View in source") [&#x24C9;][1]

The delay between test cycles *(secs)*.

---

<!-- /div -->

<!-- div -->

### <a id="Benchmark-options-id"></a>`Benchmark.options.id`
[#](#Benchmark-options-id) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2192 "View in source") [&#x24C9;][1]

Displayed by `Benchmark#toString` when a `name` is not available
*(auto-generated if absent)*.

---

<!-- /div -->

<!-- div -->

### <a id="Benchmark-options-initCount"></a>`Benchmark.options.initCount`
[#](#Benchmark-options-initCount) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2200 "View in source") [&#x24C9;][1]

The default number of times to execute a test on a benchmark's first cycle.

---

<!-- /div -->

<!-- div -->

### <a id="Benchmark-options-maxTime"></a>`Benchmark.options.maxTime`
[#](#Benchmark-options-maxTime) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2210 "View in source") [&#x24C9;][1]

The maximum time a benchmark is allowed to run before finishing *(secs)*.
<br>
<br>
Note: Cycle delays aren't counted toward the maximum time.

---

<!-- /div -->

<!-- div -->

### <a id="Benchmark-options-minSamples"></a>`Benchmark.options.minSamples`
[#](#Benchmark-options-minSamples) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2218 "View in source") [&#x24C9;][1]

The minimum sample size required to perform statistical analysis.

---

<!-- /div -->

<!-- div -->

### <a id="Benchmark-options-minTime"></a>`Benchmark.options.minTime`
[#](#Benchmark-options-minTime) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2226 "View in source") [&#x24C9;][1]

The time needed to reduce the percent uncertainty of measurement to `1`% *(secs)*.

---

<!-- /div -->

<!-- div -->

### <a id="Benchmark-options-name"></a>`Benchmark.options.name`
[#](#Benchmark-options-name) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2234 "View in source") [&#x24C9;][1]

The name of the benchmark.

---

<!-- /div -->

<!-- div -->

### <a id="Benchmark-options-onAbort"></a>`Benchmark.options.onAbort`
[#](#Benchmark-options-onAbort) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2242 "View in source") [&#x24C9;][1]

An event listener called when the benchmark is aborted.

---

<!-- /div -->

<!-- div -->

### <a id="Benchmark-options-onComplete"></a>`Benchmark.options.onComplete`
[#](#Benchmark-options-onComplete) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2250 "View in source") [&#x24C9;][1]

An event listener called when the benchmark completes running.

---

<!-- /div -->

<!-- div -->

### <a id="Benchmark-options-onCycle"></a>`Benchmark.options.onCycle`
[#](#Benchmark-options-onCycle) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2258 "View in source") [&#x24C9;][1]

An event listener called after each run cycle.

---

<!-- /div -->

<!-- div -->

### <a id="Benchmark-options-onError"></a>`Benchmark.options.onError`
[#](#Benchmark-options-onError) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2266 "View in source") [&#x24C9;][1]

An event listener called when a test errors.

---

<!-- /div -->

<!-- div -->

### <a id="Benchmark-options-onReset"></a>`Benchmark.options.onReset`
[#](#Benchmark-options-onReset) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2274 "View in source") [&#x24C9;][1]

An event listener called when the benchmark is reset.

---

<!-- /div -->

<!-- div -->

### <a id="Benchmark-options-onStart"></a>`Benchmark.options.onStart`
[#](#Benchmark-options-onStart) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2282 "View in source") [&#x24C9;][1]

An event listener called when the benchmark starts running.

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `Benchmark.prototype`

<!-- div -->

### <a id="Benchmark-prototype-abort"></a>`Benchmark.prototype.abort()`
[#](#Benchmark-prototype-abort) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L1337 "View in source") [&#x24C9;][1]

Aborts the benchmark without recording times.

#### Returns
*(Object)*: The benchmark instance.

---

<!-- /div -->

<!-- div -->

### <a id="Benchmark-prototype-aborted"></a>`Benchmark.prototype.aborted`
[#](#Benchmark-prototype-aborted) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2389 "View in source") [&#x24C9;][1]

A flag to indicate if the benchmark is aborted.

---

<!-- /div -->

<!-- div -->

### <a id="Benchmark-prototype-clone"></a>`Benchmark.prototype.clone(options)`
[#](#Benchmark-prototype-clone) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L1376 "View in source") [&#x24C9;][1]

Creates a new benchmark using the same test and options.

#### Arguments
1. `options` *(Object)*: Options object to overwrite cloned options.

#### Returns
*(Object)*: The new benchmark instance.

#### Example
```js
var bizarro = bench.clone({
  'name': 'doppelganger'
});
```
---

<!-- /div -->

<!-- div -->

### <a id="Benchmark-prototype-compare"></a>`Benchmark.prototype.compare(other)`
[#](#Benchmark-prototype-compare) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L1400 "View in source") [&#x24C9;][1]

Determines if a benchmark is faster than another.

#### Arguments
1. `other` *(Object)*: The benchmark to compare.

#### Returns
*(number)*: Returns `-1` if slower, `1` if faster, and `0` if indeterminate.

---

<!-- /div -->

<!-- div -->

### <a id="Benchmark-prototype-compiled"></a>`Benchmark.prototype.compiled`
[#](#Benchmark-prototype-compiled) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2365 "View in source") [&#x24C9;][1]

The compiled test function.

---

<!-- /div -->

<!-- div -->

### <a id="Benchmark-prototype-count"></a>`Benchmark.prototype.count`
[#](#Benchmark-prototype-count) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2341 "View in source") [&#x24C9;][1]

The number of times a test was executed.

---

<!-- /div -->

<!-- div -->

### <a id="Benchmark-prototype-cycles"></a>`Benchmark.prototype.cycles`
[#](#Benchmark-prototype-cycles) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2349 "View in source") [&#x24C9;][1]

The number of cycles performed while benchmarking.

---

<!-- /div -->

<!-- div -->

### <a id="Benchmark-prototype-emit"></a>`Benchmark.prototype.emit(type, [args])`
[#](#Benchmark-prototype-emit) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L1211 "View in source") [&#x24C9;][1]

Executes all registered listeners of the specified event type.

#### Arguments
1. `type` *(Object|string)*: The event type or object.
2. `[args]` *(...&#42;)*: Arguments to invoke the listener with.

#### Returns
*(&#42;)*: Returns the return value of the last listener executed.

---

<!-- /div -->

<!-- div -->

### <a id="Benchmark-prototype-error"></a>`Benchmark.prototype.error`
[#](#Benchmark-prototype-error) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2373 "View in source") [&#x24C9;][1]

The error object if the test failed.

---

<!-- /div -->

<!-- div -->

### <a id="Benchmark-prototype-fn"></a>`Benchmark.prototype.fn`
[#](#Benchmark-prototype-fn) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2381 "View in source") [&#x24C9;][1]

The test to benchmark.

---

<!-- /div -->

<!-- div -->

### <a id="Benchmark-prototype-hz"></a>`Benchmark.prototype.hz`
[#](#Benchmark-prototype-hz) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2357 "View in source") [&#x24C9;][1]

The number of executions per second.

---

<!-- /div -->

<!-- div -->

### <a id="Benchmark-prototype-listeners"></a>`Benchmark.prototype.listeners(type)`
[#](#Benchmark-prototype-listeners) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L1241 "View in source") [&#x24C9;][1]

Returns an array of event listeners for a given type that can be manipulated
to add or remove listeners.

#### Arguments
1. `type` *(string)*: The event type.

#### Returns
*(Array)*: The listeners array.

---

<!-- /div -->

<!-- div -->

### <a id="Benchmark-prototype-off"></a>`Benchmark.prototype.off([type], [listener])`
[#](#Benchmark-prototype-off) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L1274 "View in source") [&#x24C9;][1]

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

### <a id="Benchmark-prototype-on"></a>`Benchmark.prototype.on(type, listener)`
[#](#Benchmark-prototype-on) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L1316 "View in source") [&#x24C9;][1]

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

### <a id="Benchmark-prototype-reset"></a>`Benchmark.prototype.reset()`
[#](#Benchmark-prototype-reset) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L1453 "View in source") [&#x24C9;][1]

Reset properties and abort if running.

#### Returns
*(Object)*: The benchmark instance.

---

<!-- /div -->

<!-- div -->

### <a id="Benchmark-prototype-run"></a>`Benchmark.prototype.run([options={}])`
[#](#Benchmark-prototype-run) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2110 "View in source") [&#x24C9;][1]

Runs the benchmark.

#### Arguments
1. `[options={}]` *(Object)*: Options object.

#### Returns
*(Object)*: The benchmark instance.

#### Example
```js
// basic usage
bench.run();

// or with options
bench.run({ 'async': true });
```
---

<!-- /div -->

<!-- div -->

### <a id="Benchmark-prototype-running"></a>`Benchmark.prototype.running`
[#](#Benchmark-prototype-running) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2397 "View in source") [&#x24C9;][1]

A flag to indicate if the benchmark is running.

---

<!-- /div -->

<!-- div -->

### <a id="Benchmark-prototype-setup"></a>`Benchmark.prototype.setup`
[#](#Benchmark-prototype-setup) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2460 "View in source") [&#x24C9;][1]

Compiled into the test and executed immediately **before** the test loop.

#### Example
```js
// basic usage
var bench = Benchmark({
  'setup': function() {
    var c = this.count,
        element = document.getElementById('container');
    while (c--) {
      element.appendChild(document.createElement('div'));
    }
  },
  'fn': function() {
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
  'setup': '\
    var a = 0;\n\
    (function() {\n\
      (function() {\n\
        (function() {',
  'fn': 'a += 1;',
  'teardown': '\
         }())\n\
       }())\n\
     }())'
});

// compiles to something like:
var a = 0;
(function() {
  (function() {
    (function() {
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

### <a id="Benchmark-prototype-stats"></a>`Benchmark.prototype.stats`
[#](#Benchmark-prototype-stats) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2476 "View in source") [&#x24C9;][1]

An object of stats including mean, margin or error, and standard deviation.

---

<!-- /div -->

<!-- div -->

### <a id="Benchmark-prototype-teardown"></a>`Benchmark.prototype.teardown`
[#](#Benchmark-prototype-teardown) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2468 "View in source") [&#x24C9;][1]

Compiled into the test and executed immediately **after** the test loop.

---

<!-- /div -->

<!-- div -->

### <a id="Benchmark-prototype-times"></a>`Benchmark.prototype.times`
[#](#Benchmark-prototype-times) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2541 "View in source") [&#x24C9;][1]

An object of timing data including cycle, elapsed, period, start, and stop.

---

<!-- /div -->

<!-- div -->

### <a id="Benchmark-prototype-toString"></a>`Benchmark.prototype.toString()`
[#](#Benchmark-prototype-toString) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L1531 "View in source") [&#x24C9;][1]

Displays relevant benchmark information when coerced to a string.

#### Returns
*(string)*: A string representation of the benchmark instance.

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `Benchmark.support`

<!-- div -->

### <a id="Benchmark-support-browser"></a>`Benchmark.support.browser`
[#](#Benchmark-support-browser) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L214 "View in source") [&#x24C9;][1]

Detect if running in a browser environment.

---

<!-- /div -->

<!-- div -->

### <a id="Benchmark-support-decompilation"></a>`Benchmark.support.decompilation`
[#](#Benchmark-support-decompilation) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L231 "View in source") [&#x24C9;][1]

Detect if function decompilation is support.

---

<!-- /div -->

<!-- div -->

### <a id="Benchmark-support-timeout"></a>`Benchmark.support.timeout`
[#](#Benchmark-support-timeout) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L222 "View in source") [&#x24C9;][1]

Detect if the Timers API exists.

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `Benchmark#stats`

<!-- div -->

### <a id="Benchmark#stats-deviation"></a>`Benchmark#stats.deviation`
[#](#Benchmark#stats-deviation) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2508 "View in source") [&#x24C9;][1]

The sample standard deviation.

---

<!-- /div -->

<!-- div -->

### <a id="Benchmark#stats-mean"></a>`Benchmark#stats.mean`
[#](#Benchmark#stats-mean) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2516 "View in source") [&#x24C9;][1]

The sample arithmetic mean *(secs)*.

---

<!-- /div -->

<!-- div -->

### <a id="Benchmark#stats-moe"></a>`Benchmark#stats.moe`
[#](#Benchmark#stats-moe) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2484 "View in source") [&#x24C9;][1]

The margin of error.

---

<!-- /div -->

<!-- div -->

### <a id="Benchmark#stats-rme"></a>`Benchmark#stats.rme`
[#](#Benchmark#stats-rme) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2492 "View in source") [&#x24C9;][1]

The relative margin of error *(expressed as a percentage of the mean)*.

---

<!-- /div -->

<!-- div -->

### <a id="Benchmark#stats-sample"></a>`Benchmark#stats.sample`
[#](#Benchmark#stats-sample) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2524 "View in source") [&#x24C9;][1]

The array of sampled periods.

---

<!-- /div -->

<!-- div -->

### <a id="Benchmark#stats-sem"></a>`Benchmark#stats.sem`
[#](#Benchmark#stats-sem) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2500 "View in source") [&#x24C9;][1]

The standard error of the mean.

---

<!-- /div -->

<!-- div -->

### <a id="Benchmark#stats-variance"></a>`Benchmark#stats.variance`
[#](#Benchmark#stats-variance) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2532 "View in source") [&#x24C9;][1]

The sample variance.

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `Benchmark#times`

<!-- div -->

### <a id="Benchmark#times-cycle"></a>`Benchmark#times.cycle`
[#](#Benchmark#times-cycle) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2549 "View in source") [&#x24C9;][1]

The time taken to complete the last cycle *(secs)*.

---

<!-- /div -->

<!-- div -->

### <a id="Benchmark#times-elapsed"></a>`Benchmark#times.elapsed`
[#](#Benchmark#times-elapsed) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2557 "View in source") [&#x24C9;][1]

The time taken to complete the benchmark *(secs)*.

---

<!-- /div -->

<!-- div -->

### <a id="Benchmark#times-period"></a>`Benchmark#times.period`
[#](#Benchmark#times-period) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2565 "View in source") [&#x24C9;][1]

The time taken to execute the test once *(secs)*.

---

<!-- /div -->

<!-- div -->

### <a id="Benchmark#times-timeStamp"></a>`Benchmark#times.timeStamp`
[#](#Benchmark#times-timeStamp) [&#x24C8;](https://github.com/GerHobbelt/benchmark.js/blob/master/benchmark.js#L2573 "View in source") [&#x24C9;][1]

A timestamp of when the benchmark started *(ms)*.

---

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #benchmark "Jump back to the TOC."
