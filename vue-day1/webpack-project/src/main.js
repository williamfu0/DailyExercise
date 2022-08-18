import $ from 'jquery'
import './css/color.css'
import './less/color.less'
import './assets/fonts/iconfont.css'


$(function () {
    $('#app li:nth-child(odd)').css('color', 'red')
    $('#app li:nth-child(even)').css('color', 'green')
})
import isrc from './assets/1.gif'
const img = document.createElement('img')
img.src = isrc
document.body.appendChild(img)

const weixin = document.querySelector('.icon-weixin')
weixin.style.color = 'green'

const fn = () => { console.log("你好babel"); }
console.log(fn);