// fs0Sync.js

// https://qiita.com/shisama/items/affb219514eb1166198e
// オプションwithFileTypesをtrueにするとこれまでのようにファイル名やディレクトリ名の文字列の配列を取得するのではなく、fs.Direntオブジェクトの配列を取得することができます。

// fs.Direntのdirentですが、ディレクトリエントリと呼ばれるファイルやディレクトリの情報を持った構造体です。

const fs = require('fs');
const path = require('path');

const showFiles = (dirpath, callback) => {
  const dirents = fs.readdirSync(dirpath, { withFileTypes: true });

  dirents.forEach((dirent) => {
    const fp = path.join(dirpath, dirent.name);
    if (dirent.isDirectory()) {
      showFiles(fp, callback);
    } else {
      // callback(dirent.name);
      callback(fp);
    }
  });
};

showFiles(process.argv[2], console.log);
console.log("~~~ process.argv[2]", process.argv[2])
