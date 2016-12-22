var gulp = require('gulp');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var sass = require('gulp-ruby-sass');
var livereload = require('gulp-livereload');
var spawn = require('child_process').spawn;
var node;

gulp.task('sass', function() {
  return sass('./src/assets/styles/**/*.scss')
    .pipe(gulp.dest('./dist/assets/styles'))
    .pipe(livereload());
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

gulp.task('fonts', function() {
  gulp.src('./src/assets/fonts/*')
    .pipe(gulp.dest('./dist/assets/fonts'))
    .pipe(livereload());
});

gulp.task('images', function() {
  gulp.src('./src/assets/images/*')
      .pipe(gulp.dest('./dist/assets/images'));
})

gulp.task('build', ['fonts', 'images', 'sass', 'js', 'html'])

gulp.task('watch', function() {
  livereload.listen();  // Actually start the LiveReload listener.
  gulp.watch('./src/assets/styles/**/*.scss', ['sass']);
});

gulp.task('server', function() {
  if (node) {
    node.kill();
  }

  node = spawn('node', ['index.js'], {stdio: 'inherit'});
  node.on('close', function(code) {
    if (code === 8) {
      gulp.log('Error detected, waiting for changes...');
    }
  })

  livereload.reload();
});

gulp.task('develop', ['watch', 'server'], function() {
  gulp.watch(['./src/assets/styles/**/*.scss', './src/**/*.html'], ['build']);
});

gulp.task('default', ['build']);

process.on('exit', function() {
    if (node) node.kill()
})