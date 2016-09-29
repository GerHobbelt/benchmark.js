var gulp = require('gulp');
var less = require('gulp-less');
var LessAutoprefix = require('less-plugin-autoprefix');
var stripCssComments = require('gulp-strip-css-comments');
var fncallback = require('gulp-fncallback');
var path = require('path');

var autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });
 
gulp.task('less', function () {
  return gulp.src('./example/jsperf/*.less')
    .pipe(less({
      plugins: [autoprefix]
    }))
    .pipe(gulp.dest('./example/jsperf/'));
});

gulp.task('site-css', function () {
  return gulp.src('./website-assets/stylesheets/website.less')
    .pipe(less({
      plugins: [autoprefix]
    }))
    .pipe(stripCssComments({
      preserve: function mustRemoveComment(body) {
        console.log('test CSS comment: ', body);
        return !!body.match(/license/gi);
      }
    }))
    .pipe(gulp.dest('./website-assets/stylesheets/'));
});

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
 
gulp.task('default', ['patch-version', 'less']);
