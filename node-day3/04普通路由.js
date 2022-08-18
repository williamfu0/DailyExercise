//导入 express 
const express = require('express')

//创建 路由对象
const router = express.Router()

router.use(express.urlencoded({ extended: false }))

//挂载
router.get('/getuser', (req, res) => {
    const str = {
        name: 'zs',
        age: 18,
        favorite: {
            eating: '西瓜柠檬',
            drinking: 'beer'
        }

    }
    res.send(str)
})

router.post('/postuser', (req, res) => {
    const body = req.body
    const str = {
        status: 0,
        message: 'post 成功',
        data: body
    }
    res.send(str)
})


//导出 
module.exports = router