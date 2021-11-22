<template>
    <div class="category">
        <h3>{{title}}分类</h3>
        <slot :games="games"></slot>  <!-- 这里的意思是将games传给用到插槽的地方 -->
    </div>
</template>

<script>
export default {
    name:'Category',
    props:['title'],
    data(){
        return{
            games:['红警','穿越火线','超级玛丽','劲舞团']
        }
    }
}
</script>

<style>
.category{
    background-color: cornflowerblue;
    width:200px;
    height: 300px;
}
h3{
    text-align: center;
    background-color: orange;
}
</style>