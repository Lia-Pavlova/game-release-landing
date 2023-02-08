const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  entry: {
    app: './src/assets/js/index.js',
  },
  output: {
    clean: true,
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  mode: 'development',
  devServer: {
    static: './src',
    compress: true,
    port: 9000,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: 'html-loader',
      },
      {
        test: /\.(s[ac]ss|css)$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'God Of War',
      template: 'src/index.html',
      favicon: 'src/assets/images/favicon/favicon.png',
      icon16: 'src/assets/images/favicon/favicon-16x16.png',
      icon32: 'src/assets/images/favicon/favicon-32x32.png',
      apple: 'src/assets/images/favicon/apple-touch-icon.png',
    }),
    new FaviconsWebpackPlugin('src/assets/images/favicon/favicon.png'),
  ],
};
