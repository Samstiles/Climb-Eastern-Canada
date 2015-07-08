var gulp = require('gulp');
var stylish = require('jshint-stylish');
var browserSync = require('browser-sync');
var karma = require('karma')
  .server;
var $ = require('gulp-load-plugins')();
var argv = require('yargs')
  .argv;

var paths = {
  script: ['src/**/*.js', '!src/lib/**/*.js'],
  scss: ['src/styles/**/*.scss'],
  styles: 'src/styles/',
  templates: ['src/**/*.html', '!src/index.html', '!src/lib/**/*.html'],
  html: ['src/**/*.html', '!src/lib/**/*.html'],
  images: ['src/images/*'],
  dist: 'dist'
};

/*
 * clean up for file in the build folder
 * */
gulp.task('clean', function () {
  return gulp.src(paths.dist)
    .pipe($.clean());
});

/*
 * javascript linting
 * */
gulp.task('js-lint', function () {
  return gulp.src(paths.script)
    .pipe($.jshint())
    .pipe($.jshint.reporter(stylish));
});

/*
 * scss linting
 * */
gulp.task('scss-lint', function () {
  return gulp.src(paths.scss)
    .pipe($.scssLint({
      'config': '.scss-lint.yml'
    }));
});

gulp.task('lint', ['js-lint']);

/*
 * compile sass to css
 * */
gulp.task('sass', function () {
  return gulp.src(paths.scss)
    .pipe($.sass())
    .pipe(gulp.dest(paths.styles));
});

/*
 * copy all assets those don't need to be processd from src to the build folder
 * */
gulp.task('copy', ['clean', 'sass'], function () {
  var assets = paths.templates
    .concat(paths.images)
    .concat(['src/*.{ico,png,txt}']);

  return gulp.src(assets, {
      "base": "src"
    })
    .pipe(gulp.dest(paths.dist));
});

/*
 * build deploy-able file to build folder
 * */
gulp.task('build', ['sass', 'lint', 'copy'], function (done) {
  var index = 'src/index.html';

  var apiUrl = argv.apiUrl ? argv.apiUrl : "https://localhost:8097";

  return gulp.src(index)
    .pipe($.rename('index.html'))
    .pipe($.usemin({
      css: [$.minifyCss(), $.rev()],
      appJs: [
        $.ngAnnotate(),
        $.replace(/<% API_URL %>/, apiUrl),
        $.rev()
      ],
      jsLib: [$.rev()]
    }))
    .pipe(gulp.dest(paths.dist));
});

gulp.task('test', ['build'], function (done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done);
});

/*
 * run this for development, it has auto reload and watch
 * */
gulp.task('serve', ['build'], function () {
  var config = {
    server: {
      baseDir: 'src'
    },
    startPath: '/',
    https: false
  };
  browserSync(config);

  gulp.watch(paths.scss, ['scss-lint', 'sass', browserSync.reload]);
  gulp.watch(paths.script, ['js-lint', browserSync.reload]);
  gulp.watch(paths.html, browserSync.reload);
});

gulp.task('default', ['serve']);

//TODO: integration test