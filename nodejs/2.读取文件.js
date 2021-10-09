//fs是文件系统的缩写，在node中需要对文件进行操作，就必须引入fs

//1.使用require方法加载fs核心模块
var fs = require("fs");

//2.读取文件
//第一个参数是文件路径，第二个参数是一个回调函数
//读取成功data是数据，error是null；读取失败error是错误对象，data是null
fs.readFile("./hello.txt",function(error,data){
    console.log(data.toString());
})