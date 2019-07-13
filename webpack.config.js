module.exports = {
  entry: ['./src/js/index.js', './src/scss/main.scss'],
  output: {
    path: __dirname + '/public',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(svg|gif|jpg|png|eot|woff|ttf)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 25000
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  devServer: {
    contentBase: './public'
  }
};
