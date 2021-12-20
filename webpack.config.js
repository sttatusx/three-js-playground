const path = require("path");

module.exports = {
  mode: 'development',
  entry: "./src/index.ts",
  devtool: "inline-source-map",

  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },

    compress: true,
    port: 8080,
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },

  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },

  output: {
    filename: "app.bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
