//模块引入
const fs = require('fs')
const path = require('path')
const http = require('http')


//设置服务器
const server = http.createServer()
server.on('request', (req, res) => {

    // console.log(req.url);
    const url = req.url
    //判断状态   输出路径  
    newUrl = ''
    if (url == '/') {
        newUrl = path.join(__dirname, "./clock/index.html")

    } else {

        newUrl = path.join(__dirname, "./clock/", url)
    }

    //渲染
    fs.readFile(newUrl, 'utf-8', (err, result) => {
        if (err) return console.log('读取失败' + err.message)
        res.end(result)
    })

})


//开启服务器
server.listen(5050, () => {

    console.log('http静态服务器开始');
})

