module.exports = {
  mode: 'development',
  entry: './index',

  module: {
    rules: [{
      test: /\.js/,
      loader: 'babel-loader',
    }]
  }
}
