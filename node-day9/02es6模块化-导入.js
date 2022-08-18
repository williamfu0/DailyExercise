// import { count as ii } from "./01es6模块化-导出.js";
// console.log(ii);
// import hh from "./01es6模块化-导出.js";
// console.log(hh)



// 第一种 import 用法
import fun, { sayHi } from './exportFile.js';
fun("流星")
sayHi("流星")

// 第二种 import 用法
import { default as fun, sayHi } from './exportFile.js';
fun("流星")
sayHi("流星")
