import { createServer } from "http";
var server = createServer();
//request 请求对象 用于接收客户端请求
//response 响应对象 用于发送服务器的响应信息
server.on("request",function(request,response){
    console.log("收到了客户端的请求，发送请求的路径是："+request.url);
    if(request.url == "/register"){
        //设置响应编码
        response.setHeader("Content-Type","text/plain;charset=utf-8");
        //response.write()可以给客户端发送响应数据，但是一定要用response.end()结尾
        response.write("注册");
        response.end();
    }
    else if(request.url == "/login"){
        response.setHeader("Content-Type","text/plain;charset=utf-8");
        response.end("登录");  //或者直接用end
    }
    else 
    {  
        response.write("hello");
        response.end();
    }
})
server.listen(8000,function(){
    console.log("服务器启动了");
})