var str = "YeChan";
var buf = Buffer.from(str);
console.log(buf);

//创建一个10字节的buffer
var buf2 = Buffer.alloc(10);
buf2[0]=0xaa;
console.log(buf2);

var buf = Buffer.from("我是一个缓冲区");
console.log(buf.toString());