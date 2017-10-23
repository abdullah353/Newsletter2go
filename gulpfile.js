var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    jshint = require('gulp-jshint'),
    connect = require('gulp-connect'),
    uglify = require('gulp-uglify-es').default,
    gulpIgnore = require('gulp-ignore'),
    less = require('gulp-less'),
    concat = require('gulp-concat');

var bower = 'bower_components/',
    modules = 'modules/**/';

var paths = {
	js: {
        core: [
            modules + '*.module.js',
            modules + '*.config.js',
            modules + '*.service.js',
            modules + '*.filter.js',
            modules + '*.controller.js',
            modules + '*.routes.js',
            modules + '*.directive.js',
        ],
        lib: [
            // Adding libraries over here, To improve page speed CDN lib.js
            // file or use libraries self hosted CDN in html using script tag.
            bower + 'angular/angular.js',
            bower + 'angular-ui-router/release/angular-ui-router.min.js',
            bower + 'angular-bootstrap/ui-bootstrap.min.js',
            bower + 'angular-bootstrap/ui-bootstrap-tpls.min.js'
        ],
        output: './public/js'
    },
    css: {
        less: 'modules/**/*.less',
        output: './public/css'
    }
};

gulp.task('build:jsCore', ['jshint'], function() {
    console.log(paths.js.core);
    console.log(paths.js.output);
    gulp.src(paths.js.core)
        // .pipe(gulpIgnore.exclude(['core.js', 'lib.js']))
        //.pipe(uglify())
        .pipe(concat('core.js'))
        .pipe(gulp.dest(paths.js.output))
        .pipe(connect.reload())
});

gulp.task('build:jsLib', function() {
    gulp.src(paths.js.lib)
        //.pipe(uglify())
        .pipe(concat('lib.js'))
        .pipe(gulp.dest(paths.js.output))
        .pipe(connect.reload())
});

gulp.task('build:cssCore', function() {
    gulp.src(paths.css.less)
        //.pipe(uglify())
        .pipe(concat('app.css'))
        .pipe(less())
        .pipe(gulp.dest(paths.css.output))
        .pipe(connect.reload())
});

gulp.task('watch', ['build:jsCore', 'build:jsLib', 'build:cssCore'], function () {
    gulp.watch(paths.js.core, ['jshint', 'build:jsCore']);
    gulp.watch(paths.js.lib, ['build:jsLib']);
    gulp.watch(paths.css.less, ['build:cssCore']);
});

gulp.task('jshint', function () {
    gulp.src(paths.js.core)
        .pipe(gulpIgnore.exclude(['core.js', 'lib.js']))
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('default', ['jshint', 'watch']);
