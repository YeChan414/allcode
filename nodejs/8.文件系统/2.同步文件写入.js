//同步文件写入

//核心模块
var fs = require("fs");

//1.打开文件  fs.openSync(文件路径，操作类型)  r表示只读，w表示可写入
var fd = fs.openSync("test.txt","w");

//2.写内容  fs.writeSync(文件描述符，内容，[写入的起始位置])
fs.writeSync(fd,"今天天气真不错");

//3.关闭文件  fs.closeSync(文件描述符)
fs.closeSync(fd);

