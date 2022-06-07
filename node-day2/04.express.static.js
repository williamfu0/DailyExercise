const express = require('express')
const app = express()
app.use(express.static('./clock'))


app.listen(80, () => {

    console.log('成功启动web服务器');
})