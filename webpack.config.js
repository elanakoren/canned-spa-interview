var path = require('path');

module.exports = {
  entry: "./src/components/entry",
  output: {
    path: __dirname + "/src/static/js",
    filename: "bundle.js"
  },
  devtool: "#inline-source-map",
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}

