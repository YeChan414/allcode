//1.使用require方法加载fs核心模块
var fs = require("fs");

//2.读取文件
//第一个参数是文件路径，第二个参数是一个回调函数
//读取成功data是数据，error是null；读取失败error是错误对象，data是null
fs.readFile("test3.txt",function(error,data){
    console.log(data.toString());
})