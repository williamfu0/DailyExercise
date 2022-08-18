import request from '@/utils/request'


export function hotwords(params) {

    return request({
        params, // 地址
        url: '/search/hot'
    })

}
export function searchsong(params) {

    return request({
        params, // 地址
        url: '/cloudsearch'
    })

}
