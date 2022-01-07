//配置路由
import Vue from "vue"
import VueRouter from "vue-router"
//使用插件
Vue.use(VueRouter)
//引入路由组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
//配置路由
export default new VueRouter({
routes: [
    {
        //网页url的路径
        path:"/home",//不区分大小写
        component:Home,
        //路由元信息
        meta:{
            //设定当前路由是否显示某些东西
            show:true
        }
    },
    {
        path:'/search/:inputText',
        component:Search,
        meta:{
            show:true
        },
        name:'search'
    },
    {
        path:'/Login',
        component:Login,
        meta:{
            show:false
        }
    },
    {
        path:'/register',
        component:Register,
        meta:{
            show:false
        }
    },
    {
        path:'/detail/:skuid',
        component:Detail,
        meta:{
            show:false
        }
    },
//重定向
{
    path:'*',
    redirect:'/home'
}
],
scrollBehavior(to,from,savedPositon){
    //y=0代表最上方
    return{y:0}
}
})