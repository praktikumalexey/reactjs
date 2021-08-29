/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = (env) => {
  const isDev = !env.production;

  return {
    entry: path.resolve(__dirname, "./src/index.tsx"),
    mode: isDev ? "development" : "production",
    module: {
      rules: [
        {
          enforce: "pre",
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: "eslint-loader",
          options: {
            emitWarning: true,
          },
        },
        {
          test: /\.(ts|tsx|js|jsx)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: ["@babel/env", "@babel/react", "@babel/preset-typescript"],
                plugins: [
                  isDev && require("react-refresh/babel"),
                  "@babel/plugin-proposal-class-properties",
                ],
              },
            },
          ],
        },
        {
          test: /\.css$/i,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: "css-loader",
              options: {
                modules: {
                  auto: true,
                  localIdentName: isDev
                    ? "[local]_[hash:base64:6]"
                    : "[hash:base64:6]",
                },
              },
            },
          ],
        },
        {
          test: /\.(png|svg|ttf|eot|woff|woff2|otf)$/,
          use: ["file-loader"],
        },
      ],
    },
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "src"),
      },
      extensions: ["*", ".js", ".jsx", ".ts", ".tsx", "json", "css"],
    },
    output: {
      path: path.resolve(__dirname, "./dist"),
      filename: "bundle.js",
      chunkFilename: "js/[name].[contenthash:8].js",
    },
    plugins: [
      isDev && new webpack.HotModuleReplacementPlugin(),
      isDev && new ReactRefreshWebpackPlugin(),

      new ForkTsCheckerWebpackPlugin({}),
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css",
      }),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "public", "index.html"),
      }),
    ].filter(Boolean),
    devServer: {
      contentBase: path.join(__dirname, "./dist"),
      compress: true,
      port: 9001,
      hot: true,
    },
  };
};
