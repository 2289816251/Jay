// 引导页路由
const express = require('express')

const router = express.Router()

// 引入专辑数据
const theAlbum = require('../JSON/theAlbum.json')

// 获取专辑数据
router.get('/getTheAlbumData',(req,res)=>{
    res.send({
        code:200,
        data:theAlbum
    })
})
module.exports = router