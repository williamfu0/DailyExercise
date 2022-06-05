const style = / <style>[\s\S]*<\/style>/
const scrpit = /<script>[\s\S]*<\/script>/  //l两个都是方法 后面要用

//获取 读取 html内容 
const fs = require('fs')
const path = require('path')
fs.readFile(path.join(__dirname, './素材/index.html'), 'utf-8', function (err, stu) {


    // console.log(stu);

    const reg1 = style.exec(stu)
    const reg2 = scrpit.exec(stu)

    // console.log(reg1[0]);
    // console.log(reg2[0]);
    let newCss = reg1[0].replace('<style>', ' ').replace('</style>', ' ')
    let newJs = reg2[0].replace('<script>', ' ').replace('</script>', ' ')

    // console.log(newCss);
    // console.log(newJs);
    fs.writeFile(path.join(__dirname, './lib/index.css'), newCss, function (err) {
        console.log(err);
    })
    fs.writeFile(path.join(__dirname, './lib/index.js'), newJs, function (err) {
        console.log(err);
    })

    //生成新的html


    const newHtml = stu.replace(reg1, ' <link rel="stylesheet" href="./lib/index.css">').replace(reg2, '<script src="./lib/index.js"></script>')
    fs.writeFile(path.join(__dirname, 'clock.html'), newHtml, function (err) {
        console.log('html成功了');
    })
})