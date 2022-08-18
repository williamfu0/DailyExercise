const express = require('express')
const router = express.Router()  //生成路由对象
const userinfo_handle = require('../router_handler/userInfo')



router.get('/userinfo', userinfo_handle.getuserinfo)


module.exports = router  //导出 路由模块