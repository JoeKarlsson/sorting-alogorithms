var gulp = require('gulp');
var connect = require('gulp-connect');
var browserify = require('gulp-browserify');

// Basic usage
gulp.task('build', function() {
  // Single entry point to browserify
  gulp.src('./js/app.js')
        .pipe(browserify({
          insertGlobals : true
        }))
        .pipe(gulp.dest('./build/js'))
});

gulp.task('watch', function () {
  gulp.watch('./js/*', ['livereload', 'build']);
  gulp.watch('./css/*', ['livereload']);
});

gulp.task('connect', function() {
  connect.server({
    root : 'public',
    livereload : true
  });
});

gulp.task('livereload', function () {
  gulp.src('./public/**/*')
  .pipe(connect.reload());
});

gulp.task('default', ['build', 'connect', 'watch']);
