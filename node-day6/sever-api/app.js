const express = require('express')
const app = express()
//TODO3 跨域
const cors = require('cors')
app.use(cors())
app.use(express.urlencoded({ extended: false })) //TODO2 设置解析表单数据(req.body)中间件


/* 导入区 */
const joi = require('joi')   //joi 验证 
const expressjwt = require('express-jwt') //引入 token解密模块
const config = require('./config')   //引入 密钥




//TODO 7.2注册全局的res.cc
app.use((req, res, next) => {
    //status 默认为1
    res.cc = function (err, status = 1) {
        res.send({
            status,
            message: err instanceof Error ? err.message : err
        })
    }
    next()
})


// 解析环节 
app.use(expressjwt({ secret: config.jwtSecretKey }).unless({ path: [/^\/api\//] }))



/* TODO1 导入 路由模块; */
const router = require('./router/user')
app.use('/api', router)
const infoRouter = require('./router/userInfo')
app.use('/my', infoRouter)



/* 错误中间件*/
app.use(function (err, req, res, next) {
    // 数据验证失败
    if (err instanceof joi.ValidationError) return res.cc(err)
    //token 错误
    if (err.name === 'UnauthorizedError') return res.cc('身份认证失败！')

    // 未知错误
    res.cc(err)
    next()
})



/* 开启服务器 */
app.listen(233, () => {

    console.log('api sever in http://127.0.0.1:233');
})