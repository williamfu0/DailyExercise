const fs = require('fs')
fs.readFile('./成绩.txt', function (err, result) {
    if (err) return console.log('文件读取失败' + err.message);
    fs.writeFile('新成绩2.txt', result, function () {
        if (err) return console.log('文件写入失败' + err.message);
        console.log('文件写入成功' + err);
    })

})