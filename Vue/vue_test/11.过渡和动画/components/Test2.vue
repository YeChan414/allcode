<template>
  <div style="width:600px">
      <button @click="isShow = !isShow">显示/隐藏</button>
      <!-- Vue中的动画用transition标签包裹 -->
      <transition appear>  <!-- 让一开始就有动画 -->
      <h1 v-show="isShow">你好啊！</h1>
      </transition>
  </div>
</template>

<script>
export default {
    name:'Test2',
    data(){
        return {
            isShow:true
        }
    }
}
</script>

<style scoped>
    h1{
        background-color: blueviolet;
    }
    /* 进入的起点，离开的终点 */
    .v-enter,.v-leave-to{
        transform: translateX(-100%);
    }
    /* 进入的过程和离开的过程 */
    .v-enter-active,.v-leave-active{
        transition: 2s;
    }
    /* 进入的终点和离开的起点 */
    .v-enter-to,.v-leave{
        transform: translateX(0);
    }
</style>