//引入 express
const express = require('express')
//创建路由对象
let router = express.Router()

//挂载 用户获取
router.get('/getbooks', (req, res) => {
    res.send('获取成功')
});
//挂载 用户提交
router.post('/addbook', (req, res) => {
    res.send('提交成功')
})


//导出 router
module.exports = router