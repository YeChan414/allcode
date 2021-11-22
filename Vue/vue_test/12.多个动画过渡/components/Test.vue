<template>
  <div style="width:600px">
      <button @click="isShow = !isShow">显示/隐藏</button>
      <!-- Vue中的动画用transition标签包裹 -->
      <!-- 要让多个元素过渡，就得加-group -->
      <transition-group appear>  <!-- appear让一开始就有动画 -->
      <h1 v-show="isShow" key="1">你好啊！</h1>
      <h1 v-show="isShow" key="2">YeChan</h1>
      </transition-group>
  </div>
</template>

<script>
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
    /* 类名必须这么写 */
    /* v是transition的名字，如果设置了name，就用name，没给transition设置name，就写v */
    .v-enter-active{
        animation: move 1s;
    }
    .v-leave-active{
        animation:move 1s reverse
    }
    @keyframes move {
        from{
            transform: translateX(-100%);
        }
        to{
            transform:translateX(0px)
        }
    }
</style>