const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "production", // Use 'development' for non-minified output
  entry: "./src/zone_sheet.js", // Your entry file
  output: {
    filename: "zone_sheet.js", // Output file name
    path: path.resolve(__dirname, "dist"), // Output directory
    library: "zone_sheet", // Name of your library
    globalObject: "this",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // Optional: use Babel if you want to support older browsers
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};
