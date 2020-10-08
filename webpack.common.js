const path = require('path');
const fse = require('fs-extra');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');

let pages = fse
  .readdirSync('./src') // 'fs'
  .filter((file) => {
    return file.endsWith('.html');
  })
  .map((page) => {
    // console.log('page', page);
    return new HtmlWebpackPlugin({
      filename: page,
      template: `./src/${page}`,
    });
  });
let plugins = [
  new webpack.ProvidePlugin({
    handlebars: 'handlebars',
  })
];
plugins.push(...pages);
// console.log('plugins', plugins);

module.exports = {
  entry: {
    main: './src/index.js',
    vendor: './src/vendor.js',
  },
  plugins: plugins,
  // [
  //   new webpack.ProvidePlugin({
  //     handlebars: 'handlebars',
  // $: 'jquery',
  // jQuery: 'jquery',
  // })
  // new HtmlWebpackPlugin({
  //   filename: 'index.html',
  //   template: './src/template.html',
  // }),
  // new HtmlWebpackPlugin({
  //   filename: 'about.html',
  //   template: './src/about.html',
  // }),
  // ].push(pages),

  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'img',
          },
        },
      },
    ],
  },
};
