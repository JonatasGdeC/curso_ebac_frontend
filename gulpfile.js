const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin')

function compilaSass(){
    return gulp.src('./source/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./build'))
}

function minificaJavaScript(){
    return gulp.src('./source/js/main.js')
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest('./build/js'))
}

function minificaImagens(){
    return gulp.src('./source/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/img/'))
}

function minificaImagensConsoles(){
    return gulp.src('./source/img/consoles/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/img/consoles/'))
}

function minificaImagensJogosPlay2(){
    return gulp.src('./source/img/jogos/playstation2/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/img/jogos/playstation2/'))
}

function minificaImagensJogosPlay3(){
    return gulp.src('./source/img/jogos/playstation3/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/img/jogos/playstation3/'))
}

function minificaImagensJogosPlay4(){
    return gulp.src('./source/img/jogos/playstation4/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/img/jogos/playstation4/'))
}

function minificaImagensJogosPlay5(){
    return gulp.src('./source/img/jogos/playstation5/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/img/jogos/playstation5/'))
}

function minificaImagensSlides(){
    return gulp.src('./source/img/slides/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/img/slides/'))
}

exports.compilaSass = compilaSass
exports.default = function(){
    gulp.watch('./source/*.scss', {ignoreInitial: false}, gulp.series(compilaSass))
    gulp.watch('./source/js/main.js', {ignoreInitial: false}, gulp.series(minificaJavaScript))
    gulp.watch('./source/img/*', {ignoreInitial: false}, gulp.series(minificaImagens))
    gulp.watch('./source/img/consoles/*', {ignoreInitial: false}, gulp.series(minificaImagensConsoles))
    gulp.watch('./source/img/jogos/playstation2/*', {ignoreInitial: false}, gulp.series(minificaImagensJogosPlay2))
    gulp.watch('./source/img/jogos/playstation3/*', {ignoreInitial: false}, gulp.series(minificaImagensJogosPlay3))
    gulp.watch('./source/img/jogos/playstation4/*', {ignoreInitial: false}, gulp.series(minificaImagensJogosPlay4))
    gulp.watch('./source/img/jogos/playstation5/*', {ignoreInitial: false}, gulp.series(minificaImagensJogosPlay5))
    gulp.watch('./source/img/slides/*', {ignoreInitial: false}, gulp.series(minificaImagensSlides))
}