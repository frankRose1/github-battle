const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

//Combines all modules in to one bundled script to be used in index.html
  //1) entry point to the application
  //2) transformations to make to the code --> babel, style-loader etc,
  //3) where to put the bundled file

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      {test: /\.(js)$/, use: 'babel-loader'},
      {test: /\.(css)$/, use: ['style-loader', 'css-loader']}
    ]
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    })
  ]
}