// const moment = require('./node_modules/moment/moment.js')
const moment = require('moment')

// zh-cn
moment.locale('zh-cn');
let i = moment().format('MMMM Do YYYY, h:mm:ss a')
console.log(i); //六月 7日 2022, 10:57:13 上午