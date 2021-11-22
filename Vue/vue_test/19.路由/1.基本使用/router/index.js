import VueRouter from "vue-router";
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'

//创建并暴露一个路由器
export default new VueRouter({
    routes:[
        {
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home
        }
    ]
})