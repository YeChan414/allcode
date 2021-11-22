<template>
 <div class="container">
    <Category title="美食">
        <!-- slot属性指明要插入的插槽名称 -->
        <img slot="center" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg">
        <a slot="footer" href="javascript:;" style="color:black">查看更多美食</a>
    </Category>
    <Category title="游戏">
        <ul slot="center">
            <li v-for="(item,index) in games" :key="index">{{item}}</li>
        </ul>
        <div class="foot" slot="footer">
            <a href="javascript:;" style="color:black">单机游戏</a>
            <a href="javascript:;" style="color:black">网络游戏</a>
        </div>
    </Category>
    <Category title="电影">
        <video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
        <div class="foot" slot="footer">
            <a href="javascript:;" style="color:black">经典</a>
            <a href="javascript:;" style="color:black">热门</a>
            <a href="javascript:;" style="color:black">推荐</a>
        </div>
        <h4 class="foot" slot="footer">欢迎观影</h4>
    </Category>
 </div>
</template>

<script>
import Category from './components/Category.vue'
export default {
    name:'App',
    components:{
        Category
    },
    data(){
        return{
            foods:['烧烤','火锅','小龙虾','牛排'],
            games:['红警','穿越火线','超级玛丽','劲舞团'],
            films:['《七月与安生》','《拆弹专家》','《盗梦空间》','《怦然心动》']
        }
        
    }
}
</script>

<style>
.container,.foot{
    display: flex;
    justify-content: space-around;
}
img{
    width:100%
}
video{
    width:100%
}
</style>