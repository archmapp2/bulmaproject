// fs0Sync2.js

// https://qiita.com/takeyuichi/items/65477e9c8ff5cfc6fdef

// https://qiita.com/shisama/items/affb219514eb1166198e
// オプションwithFileTypesをtrueにするとこれまでのようにファイル名やディレクトリ名の文字列の配列を取得するのではなく、fs.Direntオブジェクトの配列を取得することができます。

// fs.Direntのdirentですが、ディレクトリエントリと呼ばれるファイルやディレクトリの情報を持った構造体です。

const fs = require('fs');

const dirPath = 'src';

// not recursive
// dirPath直下!のファイルやディレクトリ全てがDirentオブジェクトの配列で返ってくる
const allDirents = fs.readdirSync(dirPath, { withFileTypes: true });

const fileNames = allDirents
  .filter((dirent) => dirent.isFile())
  .map(({ name }) => name);

console.log('fileNames', fileNames);
