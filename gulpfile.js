var gulp = require('gulp')

var sass = require('gulp-sass')
var cssnano = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');

var concat = require('gulp-concat');
const babel = require('gulp-babel');
var terser = require('gulp-terser');

var del = require('del')

var resources = 'resources/'
var assets = 'public/assets/'

var style_resources = resources+'scss/**/*.scss'
var script_resources = resources+'js/*/**/*.js'

var style_assets= assets+'css/'
var script_assets = assets+'js/'

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
});


gulp.task('clean', function(done) {
    del.sync(assets);
    done();
})

gulp.task('build', gulp.series('style','script'), function() {
});

gulp.task('watch', function(){
    gulp.watch(style_resources, gulp.series('style')); 
    gulp.watch(script_resources, gulp.series('script')); 
    // Other watchers
})

gulp.task('default', gulp.series('clean','build','watch'), function(done) {
    done();
});