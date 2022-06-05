const fs = require('fs')
fs.readFile('./成绩.txt', 'utf-8', function (err, result) {
    if (err) return console.log('文件读取失败' + err.message);
    console.log('文件读取成功' + result);

    let de = result.split(' ')
    console.log(de);
    let newArr = []
    de.forEach(function (value) {
        newArr.push(value.replace('=', ':')
        )
        console.log(newArr);
    })
    let newStr = newArr.join('\r\n')

    fs.writeFile('新成绩2.txt', newStr, function () {
        if (err) return console.log('文件写入失败' + err.message);
        console.log('文件写入成功' + err);

    })
})