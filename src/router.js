import VueRouter from 'vue-router'

//导入路由组件
import MemberContainer from './componets/tabvar/MemberContainer.vue'
import HomeContainer from './componets/tabvar/HomeContainer.vue'
import SearchContainer from './componets/tabvar/SearchContainer.vue'
import ShopcarContainer from './componets/tabvar/ShopcarContainer.vue'
import NewLsist from './componets/news/NewsList.vue'
import NewsInfo from './componets/news/NewsInfo.vue'
import PhotoList from './componets/photo/PhotoList.vue'
import Photoinfo from './componets/photo/Photoinfo.vue'

var router = new VueRouter({
  routes: [
    { path: '/home', component: HomeContainer },
    { path: '/', redirect: '/home' },
    { path: '/member', component: MemberContainer },
    { path: '/shopcar', component: ShopcarContainer },
    { path: '/search', component: SearchContainer },
    { path: '/home/newslist', component: NewLsist },
    { path: '/home/newsinfo/:id', component: NewsInfo },
    { path: '/home/photolist', component: PhotoList },
    { path: '/home/Photoinfo/:id', component: Photoinfo }

  ],
  linkActiveClass: 'mui-active'//覆盖默认高亮的类
})

export default router 