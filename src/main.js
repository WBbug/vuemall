import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store  from '@/store'
import 'swiper/css/swiper.css'

//引入mockjs进行
import '@/mock/mockServe'
//三级联动组件--全局组件 导入
import TypeNav from '@/components/TypeNav'
//三级联动组件--全局组件 注册
Vue.component(TypeNav.name,TypeNav)
import Pagenation from '@/components/Pagenation'
Vue.component(Pagenation.name,Pagenation)


import mySwiper from '@/components/mySwiper'
Vue.component(mySwiper.name,mySwiper)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
