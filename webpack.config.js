/* eslint-disable */

const path = require("path")

module.exports = {
  devServer: {
    publicPath: "/target/"
  },
  output: {
    filename: "app.bundle.js",
    path: path.resolve(__dirname, "target")
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  }
}
