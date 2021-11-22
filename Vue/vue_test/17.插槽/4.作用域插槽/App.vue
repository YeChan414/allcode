<template>
 <div class="container">
    <Category title="游戏">
        <template scope="chenyi">   <!-- 用的时候必须用template包裹 
                                        随便起名chenyi，chenyi收到了data里面的games-->
            <ul>
                <li v-for="(item,index) in chenyi.games" :key="index">{{item}}</li>
            </ul>
        </template>
    </Category>
    <Category title="游戏">
        <template scope="chenyi">   <!-- 用的时候必须用template包裹 
                                        chenyi收到了data里面的games-->
            <ol>
                <li v-for="(item,index) in chenyi.games" :key="index">{{item}}</li>
            </ol>
        </template>
    </Category>
    <Category title="游戏">
        <template scope="chenyi">   <!-- 用的时候必须用template包裹 
                                        chenyi收到了data里面的games-->
                <h4 v-for="(item,index) in chenyi.games" :key="index">{{item}}</h4>
        </template>
    </Category>
 </div>
</template>

<script>
import Category from './components/Category.vue'
export default {
    name:'App',
    components:{
        Category
    }
}
</script>

<style>
.container{
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