// 引入express
const express = require('express')

// 创建app
const app = express()

// 监听窗口
app.listen(8080,()=>{
    console.log('服务器启动中 地址：http://127.0.0.1:8000')
})