const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'production',
    entry: './src/index.coffee',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management',
        }),
        new MiniCssExtractPlugin({
          linkType: false,
        }),
    ],
    output: {
        filename: 'index.js',
    },
    module: {
      rules: [
        {
          test: /\.coffee$/,
          loader: "coffee-loader",
          options: {
            bare: false,
            transpile: {
              presets: ["@babel/env"],
            },
          },
        },
        {
            test: /\.html?$/,
            use: ['raw-loader'],
        },
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
      ],
    },
    devServer: {
        port: 4200,
        static: path.join(__dirname, 'public'),
        hot: true,
        allowedHosts: 'auto',
        bonjour: true,
      },
  };