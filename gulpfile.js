const gulp = require('gulp');

// CSS
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');


gulp.task('sass', function () {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
    .pipe(gulp.dest('./build/css/'))
    .pipe(browserSync.stream());
});

gulp.task('html', function () {
  return gulp.src('./src/**/*.html')
  .pipe(gulp.dest('./build/'));
});

gulp.task('copy', ['html']);

// Watch Tasks

gulp.task('watch', function () {

  browserSync.init({
        server: "./build/"
    });

  gulp.watch('./src/scss/**/*.scss', ['sass']);
  gulp.watch('./src/**.html', ['copy']);
});

gulp.task('default', ['sass', 'scripts', 'copy']);
