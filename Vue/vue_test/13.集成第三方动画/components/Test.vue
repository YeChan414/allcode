<template>
  <div style="width:600px">
      <button @click="isShow = !isShow">显示/隐藏</button>
      <!-- Vue中的动画用transition标签包裹 -->
      <transition appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__swing"
      enter-leave-class="animate__backOutUp">  <!-- appear让一开始就有动画 -->
      <h1 v-show="isShow">你好啊！</h1>
      </transition>
  </div>
</template>

<script>
import 'animate.css'
export default {
    name:'Test',
    data(){
        return {
            isShow:true
        }
    }
}
</script>

<style scoped>
    h1{
        background-color: cornflowerblue;
    }
</style>