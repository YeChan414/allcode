var fs = require("fs");
//创建可写流
var ws = fs.createWriteStream("test3.txt");

//监听流的打开
ws.on("open",function(){
    console.log("流打开了");
})

//写入文件
ws.write("锄禾日当午");
ws.write("汗滴禾下土");

//流的关闭
ws.end();