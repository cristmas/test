var gulp = require('gulp'),
    connect = require('gulp-connect'),
    opn = require('opn');

// Start server with LiveReload
gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true,
    port: 8888
  });
  opn('http://localhost:8888');
});

// Work with HTML

gulp.task('html', function() {
  gulp.src('./app/*.html')
  .pipe(connect.reload());
});

// Work with js

gulp.task('js', function() {
  gulp.src('./app/js/*.js')
  .pipe(connect.reload());
});

// Work with css

gulp.task('css', function() {
  gulp.src('./app/css/*.css')
  .pipe(connect.reload());
});

// Watching

gulp.task('watch', function() {
  gulp.watch(['./app/*.html'], ['html']);
  gulp.watch(['./app/js/*.js'], ['js']);
  gulp.watch(['./app/css/*.css'], ['css']);
});

// Default tast
gulp.task('default', ['connect', 'watch']);