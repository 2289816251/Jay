// 引入 Express
const express = require('express')

// 引入 Cors
const cors = require('cors')

// 创建app
const app = express()

// 配置跨域
app.use(cors())
// 定义错我中间件
app.use((req,res,next)=>{
    // code 默认为201
    // err 错误信息
    res.error = (err,code = 201) =>{
        res.send({
            code,
            msg:err
        })
    }
    next()
})

// 引入路由
const index = require('./router/index')
const guide = require('./router/guide')
// 配置路由
app.use('/index',index) // 其他路由
app.use('/guide',guide) // 引导页路由

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

// 监听窗口
app.listen(8080,()=>{
    console.log('服务器启动中 地址：http://127.0.0.1:8080')
})