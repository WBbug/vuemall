//配置路由
import Vue from "vue"
import VueRouter from "vue-router"
//引入store
import store from '@/store'
//使用插件
Vue.use(VueRouter)
//引入路由组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
//配置路由
let router =  new VueRouter({
routes: [
    {
        //网页url的路径
        path:"/home",//不区分大小写
        component:Home,
        //路由元信息
        meta:{
            //设定当前路由是否显示某些东西(此项目为底部rooter)
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
        },
        name:'login'
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
    //添加到购物车
    {
        path:'/addcart',
        name:'addcart',
        component:AddCartSuccess,
        meta:{
            show:true
        }
    },
    //购物车
    {
        path:'/shopcart',
        component:ShopCart,
        meta:{
            show:true
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
//守卫操作
router.beforeEach((to,from,next)=>{

let token = store.state.user.token
let name = store.state.user.userInfo.name

if(token){
    if(to.path === '/login'||to.path === '/register'){
        next('/home')
    }else{
        if(name){next()}
        else{
           try {
           await store.dispatch('getUserInfo')
            next()
        } catch (error) {
               await store.dispatch('userLogout')
               next('/login')
           }
        }
        
    }
}else{
//未登录
next()    
}
})


export default router
