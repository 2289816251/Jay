// 引导页路由
const express = require('express')

const router = express.Router()

const guideHander = require('../router_hander/guide')

// 获取通过关键字获取文章数据
// router.get('/getAboutMe',aboutMeHander.getAboutMe)

module.exports = router