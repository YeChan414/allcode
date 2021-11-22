<template>
<div>
  <h1>姓名：{{name}}</h1>
  <h1>年龄：{{age}}</h1>
  <button @click="sayHello">说话</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  setup(){
    let name = '张三'
    let age = 18
    
    function sayHello(){
      alert(`我叫${name},我今年${age}岁,你好！`)
    }
    //setup函数必须有返回值，返回一个对象，要不然上面的template中用不了
    return {
      name,age,sayHello
    }
  }
}
</script>
