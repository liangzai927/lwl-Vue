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
import GoodsList from './componets/goods/GoodsList.vue'
import GoodsInfo from './componets/goods/GoodsInfo.vue'
import GoodsComment from './componets/goods/goodsComment.vue'
import goodsDesc from './componets/goods/goodsDesc.vue'

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
    { path: '/home/Photoinfo/:id', component: Photoinfo },
    { path: '/home/goodslist', component: GoodsList },
    { path: '/home/goodsinfo/:id', component: GoodsInfo, name: 'GoodsInfo' },
    { path: '/home/goodscomment/:id', component: GoodsComment, name: 'GoodsComment' },
    { path: '/home/goodsdesc/:id', component: goodsDesc, name: 'goodsDesc' }

  ],
  linkActiveClass: 'mui-active'//覆盖默认高亮的类
})

export default router 