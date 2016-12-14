var gulp = require('gulp-help')(require('gulp'));
var jasmineBrowser = require('gulp-jasmine-browser');
var jasmine = require('gulp-jasmine');
var webpackStream = require('webpack-stream');
var webpack = require('webpack');
var runSequence = require('run-sequence');

var child_process = require('child_process');
var path = require('path');

gulp.task('jasmine', 'runs unit tests for frontend', function() {
  const JasmineConfig = Object.assign({}, {
    watch: true,
    output: {filename: 'spec.js'},
    module: {
      loaders: [
        {
          test: /\.js$/,
          include: path.resolve(__dirname, "src"),
          loader: 'babel-loader'
        },
        {
          test: /\.json$/,
          loader: 'json-loader'
        },
        {
          test: /\.scss$/,
          include: path.resolve(__dirname, "src"),
          loaders: [
            "style-loader",
            'css-loader?localIdentName=[path][name]---[local]---[hash:base64:5]',
            'sass-loader'
          ]
        }
      ]
    },
    externals: {
      'react/lib/ExecutionEnvironment': true,
      'react/addons': true,
      'react-dom/lib/ReactTestUtils': true,
      'react/lib/ReactContext': 'window'
    }
  });

  return gulp.src(['src/**/spec.js'])
    .pipe(webpackStream(JasmineConfig))
    .pipe(jasmineBrowser.specRunner())
    .pipe(jasmineBrowser.server({port: 8888}));
});

gulp.task('jasmine-server', 'runs unit tests for backend', function(done) {
  return gulp.src(['server/helpers/test-helper.js', 'server/**/spec.js'])
    .pipe(jasmine(done))
});


var server;
gulp.task('startTestServer', 'starts test server on port 8000 for unit tests to run against', function() {
  server = child_process.exec('NODE_ENV=test PORT=8000 node ./server');
  return server;
});

gulp.task('killTestServer', 'kills the test server', function() {
  if (server) {
    server.kill()
  }
});

gulp.task('jasmine:server', 'runs startTestServer -> jasmine-server -> killTestServer', function(done) {
  return runSequence(
    'startTestServer',
    'jasmine-server',
    'killTestServer',
    done
  )
});