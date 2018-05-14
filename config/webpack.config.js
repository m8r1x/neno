const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  mode: process.env.NODE_ENV || "development",
  target: "electron-main",
  entry: path.resolve("src/client/index.js"),
  output: {
    filename: "bundle.js",
    path: path.resolve("public/build")
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              minimize: true,
              modules: true,
              localIdentName: "[name]__[local]__[hash:base64:5]"
            }
          }
        ]
      }
    ]
  },
  plugins: devMode
    ? []
    : [
      new MiniCssExtractPlugin({
        filename: "[name].css"
      })
    ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  }
};
