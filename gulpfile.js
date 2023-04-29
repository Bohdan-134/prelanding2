const gulp = require('gulp');
const del = require('del');
const gulpPug = require('gulp-pug');
const htmlmin = require('gulp-htmlmin');
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');
const jsmin = require('gulp-jsmin');
const webp = require('gulp-webp');
const browserSync = require("browser-sync").create();

const paths = {
    pug: {
        src: 'src/**/*.pug',
        dist: 'dist'
    },
    styles: {
        src: 'src/styles/**/*.scss',
        dist: 'dist/css'
    },
    scripts: {
        src: 'src/js/**/*.js',
        dist: 'dist/js/'
    },
    img: {
        src: 'src/img/**/*.{png,svg,jpeg}',
        dist: 'dist/img/'
    }
}

function clean() {
    return del(["dist"]);
}

function pug() {
    return gulp
        .src(paths.pug.src)
        .pipe(gulpPug())
        .pipe(htmlmin())
        .pipe(gulp.dest(paths.pug.dist))
        .pipe(browserSync.stream());
}

function styles() {
    return gulp
        .src(paths.styles.src)
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(cssmin())
        .pipe(gulp.dest(paths.styles.dist))
        .pipe(browserSync.stream());
}

function scripts() {
    return gulp
        .src(paths.scripts.src)
        .pipe(jsmin())
        .pipe(gulp.dest(paths.scripts.dist))
        .pipe(browserSync.stream());
}

function images() {
    return gulp
        .src(paths.img.src)
        .pipe(webp())
        .pipe(gulp.dest(paths.img.dist))
        .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: "dist",
        },
    });
    gulp.watch(paths.pug.src, pug);
    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.scripts.src, scripts);
    gulp.watch(paths.img.src, images);
}

const build = gulp.series(
    clean,
    pug,
    gulp.parallel(styles, scripts, images),
    watch
);

exports.clean = clean;
exports.pug = pug;
exports.styles = styles;
exports.scripts = scripts;
exports.images = images;
exports.default = build;