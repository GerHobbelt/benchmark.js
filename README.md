# Benchmark.js v2.1.4-35

[![Build Status](https://travis-ci.org/GerHobbelt/benchmark.js.svg?branch=master)](https://travis-ci.org/GerHobbelt/benchmark.js)

A [robust](https://mathiasbynens.be/notes/javascript-benchmarking "Bulletproof JavaScript benchmarks") benchmarking library that supports high-resolution timers & returns statistically significant results. As seen on [jsPerf](https://jsperf.com/).


## Documentation

* [API Documentation](./doc)


## Download

 * [Development source](https://raw.githubusercontent.com/gerhobbelt/benchmark.js/2.1.4-35/benchmark.js)


## [JSPERF.COM / BenchmarkJS functionality example](./example/jsperf/)

(Also available at https://gerhobbelt.github.io/benchmark.js/example/jsperf/)


A pretty minimal `jsperf.com`-alike benchmark websize using Benchmark is available at [example/jsperf].

>
> Note that the web pages shown there do *not store* your performance data for comparison! The benchmark
> is run and the results are shown, but the results are not persisted for comparison with other browsers.
>

## Installation

Benchmark.js’ only hard dependency is [lodash](https://lodash.com/).
Include [platform.js](https://mths.be/platform) to populate [Benchmark.platform](./docs#platform).

In a browser:

```html
<script src="lodash.js"></script>
<script src="platform.js"></script>
<script src="benchmark.js"></script>
```

In an AMD loader:

```js
require({
  'paths': {
    'benchmark': 'path/to/benchmark',
    'lodash': 'path/to/lodash',
    'platform': 'path/to/platform'
  }
},
['benchmark'], function(Benchmark) {/*…*/});
```

Using npm:

```shell
$ npm i --save benchmark
```

In Node.js:

```js
var Benchmark = require('benchmark');
```

Optionally, use the [microtime module](https://github.com/wadey/node-microtime) by Wade Simmons:

```shell
npm i --save microtime
```

Usage example:

```js
var suite = new Benchmark.Suite;

// add tests
suite.add('RegExp#test', function() {
  /o/.test('Hello World!');
})
.add('String#indexOf', function() {
  'Hello World!'.indexOf('o') > -1;
})
// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': true });

// logs:
// => RegExp#test x 4,161,532 +-0.99% (59 cycles)
// => String#indexOf x 6,139,623 +-1.00% (131 cycles)
// => Fastest is String#indexOf
```


## Developing

The following `npm` tasks are available to assist during development and release:

- `npm run server` will start `live-server` and open the base directory in your browser; then you can, for example, browse to /example/jsperf/ to run the available tests in your browser using the local benchmark.js file.

- `npm run test` -- nuff said.

- `npm run doc` -- will regenerate the documentation from source.

Also note that rough support for a test *catalog* is available for the `/example/jsperf/` demo: run `./build-jsperf.sh` to update the catalog file and then the next reload of the `/example/jsperf/index.html` page will show a clickable list of all available tests near the bottom so you can browse and jump from one test file/suite to another.


## Support

Tested in Chrome 54-55, Firefox 49-50, IE 11, Edge 14, Safari 9-10, Node.js 6-7, & PhantomJS 2.1.1.


## @BestieJS

Benchmark.js is part of the @BestieJS *“Best in Class”* module collection. This means we promote solid browser/environment support, ES5+ precedents, unit testing, & plenty of documentation.
