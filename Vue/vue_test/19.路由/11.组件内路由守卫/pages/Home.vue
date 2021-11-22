<template>
<div>
  <h2>Home组件内容</h2>
        <div>
        <ul class="nav nav-tabs">
            <li>
            <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
            </li>
            <li>
            <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
            </li>
        </ul>
        </div>
        <!-- 设置News组件为缓存路由组件，让输入框中的东西在界面切换走之后仍然存在 -->
        <keep-alive include="News">
            <router-view></router-view>
        </keep-alive>
        
</div>
</template>

<script>
export default {
    name:'Home'
}
</script>

<style>

</style>