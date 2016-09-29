var gulp = require('gulp');
var less = require('gulp-less');
var LessAutoprefix = require('less-plugin-autoprefix');
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

gulp.task('patch-version', function () {
  var pkg = require("./package.json");
  console.log('BenchmarkJS version: ', pkg.version);
   
  return gulp.src(['./*.md', './benchmark.js'], {base: './'})
    .pipe(fncallback(function (file, enc, cb) {
      if (file.isBuffer()) {
        var content = file.contents.toString('utf8');
        file.contents = new Buffer(content + '\nXXX\n');
      }
      console.log(file);
      cb();
    }))
    .pipe(gulp.dest('./'));
});
 
gulp.task('default', ['patch-version', 'less']);
