import request from '../request'

function getToolClass(){
    return request({
        method:'get',
        url:`/toolSharing/getToolClass`
    })
}

function getToolData(){
    return request({
        method:'get',
        url:`/toolSharing/getToolData`
    })
}

export default {
    getToolClass,
    getToolData
}