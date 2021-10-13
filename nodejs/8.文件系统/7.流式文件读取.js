var fs = require("fs");
//创建可读流
var rs = fs.createReadStream("test3.txt");
rs.once("open",function(){
    console.log("可读流打开了");
})
rs.once("close",function(){
    console.log("可读流关闭了");
})

//要读取可读流中的数据，必须绑定一个data事件，data事件绑定完毕，它会自动开始读取数据
rs.on("data",function(data){
    console.log(data);
})