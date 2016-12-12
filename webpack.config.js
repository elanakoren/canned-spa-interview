var path = require('path');

module.exports = {
  context: __dirname,
  entry: path.resolve(__dirname, 'src/components/entry'),
  output: {
    path: __dirname + "/src/static/js",
    filename: "bundle.js"
  },
  resolve: {
    modulesDirectories: ['node_modules', 'src'],
    extensions: ['', '.js', '.jsx', '.scss']
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
      },
      {
        test: /\.scss$/,
        loaders: [
          "style-loader",
          'css-loader?localIdentName=[path][name]---[local]---[hash:base64:5]',
          'sass-loader'
        ]
      }
    ]
  }
};

