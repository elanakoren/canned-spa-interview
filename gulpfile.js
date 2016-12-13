var gulp = require('gulp');
var jasmineBrowser = require('gulp-jasmine-browser');
var webpack = require('webpack-stream');

var webpackConfig = require('./webpack.config.js');

gulp.task('jasmine', function() {
  const JasmineConfig = Object.assign({}, {
    watch: true,
    output: {filename: 'spec.js'},
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader'
        },
        {
          test: /\.scss$/,
          exclude: /(node_modules|bower_components)/,
          loaders: [
            "style-loader",
            'css-loader?localIdentName=[path][name]---[local]---[hash:base64:5]',
            'sass-loader'
          ]
        }
      ]
    },
    externals: {
      'jsdom': 'window',
      'cheerio': 'window',
      'react/lib/ExecutionEnvironment': true,
      'react/addons': true,
      'react-dom/lib/ReactTestUtils': true,
      'react/lib/ReactContext': 'window'
    }
  });

  return gulp.src(['src/**/spec.js'])
    .pipe(webpack(JasmineConfig))
    .pipe(jasmineBrowser.specRunner())
    .pipe(jasmineBrowser.server({port: 8888}));
});
