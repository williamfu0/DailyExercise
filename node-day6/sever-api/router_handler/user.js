//TODO 5 功能模块 ===>设置数据库模块 导入数据库


const db = require('../db/index')
//数据库连接 测试
// db.query('select 1', (err, result) => {
//     if (err) return console.log(err.message);
//     console.log(result);
// })  //成功

//TODO 8.1 引入bcryptjs
const bcrypt = require('bcryptjs')

//引入密钥包
const jwt = require('jsonwebtoken')
//引入 密钥
const config = require('../config')

//TODO 5.1 暴露功能

//注册功能
exports.reguser = (req, res) => {
    const userinfo = req.body

    ///TODO 7 判断用户名是否存在
    //todo 7.1 定义sql 命令 ==>设置res.cc
    const sql = 'select * from ev_users where username=?'
    db.query(sql, userinfo.username, (err, results) => {
        if (err) return res.cc(err.message)
        if (results.length > 0) {
            return res.cc('用户名被占用，请更换其他用户名！')
        }

        //TODO 8 插入数据库
        //TODO 8.1 加密数据库密码 ==>bcryptjs
        userinfo.password = bcrypt.hashSync(userinfo.password, 10)


        //插入sql语句 ==>表单验证
        const sqlinto = 'insert into ev_users set ?'
        db.query(sqlinto, { username: userinfo.username, password: userinfo.password }, (err, results) => {
            if (err) return res.cc(err)
            // //执行了也可能注入失败 if affectedRows !=1 
            if (results.affectedRows != 1) return res.cc('创建用户失败!')
            return res.cc('创建成功', 0)
        })
    })


}

//登录功能
exports.login = (req, res) => {

    //TODO 登录时判断数据库是否有这个用户数据
    const userinfo = req.body
    const sql = 'select * from ev_users where username=? '
    db.query(sql, userinfo.username, (err, results) => {

        if (err) return res.cc(err.message)
        if (results.length != 1) return res.cc('登录失败!')
        //都没return 就是找到用户了

        //TODO 判断登录密码是否和数据库一致
        compareResult = bcrypt.compare(userinfo.password, results[0].password)

        // compareResult.then(function () {
        //     console.log(compareResult);        //异步操作 所以要用异步去打印 true/false

        // })
        //如果比较后为false就是密码错误
        if (!compareResult) {
            return res.cc('密码错误!')
        }

        //TODO s1 生成 登录令牌token
        //TODO s1.1  导入 jwt
        //TODO s1.2 不能把密码暴露出来 要先剔除
        const user = { ...results[0], password: '', user_pic: '' }

        // TODO s2.1 生成密钥 ==>新建config.js

        //TODO s3 生成token
        const tokenS = jwt.sign(user, config.jwtSecretKey, { expiresIn: '10h', })// token 有效期为 10 个小时

        res.send({
            status: 0,
            message: '登录成功!',
            token: 'Bearer ' + tokenS
        })
    })
}
