// fs-extra.js

const fse = require('fs-extra');

let pages = fse
  .readdirSync('./src/sub') // 'fs'
  .filter((file) => {
    return file.endsWith('.html');
  })
  .map((page) => {
    console.log('page', page);
    return page;
    // return new HtmlWebpackPlugin({
    //   filename: page,
    //   template: `./src/${page}`,
    // });
  });

console.log('pages', pages);
