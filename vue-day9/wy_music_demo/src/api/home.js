import request from '@/utils/request'

export function recommandMusic(params) {

    return request({
        params, // 地址
        url: '/personalized'
    })

}
export function getNewSongList(params) {
    return request({
        params, // 地址
        url: '/personalized/newsong'
    })
}