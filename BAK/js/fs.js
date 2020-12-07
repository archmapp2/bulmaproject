// fs.js

// https://qiita.com/shisama/items/affb219514eb1166198e
// オプションwithFileTypesをtrueにするとこれまでのようにファイル名やディレクトリ名の文字列の配列を取得するのではなく、fs.Direntオブジェクトの配列を取得することができます。

// fs.Direntのdirentですが、ディレクトリエントリと呼ばれるファイルやディレクトリの情報を持った構造体です。


const fs = require('fs');

const listFiles = (dir) =>
  fs
    .readdirSync(dir, { withFileTypes: true })
    .flatMap((dirent) =>
      dirent.isFile()
        ? [`${dir}/${dirent.name}`]
        : listFiles(`${dir}/${dirent.name}`)
    );

console.log(listFiles('./src'));