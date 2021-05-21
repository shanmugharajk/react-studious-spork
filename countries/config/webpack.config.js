const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

// == env utils ==
const env = (name) => name === (process.env.NODE_ENV || "development");

const isProd = () => env("production");

const ifProd = (t, f) => (isProd() ? t : f);

// == paths ==
const dist = path.resolve(__dirname, "..", "./dist");
const context = path.resolve(__dirname, "..");
const configFile = "tsconfig.json";
const main = process.env.MAIN_ENTRY || "./src/index.tsx";
const template = "./public/index.html";
const favicon = "./public/favicon.ico";

module.exports = {
  context,

  entry: main,

  output: {
    path: dist,
    filename: ifProd("[name].[chunkhash].js", "[name].js"),
    chunkFilename: ifProd("[name].[chunkhash].js", "[name].js"),
  },

  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "~": ".",
    },
  },

  module: {
    rules: [
      // For all components and ts files
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },

      // For css files
      {
        test: /\.css$/,
        // style-loader injectss css into DOM.
        // css-loader interprets @import and url() like import/require() and will resolve them
        use: ["style-loader", "css-loader", "postcss-loader"],
      },

      // For images
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },

      // For fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },

  mode: "development",

  plugins: [
    // Does the type checking since babel only compiles to Javscript.
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile,
      },
    }),

    // injects the bundle.js file
    new HtmlWebpackPlugin({
      template,
      favicon,
    }),
  ],

  devtool: ifProd(undefined, "eval-cheap-module-source-map"),
};
