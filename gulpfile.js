var 
	gulp = require('gulp'),
  less = require('gulp-less'),
  cssmin = require('gulp-cssmin'),
  plumber = require('gulp-plumber'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
	htmlclean = require('gulp-htmlclean')
	casperJs = require('gulp-casperjs');;

// Test

gulp.task('styles', function () {
	
	gulp.src('assets/styles/styles.less')
		.pipe(plumber())
		.pipe(less())
		.pipe(gulp.dest('dist'))
		.pipe(cssmin())	
		.pipe(rename({
		    suffix: '.min'
		}))
		.pipe(gulp.dest('dist'));
		
	gulp.src('assets/styles/img/*')
		.pipe(plumber())
		.pipe(gulp.dest('dist'));
		
});


gulp.task('scripts', function() {  
    
	gulp.src('assets/scripts/*.js')
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('dist'))
    .pipe(uglify())
	  .pipe(rename({
	      suffix: '.min'
		}))	
    .pipe(gulp.dest('dist'));
		
});

gulp.task('html', function() {  
    
	gulp.src('assets/html/*.html')
    .pipe(htmlclean())
    .pipe(gulp.dest('dist'));
		
});


gulp.task('tests', function () {
  
	gulp.src('tests/*')
    .pipe(casperJs());
		
});


gulp.task('watch', function () {
	
  gulp.watch('assets/styles/*.less', ['styles']);
		
	gulp.watch('assets/scripts/*.js', ['scripts']);
		
	gulp.watch('assets/html/*.html', ['html']);
	
});


gulp.task('build', ['styles', 'scripts', 'html', 'tests']);

gulp.task('default', ['build', 'watch']);
