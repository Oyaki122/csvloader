module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: ['./src/index.js'], // polyfill はIE11などで必要
  output: {
    path: `${__dirname}/dist`,
    filename: 'main.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}
