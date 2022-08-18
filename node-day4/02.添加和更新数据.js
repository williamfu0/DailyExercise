
//引入
const mysql = require('mysql')

//建立连接
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'admin123',
    database: 'my_db_01'

})

// db.query('select 1', (err, res) => {
//     if (err) return console.log(err.message + '连接失败');
//     console.log(res);
// })

const data = { username: '哈登', password: '32233' }

//注入mysql 语句
// const sqlStr = 'INSERT INTO users(username,password) values(?,?)'

// db.query(sqlStr, [data.username, data.password], (err, res) => {
//     if (err) return console.log(err.message);
//     if (res.affectedRows === 1) console.log('插入成功');
// })
//快捷 方法

// const data1 = { username: '保罗', password: 'weiiis' }

// const sqlStr1 = 'INSERT INTO users set ? '

// db.query(sqlStr1, data1, (err, res) => {
//     if (err) return console.log(res.message);
//     if (res.affectedRows === 1) console.log('插入成功!')
// })


//更新 数据
//1.要更新的数据对象
const data3 = { id: 46, username: '尼克杨', password: 12333 }
//2.sql 语句
const sqlStr3 = 'UPDATE users SET ?  where id=?'
db.query(sqlStr3, [data3, data3.id], (err, res) => {
    if (err) return console.log(res.message);
    if (res.affectedRows === 1) console.log('更新成功!')
})