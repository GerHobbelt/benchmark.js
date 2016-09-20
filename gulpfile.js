var gulp = require('gulp');
var less = require('gulp-less');
var LessAutoprefix = require('less-plugin-autoprefix');
var path = require('path');

var autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });
 
gulp.task('less', function () {
  return gulp.src('./example/jsperf/*.less')
    .pipe(less({
	    plugins: [autoprefix]
    }))
    .pipe(gulp.dest('./example/jsperf/'));
});
 
gulp.task('default', ['less']);
