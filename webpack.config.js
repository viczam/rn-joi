const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    library: 'Joi',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    path: __dirname + '/dist',
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        // need to babelify joi, isemail, hoek, and topo's lib
        test: /[\\\/]node_modules[\\\/](joi[\\\/]lib[\\\/]|isemail[\\\/]lib[\\\/]|hoek[\\\/]lib[\\\/]|topo[\\\/]lib[\\\/])/,
        loader: 'babel-loader'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  node: {
    crypto: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    dns: 'empty'
  }
};
