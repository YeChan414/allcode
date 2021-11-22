<template>
 <div class="container">
    <Category title="美食" :dataList="foods"></Category>
    <Category title="游戏" :dataList="games"></Category>
    <Category title="电影" :dataList="films"></Category>
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
</style>