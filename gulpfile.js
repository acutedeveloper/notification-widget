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

// JAVASCRIPT Tasks

const concat = require('gulp-concat');
const babel = require('gulp-babel');

const jsFiles = [
  './src/js/vendors/react.development.js',
  './src/js/vendors/react-dom.development.js',
  './src/js/components/notifications.js'
]

gulp.task('scripts', function () {
  return gulp.src(jsFiles)
    .pipe(concat('app.js'))
    .pipe(babel({
            plugins: ['transform-react-jsx']
        }))
    .pipe(gulp.dest('./build/js/'));
});

// COPY TASKS

gulp.task('html', function () {
  return gulp.src('./src/**/*.html')
  .pipe(gulp.dest('./build/'));
});

gulp.task('fonts', function () {
  return gulp.src('./src/fonts/**/*')
  .pipe(gulp.dest('./build/fonts/'));
});

gulp.task('images', function () {
  return gulp.src('./src/img/**/*')
  .pipe(gulp.dest('./build/img/'));
});

gulp.task('copy', ['html', 'fonts', 'images']);

// Watch Tasks

gulp.task('watch', ['sass', 'copy', 'scripts'], function () {

  browserSync.init({
        server: "./build/"
    });

  gulp.watch('./src/scss/**/*.scss', ['sass']);
  gulp.watch('./src/js/**/*.js', ['scripts']);
  gulp.watch('./src/**.html', ['copy']);
});

gulp.task('default', ['sass', 'copy', 'scripts']);
