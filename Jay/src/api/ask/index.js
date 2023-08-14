import request from '../request'

// 获取友链数据
function getFriendsChain () {
    return request({
        method:'get',
        url:'/index/getFriendsChain'
    })
}

// 获取推荐文章数据
function getArticle () {
    return request({
        method:'get',
        url:'/index/getArticle'
    })
}

// 通过搜索关键词获取数据
function getArticleBySearch (keyword,page) {
    return request({
        method:'get',
        url:`/index/getArticleBySearch/${keyword}/${page}`
    })
}

// 获取密钥
function getKeys(){
    return request({
        method:'get',
        url:'/index/getKeys'
    })
}

export default {
    getFriendsChain,
    getArticle,
    getArticleBySearch,
    getKeys
}