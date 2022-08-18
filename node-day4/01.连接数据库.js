///引入 mysql 模块
const mysql = require('mysql')
//建立与MySQL 数据库的连接
const db = mysql.createPool({
    host: '127.0.0.1',       //数据库的IP地址
    user: 'root',            //登录数据库的账号
    password: 'admin123',    //登陆数据库的密码
    database: 'my_db_01'     //指定要操作那个数据库

})

//检测 mysql 模块是否正常工作
db.query('SELECT 1', (err, result) => {
    if (err) return console.log(err.message);
    console.log(result);   //只要能打印出[ RowDataPacket { '1': 1 } ] 的结果, 就能证明数据库连接正常
})


// db.query('SELECT * FROM users', (err, result) => {
//     if (err) return console.log(err.message);
//     console.log(result);
// })