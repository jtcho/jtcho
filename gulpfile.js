var gulp = require('gulp');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var sass = require('gulp-ruby-sass');

gulp.task('sass', function() {
  return sass('./src/assets/styles/**/*.scss')
    .pipe(gulp.dest('./dist/assets/styles'));
});

gulp.task('js', function() {
  return gulp.src("./src/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(concat("bundle.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("./dist"));
});

gulp.task('html', function() {
  gulp.src('./src/**/*.html')
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['sass', 'js', 'html']);
