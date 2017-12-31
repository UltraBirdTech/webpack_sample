const path = require('path')

module.exports = {
    // エントリーポイント
    entry: './src/js/app.js',
    // 出力先の設定
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public/js')
    }
};
