<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
    name:'About',
    //通过路由规则，进入该组件时被调用
    beforeRouteEnter (to, from, next) {
      if(to.meta.isAuth){  
        //在浏览器的本地存储中取出存好的数据进行对比
        if(localStorage.getItem('name')==='YeChan'){
            next()
        }
        else{
            alert("姓名不对")
        }
    }
    else next()
    },
    //通过路由规则，离开该组件时被调用
    beforeRouteLeave (to, from, next) {
      next()
    }
}
</script>

<style>

</style>