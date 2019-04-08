//入口文件
import Vue from 'vue'

//引入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//导入自己的路由模块
import router from './router.js'

//引入app 
import app from './App.vue'

//导入mui
import './lib/mui/css/mui.min.css'

//导入mui样式
import './lib/mui/css/icons-extra.css'

//导入mint-ui组件'
import { Header } from 'mint-ui'
Vue.component(Header.name, Header);

//引入swiper
import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//引入resource
import VueResource from 'vue-resource'
//安装resource
Vue.use(VueResource)

//创建vm实例
var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router
})