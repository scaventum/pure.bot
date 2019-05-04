const gulp = require('gulp')

const sass = require('gulp-sass')
const cssnano = require('gulp-cssnano')
const sourcemaps = require('gulp-sourcemaps')

const concat = require('gulp-concat')
const babel = require('gulp-babel')
const terser = require('gulp-terser')

const imagemin = require('gulp-imagemin')

const del = require('del')

var resources = 'resources/'
var assets = 'public/assets/'

var style_resources = resources+'scss/**/*.scss'
var script_resources = resources+'js/*/**/*.js'
var image_resources = resources+'image/**/*'

var style_assets = assets+'css/'
var script_assets = assets+'js/'
var image_assets = assets+'image/'

gulp.task('style', function(){
    return gulp.src([style_resources])
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(cssnano()) 
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(style_assets))
})

gulp.task('script', function() {
    return gulp.src([script_resources,resources+'js/script.js'])
        .pipe(sourcemaps.init())
        .pipe(concat('script.js'))
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(terser())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(script_assets));
})

gulp.task('image', function() {
    return gulp .src(image_resources)
    .pipe(imagemin()) 
    .pipe(gulp.dest(image_assets));
})

gulp.task('clean', function(done) {
    del.sync(assets);
    done()
})

gulp.task('build', gulp.series('style','script','image'), function() {
})

gulp.task('watch', function(){
    gulp.watch(style_resources, gulp.series('style')) 
    gulp.watch(script_resources, gulp.series('script')) 
    gulp.watch(script_resources, gulp.series('image')) 
    // Other watchers
})

gulp.task('default', gulp.series('clean','build','watch'), function(done) {
    done()
})