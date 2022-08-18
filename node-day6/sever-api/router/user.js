// TODO 4 设置路由模块 之后 拆分路由模块成功能模块
//TODO 4.1 设置 导入 express
const express = require('express')
//TODO 4.2  设置路由
const router = express.Router()

const handler = require('../router_handler/user')

//引入 验证表当数据中间件
const expressJoi = require('@escook/express-joi')
//  导入需要的验证规则对象
const { reg_login_schema } = require('../schema/user')  //⭐⭐⭐


// TODO 4.3 设置请求方法 --->功能模块
router.post('/reguser', expressJoi(reg_login_schema), handler.reguser)

router.post('/login', expressJoi(reg_login_schema), handler.login)

//TODO 4.4  导出
module.exports = router

