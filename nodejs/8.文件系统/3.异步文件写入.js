var fs = require("fs");
//打开文件，异步文件一定没有返回值，一定要有回调函数
fs.open("test2.txt","w",function(err,fd){
    if(!err){
        //写入内容
        fs.write(fd,"今天天气也很不错",function(err){
            if(!err){
                console.log("文件写入成功");
            }

            //关闭文件
            fs.close(fd,function(err){
                if(!err){
                    console.log("文件已关闭");
                }
            })
        })
    }
})