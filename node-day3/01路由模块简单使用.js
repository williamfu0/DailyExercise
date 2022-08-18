//导入express
const express = require('express')
const app = express()

//导入
const router = require('./02路由模块')

//注册路由
app.use('/api', router)

//打开服务器
app.listen(80, () => {
    console.log('路由服务器打开成功')
}
)