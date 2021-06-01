const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/main.ts",
  output: {
    clean: true,
    filename: "bundle.[contenthash].js", //contenthash est optionnel
    path: path.resolve(__dirname, "dist"), //chemin absolu
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./src/img/*",
          to: "img/[name][ext]",
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
      hash: true,
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
  },
  mode: "development",
  devtool: "inline-source-map", //ajout des fichiers de sourceMapping
  module: {
    rules: [
      //Configuration compilation TS
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|ico|svg|webp|pdf)$/,
        use: ["file-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};
