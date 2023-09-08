const webpack = require('webpack');
const path = require('path');
const glob = require("glob");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const PATHS = {
  src: path.join(__dirname, "src"),
};

const config = {
  mode: "development",
  entry: './src/scripts.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
    chunkFilename: '[id].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ]
      },
    ]
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
      '...'
    ],
    minimize: true,
    splitChunks: {
      cacheGroups: {
        styles: {
          name: "styles",
          test: /\.css$/,
          chunks: "all",
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html"),
      filename: "index.html",
      minify: true,
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new CopyPlugin({
      patterns: [
        { from: "src/assets/images", to: "assets/images" },
      ],
    }),
  ],
  devtool: "source-map",
  devServer: {
    compress: true,
    port: 4200,
    liveReload: true,
    hot: false,
  },
};

module.exports = config;