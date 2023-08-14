import request from '../request'

// 获取音乐列表
function getRecommendData(page){
    if(page){
        return request({
            method:'get',
            url:`/recommend/getRecommend/${page}`
        })
    }else{
        return request({
            method:'get',
            url:`/recommend/getRecommend`
        })
    }
}

// 点赞
function like(id,if_like){
    return request({
        method:'post',
        url:`/recommend/like?id=${id}&if_like=${if_like}`
    })
}

// 获取文章数据 通过id
function getRecommendDataById(id){
    return request({
        method:'get',
        url:`/recommend/getRecommendDataById/${id}`
    })
}

// 通过文章id获取文章数据
function getRecommendDataIsId(id){
    return request({
        method:'get',
        url:`/recommend/getRecommendDataIsId/${id}`
    })
}

// 获取点赞总数
function getTotalLikes(id){
    return request({
        method:'get',
        url:`/recommend/getTotalLikes/${id}`
    })
}

// 获取分享总数
function getTotalShare(id){
    return request({
        method:'get',
        url:`/recommend/getTotalShare/${id}`
    })
}

// 获取文章总数
function getTotalArticle(id){
    return request({
        method:'get',
        url:`/recommend/getTotalArticle/${id}`
    })
}

// 根据id获取用户基本数据
function getRecommendUserInfoById(id){
    return request({
        method:'get',
        url:`/recommend/getUserInfoById/${id}`
    })
}

export default {
    getRecommendData,
    like,
    getRecommendDataById,
    getRecommendDataIsId,
    getTotalLikes,
    getTotalArticle,
    getTotalShare,
    getRecommendUserInfoById
}