<template>
    <div class="category">
        <h3>{{title}}分类</h3>
        <slot></slot>   <!-- 插槽，让浏览器知道组件标签里面的东西放在哪里 -->
    </div>
</template>

<script>
export default {
    name:'Category',
    props:['dataList','title']
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