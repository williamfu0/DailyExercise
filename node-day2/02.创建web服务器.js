//1.导入http模块
//2.创建服务器
//3.设定服务器的监听require事件
//4.开启服务器 server.listen

const http = require('http')  //1.导入http 模块
const server = http.createServer()
server.on('request', (req, res) => {
    console.log('监听request事件');
    const str = `目前的地址是${req.url},请求方式是${req.method}`
    res.setHeader('Content-Type', 'text/html; charset=utf-8')

    res.end(str)
})


server.listen(80, () => {
    console.log('web服务器开启');
})