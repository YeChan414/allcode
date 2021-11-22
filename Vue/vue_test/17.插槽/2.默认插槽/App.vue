<template>
 <div class="container">
    <Category title="美食">
        <!-- 组件标签中的东西会被解析，然后放入插槽中 -->
        <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg">
    </Category>
    <Category title="游戏">
        <ul>
            <li v-for="(item,index) in games" :key="index">{{item}}</li>
        </ul>
    </Category>
    <Category title="电影">
        <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
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
.container{
    display: flex;
    justify-content: space-between;
}
img{
    width:100%
}
video{
    width:100%
}
</style>