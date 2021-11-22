import VueRouter from "vue-router";
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Message from '../pages/Message.vue'
import News from '../pages/News.vue'
import Detail from '../pages/Detail.vue'

//创建并暴露一个路由器
const vuerouter = new VueRouter({
    routes:[
        {
            path:'/about',
            component:About,
            meta:{isAuth:true}
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
                        },
                        
                    }]
                },
                {
                    path:'news',
                    component:News,
                    meta:{isAuth:true},
                    beforeEnter:(to,from,next)=>{  //独享路由守卫，只对news起作用
                        if(to.meta.isAuth){  
                            //在浏览器的本地存储中取出存好的数据进行对比
                            if(localStorage.getItem('name')==='YeChan'){
                                next()
                            }
                            else{
                                alert("姓名不对")
                            }
                        }
                        else next()
                    }
                }
            ]
        }
    ]
})
//全局前置路由守卫，初始化和每一次切换的时候调用
/*vuerouter.beforeEach((to,from,next)=>{
    //if (to.meta.isAuth){  //如果需要鉴权
    if(to.path === '/home/news' || to.path==='/home/message'){  //如果要查看新闻和消息，需要进行验证
        //在浏览器的本地存储中取出存好的数据进行对比
        if(localStorage.getItem('name')==='YeChan'){
            next()
        }
        else{
            alert("姓名不对")
        }
    }
    else next()
})*/


export default vuerouter