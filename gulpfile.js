'use strict';

var gulp        = require('gulp'),
    rename      = require('gulp-rename'),
    uglify      = require('gulp-uglify'),
    concat      = require('gulp-concat'),
    sourcemaps  = require('gulp-sourcemaps'),
    stylus      = require('gulp-stylus'),
    jshint      = require('gulp-jshint'),
    livereload  = require('gulp-livereload'),
    watch       = require('gulp-watch'),
    header      = require('gulp-header'),
    jade        = require('gulp-jade');

var pkg         = require('./package.json'),
    config      = require('./config.json');
    config.debug.version = pkg.version; 
    config.build.version = pkg.version; 

var srcPath         = config.srcPath,
    distPath        = config.distPath;

var banner = ['/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @author <%= pkg.author %>',
  ' * @license <%= pkg.license %>',
  ' */',
  ''].join('\n');

gulp.task('html', function() {
 
  gulp.src(srcPath+'/jade/*.jade')
    .pipe(jade({
      locals: config.debug, 
      pretty: true
    }))
    .pipe(gulp.dest(distPath))
    .pipe(livereload());
});

gulp.task('html-build', function() {
 
  gulp.src(srcPath+'/jade/*.jade')
    .pipe(jade({
      locals: config.build
    }))
    .pipe(gulp.dest(distPath));
});


gulp.task('js-build', function () {
  return gulp.src(srcPath+'/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(uglify())
    .pipe(concat(pkg.name+'.min.js'))
    .pipe(header(banner, { pkg : pkg } ))
    .pipe(gulp.dest(distPath+"/js/"));

});

gulp.task('js', function () {
  return gulp.src(srcPath+'/js/*.js')
    .pipe(sourcemaps.init())
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(concat(pkg.name+'.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(distPath+"/js/"))
    .pipe(livereload());
});

gulp.task('css-build', function() {
  return gulp.src(srcPath+'/stylus/main.styl')
    .pipe(sourcemaps.init())
    .pipe(stylus({ compress: true }))
    .pipe(rename({ basename: pkg.name  , suffix:".min"}))
    .pipe(header(banner, { pkg : pkg } ))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(distPath+'/css/'));
});

gulp.task('css', function() {
  return gulp.src(srcPath+'/stylus/main.styl')
    .pipe(stylus({linenos: true}))
    .pipe(rename({ basename: pkg.name}))
    .pipe(gulp.dest(distPath+'/css/'))
    .pipe(livereload());
});

gulp.task('css-print-build', function() {
  return gulp.src(srcPath+'/stylus/print.styl')
    .pipe(sourcemaps.init())
    .pipe(stylus({ compress: true }))
    .pipe(rename({ basename: pkg.name  , suffix:"_print.min"}))
    .pipe(header(banner, { pkg : pkg } ))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(distPath+'/css/'));
});

gulp.task('css-print', function() {
  return gulp.src(srcPath+'/stylus/print.styl')
    .pipe(stylus({linenos: true}))
    .pipe(rename({ basename: pkg.name, suffix: "_print"}))
    .pipe(gulp.dest(distPath+'/css/'))
    .pipe(livereload());
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch(srcPath+'/jade/*.jade', ['html']);
  gulp.watch(srcPath+'/stylus/*.styl', ['css', 'css-print']);
  gulp.watch(srcPath+'/js/*.js', ['js']);
});


gulp.task('build', ['js-build', 'css-build', 'html-build', 'css-print-build']);
gulp.task('dev', ['js', 'css', 'html']);
gulp.task('default', ['js', 'css', 'html']);