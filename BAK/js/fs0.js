// fs_getFiles.js

// https://qiita.com/shisama/items/affb219514eb1166198e
// オプションwithFileTypesをtrueにするとこれまでのようにファイル名やディレクトリ名の文字列の配列を取得するのではなく、fs.Direntオブジェクトの配列を取得することができます。

// fs.Direntのdirentですが、ディレクトリエントリと呼ばれるファイルやディレクトリの情報を持った構造体です。


const fs = require('fs');
const path = require('path');

const showFiles = (dirpath, callback) => {
  fs.readdir(dirpath, { withFileTypes: true }, (err, dirents) => {
    if (err) {
      console.error(err);
      return;
    }

    for (const dirent of dirents) {
      const fp = path.join(dirpath, dirent.name);
      if (dirent.isDirectory()) {
        showFiles(fp, callback);
      } else {
        // callback(dirent.name);
        callback(fp);

      }
    }
  });
};

showFiles(process.argv[2], console.log);