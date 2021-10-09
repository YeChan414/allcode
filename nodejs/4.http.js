//1.加载http模块
var http = require("http");
//2.创建一个web服务器
var server = http.createServer();
//3.收到请求
server.on("request",function(){
    console.log("收到了客户端的请求");
})
//4.启动服务器
server.listen(8000,function(){
    console.log("服务器启动成功");
})