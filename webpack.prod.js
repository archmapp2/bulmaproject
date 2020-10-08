const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");  // インストールの必要なし
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].[contentHash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin(),
      new TerserPlugin(), // 再び、jsファイルをコンパクト化
      new HtmlWebpackPlugin({
        template: './src/index.html',
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true,
        },
      }),
      // about.html等も必要に応じて、追加する。
      // 恐らく、pluginsと同様に配列で処理できる。
    ],
  },
  plugins: [
    ///
    new MiniCssExtractPlugin({ filename: '[name].[contentHash].css' }),
    new CleanWebpackPlugin(),
    // "clean-webpack-plugin": "^3.0.0"
    // new CleanWebpackPlugin({
    //   dry: true,
    //   cleanAfterEveryBuildPatterns: ['dist'],
    // }),
    // new HtmlWebpackPlugin({
    //   filename: 'index.html',
    //   template: './src/template.html',
    // }),
    // new HtmlWebpackPlugin({
    //   filename: 'about.html',
    //   template: './src/about.html',
    // }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, //3. Extract css into files ///
          'css-loader', //2. Turns css into commonjs
          'sass-loader', //1. Turns sass into css
        ],
      },
    ],
  },
});
