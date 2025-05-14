const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

function styles() {
    return src('styles/global.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('css'))
        .pipe(browserSync.stream());
}


function serve() {
    browserSync.init({
        server: './'
    });

    watch('styles/global.scss', styles);
    watch('*.html').on('change', browserSync.reload);
    watch('js/**/*.js').on('change', browserSync.reload);
}


exports.default = series(styles, serve);