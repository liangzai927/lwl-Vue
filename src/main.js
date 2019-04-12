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

//安装vue-preview插件
import Vuepreview from 'vue-preview'
Vue.use(Vuepreview)

//导入mint-ui组件'
// import { Header, Swipe, SwipeItem, Button, lazyload } from 'mint-ui'
// Vue.component(Header.name, Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
// Vue.use(lazyload)
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

//引入resource
import VueResource from 'vue-resource'
//安装resource
Vue.use(VueResource)

//设置请求根路径
Vue.http.options.root = 'http://www.liulongbin.top:3005'

//引入格式化事件插件
import moment from 'moment'

//定义全局过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
})

//引入vuex
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    //用一个空数组接收
    car: []
  },
  mutations: {
    //定义一个方法改变car内容
    addCar: function (state, obj) {
      // console.log(obj)
      var flag = false
      state.car.some(item => {
        if (item.id == obj.id) {
          item.count += parseInt(obj.count)
          flag = true
          return true
        }
      })
      if (!flag) {
        state.car.push(obj)
      }
    }
  },
  getters: {
    total(state) {
      var sum = 0
      state.car.forEach(item => {
        sum += parseInt(item.count)
      })
      console.log(sum)
      return sum
    }
  },
  actions: {}
})


//创建vm实例
var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router,
  store
})