//1.引入模块
const express = require('express')
//2.创建web服务器
const app = express()

// console.log(app);

app.get('/user', (req, res) => {
    const xx = {
        username: 'zs',
        age: 23,
        favorite: {
            eating: '西瓜柠檬'
        }

    }
    res.send(xx)
})

app.post('/user', (req, res) => {

    res.send('请求成功')
})
app.get('/:ids/:user', (req, res) => {

    res.send(req.params)

})

//3.启动服务器
app.listen(80, () => {
    console.log('成功启动web服务器');
})

