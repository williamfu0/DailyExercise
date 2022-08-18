import $ from 'jquery'

import './css/color.css'
import "./less/color.less"
import imgsrc from "./assets/1.gif"
import './assets/fonts/iconfont.css'


$(function () {
    $('#app li:nth-child(odd)').css('color', 'red')
    $('#app li:nth-child(even)').css('color', 'green')
})

const img = document.createElement('img')
img.src = imgsrc
document.body.appendChild(img)

const fn = () => {
    console.log('hello 拉拉');
}

console.log(fn);