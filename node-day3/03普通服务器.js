//导入 express 
const express = require('express')
const app = express()

//引入 router
const router = require('./04普通路由.js')

//格式
//注册
app.use(router)


//开启 服务器
app.listen(80, () => {

    console.log('服务器开始成功');
})
