//在node中，只有模块作用域，要想使用其他模块内部的东西，需要导出
var exports = require("./b");
console.log(exports.info);
console.log(exports.add(10,20));