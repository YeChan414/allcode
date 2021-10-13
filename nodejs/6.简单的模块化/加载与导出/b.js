//向外部暴露变量和方法
exports.info = "导出b.js的数据";
exports.add = function(x,y){
    return x+y;
}