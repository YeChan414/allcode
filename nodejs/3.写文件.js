var fs = require("fs");
fs.writeFile("./你好.txt","大家好，我是nodejs",function(error){
    console.log("文件写入成功");
})