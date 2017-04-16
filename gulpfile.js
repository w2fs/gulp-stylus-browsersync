const gulp = require('gulp');
const stylus = require('gulp-stylus');
const poststylus = require('poststylus');
const uglify = require('gulp-uglifyjs');
const browserSync = require('browser-sync').create();

gulp.task('stylus', () => {
  gulp.src('style.styl')
    .pipe(stylus({
      use: [
        poststylus(['autoprefixer'])
      ]
    }))
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('js', () => {
  gulp.src('js/*.js')
    .pipe(uglify('main.min.js'), {
      outerSouceMap: true
    })
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('watch', () => {
  gulp.watch('js/*.js', ['js']);
  gulp.watch('style.styl', ['stylus']);
});

gulp.task('browsersync', function() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
});

gulp.task('default', ['browsersync','js','stylus','watch']);