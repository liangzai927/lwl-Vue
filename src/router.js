import VueRouter from 'vue-router'

//导入路由组件
import MemberContainer from './componets/tabvar/MemberContainer.vue'
import HomeContainer from './componets/tabvar/HomeContainer.vue'
import SearchContainer from './componets/tabvar/SearchContainer.vue'
import ShopcarContainer from './componets/tabvar/ShopcarContainer.vue'

var router = new VueRouter({
  routes: [
    { path: '/home', component: HomeContainer },
    { path: '/', redirect: '/home' },
    { path: '/member', component: MemberContainer },
    { path: '/shopcar', component: ShopcarContainer },
    { path: '/search', component: SearchContainer }

  ],
  linkActiveClass: 'mui-active'//覆盖默认高亮的类
})

export default router 