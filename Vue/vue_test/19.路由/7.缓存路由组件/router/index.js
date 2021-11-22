import VueRouter from "vue-router";
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Message from '../pages/Message.vue'
import News from '../pages/News.vue'
import Detail from '../pages/Detail.vue'

//创建并暴露一个路由器
export default new VueRouter({
    routes:[
        {
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home,
            children:[
                {
                    path:'message',  //子路由不需要写/
                    component:Message,
                    children:[{
                        path:'detail',
                        component:Detail,
                        props($route){
                            return {id:$route.query.id,title:$route.query.title}
                        }
                    }]
                },
                {
                    path:'news',
                    component:News
                }
            ]
        }
    ]
})