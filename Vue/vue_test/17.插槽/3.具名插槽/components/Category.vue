<template>
    <div class="category">
        <h3>{{title}}分类</h3>
        <slot name="center"></slot>   <!-- 插槽，让浏览器知道组件标签里面的东西放在哪里 -->
        <slot name="footer"></slot>   <!-- name属性给插槽起名 -->
    </div>
</template>

<script>
export default {
    name:'Category',
    props:['title']
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