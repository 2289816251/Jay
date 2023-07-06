// 引入 Express
const express = require('express')

// 引入 Cors
const cors = require('cors')

// 创建app
const app = express()

// 配置跨域
app.use(cors)

// 引入路由
const index = require('./router/index')

// 配置路由
app.use('/index',index)

// 监听窗口
app.listen(8080,()=>{
    console.log('服务器启动中 地址：http://127.0.0.1:8000')
})