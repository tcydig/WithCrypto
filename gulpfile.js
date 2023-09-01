// パッケージを読み込む
let gulp = require('gulp');
let watch = require('gulp-watch');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', done => {
    gulp.src('./src/app/home/home.component.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'expanded',
    }).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./src/app/home/'))
    .pipe(cleanCSS())
    .pipe(rename({
      suffix: '.min',
    }))
    .pipe(gulp.dest('./src/app/home/'));
    done();
  });

gulp.task('watch', function()
{   
    gulp.watch(`./src/app/home/home.component.scss`, gulp.task('sass'));
});