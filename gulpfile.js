var gulp = require('gulp');
var sass = require('gulp-sass');
var htmlmin = require('gulp-htmlmin');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var beautify = require('gulp-beautify');
var env = '';

env = process.env.NODE_ENV || 'development';

if (env==='development') {
  outputDir = 'builds/development/';
  sassStyle = 'expanded';
} else {
  outputDir = 'builds/production/';
  sassStyle = 'compressed';
}

var condition = function (file) {
  // TODO: add business logic
  return true;
}

gulp.task('task', function() {
  gulp.src('./src/*.js')
    .pipe(gulpif(condition, uglify(), beautify()))
    .pipe(gulp.dest('./dist/'));
})
//paths

//tasks
//js


//sass to css
gulp.task('sass', function () {
  return gulp.src('./builds/development/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./builds/development/css'));
});

//html -- for production build only
gulp.task('minify', function() {
  return gulp.src('./builds/development/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./builds/production/'));
});

//watches



//default


