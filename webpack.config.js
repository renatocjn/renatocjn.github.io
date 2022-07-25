const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'none',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.bundle.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
    open: true,
    clientLogLevel: 'silent',
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|ico|html|txt)$/i,
        use: [
          { loader: 'file-loader' },
        ],
      }, {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }, {
        test: /\.(jsx|js)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                targets: 'defaults',
              }],
              '@babel/preset-react',
            ],
          },
        }, {
          loader: 'eslint-loader',
          options: {
            fix: true,
          },
        }]
      },
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
		new HtmlWebpackPlugin({
			title: "Renato CJN",
			favicon: 'static/favicon.ico'
		}),
  ]
};
