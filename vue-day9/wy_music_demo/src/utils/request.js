import axios from 'axios'

// axios.defaults.baseURL = ""
const instance = axios.create({
    baseURL: 'http://localhost:3000', // 基础地址
    timeout: 5000  //超时时间
})
// 请求发起之前触发-统一处理参数
// instance.interceptors.request.use(() => {}, () => {}) // 请求拦截器
// 响应数据之后触发- axios默认加了一层data
// instance.interceptors.response.use(() => {}, () => {}) // 响应拦截器

export default instance