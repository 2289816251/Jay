// 引入 Express
const express = require('express')

// 引入 Cors
const cors = require('cors')

// 创建app
const app = express()

// 配置跨域
app.use(cors)

// 监听窗口
app.listen(8080,()=>{
    console.log('服务器启动中 地址：http://127.0.0.1:8000')
})