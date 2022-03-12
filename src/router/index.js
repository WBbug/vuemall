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
// router.beforeEach(async (to,from,next)=>{

// let token = store.state.user.token
// let name = store.state.user.userInfo.name

// if(token){
//     if(to.path === '/login'||to.path === '/register'){
//         next('/home')
//     }else{
//         if(name){next()}
//         else{
//            try {
//            await store.dispatch('getUserInfo')
//             next()
//         } catch (error) {
//                await store.dispatch('userLogout')
//                next('/login')
//            }
//         }
        
//     }
// }else{
// //未登录
// next()    
// }
// })
router.beforeEach(async (to, from, next) => {
    //to:获取到要跳转到的路由信息
    //from：获取到从哪个路由跳转过来来的信息
    //next: next() 放行  next(path) 放行  
    //方便测试 统一放行
   //  next();
   //获取仓库中的token-----可以确定用户是登录了
    let token  = store.state.user.token;
    let name = store.state.user.userInfo.name;
    //用户登录了
    if(token){
      //已经登录而且还想去登录------不行
      if(to.path=="/login"||to.path=='/register'){
         next('/');
      }else{
        //已经登陆了,访问的是非登录与注册
        //登录了且拥有用户信息放行
        if(name){
          next();
        }else{
          //登陆了且没有用户信息
          //在路由跳转之前获取用户信息且放行
          try {
           await store.dispatch('getUserInfo');
           next();
          } catch (error) {
            //token失效从新登录
            await store.dispatch('userLogout');
            next('/login')
          }
        }
      }
    }else{
       //未登录：不能去交易相关、不能去支付相关【pay|paysuccess】、不能去个人中心
       //未登录去上面这些路由-----登录
       let toPath = to.path;
       if(toPath.indexOf('/trade')!=-1 || toPath.indexOf('/pay')!=-1||toPath.indexOf('/center')!=-1){
         //把未登录的时候向去而没有去成的信息，存储于地址栏中【路由】
         next('/login?redirect='+toPath);
       }else{
          //去的不是上面这些路由（home|search|shopCart）---放行
          next();
       }
     
    }
 });


export default router
