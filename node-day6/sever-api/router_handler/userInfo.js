const db = require('../db/index.js')   //准备查询数据库中用户的信息 

exports.getuserinfo = (req, res) => {
    const info = req.body

    const sql = 'select id, username, nickname, email, user_pic from ev_users where id=? '  //剔除密码 防止泄露
    db.query(sql, info.id, (err, results) => {
        if (err) return res.cc(err)
        if (results.length != 1) return res.cc('获取用户信息失败!')

        res.send({
            status: 0,
            message: '获取用户信息成功!',
            data: results[0]
        })

    })


}