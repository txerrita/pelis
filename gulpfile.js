var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require ('gulp-sass');

gulp.task('scripts', function(){
    return gulp.src('./app/**/*.js')
        .pipe(concat('todos.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./build/'));
});

gulp.task('scripts:watch', function () {
    gulp.watch('./app/**/*.js', ['scripts']);
});

gulp.task('sass', function(){
    return gulp.src('./scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./build/'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./scss/**/*.scss', ['sass']);
});