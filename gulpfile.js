'use strict';

// dependencies
var gulp = require('gulp');
var sass = require('gulp-sass');

/////////////
// - SCSS/CSS
/////////////

var SCSS_SRC = './src/Assets/scss/**/*.scss';
var SCSS_DEST = './src/Assets/css';

// Compiles SCSS
gulp.task('sass', function () {
  return gulp.src(SCSS_SRC)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(SCSS_DEST));
});

// detects changes in SCSS
gulp.task('watch_scss', function () {
  gulp.watch(SCSS_SRC, gulp.series('sass'));
});

// Runs tasks
gulp.task('default', gulp.series('watch_scss'));
