
//TODO 6 数据库模块 ==>判断用户名 密码
//TODO 6.1 引入 
const mysql = require('mysql')

//TODO 6.2 建立连接
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'admin123',
    database: 'my_db_01'

})


// TODO 6.3 导出
module.exports = db