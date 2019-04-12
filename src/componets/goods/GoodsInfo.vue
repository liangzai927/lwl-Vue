<template>
  <div class="goodsinfo-container">
    <!-- 动画小球 -->
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div class="ball" v-show="ballFlag" ref="ball"></div>
    </transition>

    <!-- 商品轮播图区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swiper :list="list" :isfull="false"></swiper>
        </div>
      </div>
    </div>

    <!-- 商品购买区域 -->
    <div class="mui-card">
      <div class="mui-card-header">{{ goodsinfo.title }}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价：
            <del>&yen;{{ goodsinfo.market_price }}</del>&nbsp;&nbsp;销售价：
            <span class="now_price">&yen; {{ goodsinfo.sell_price }}</span>
          </p>
          <p>
            购买数量：
            <number-box @sendData="sendData" :max="goodsinfo.stock_quantity"></number-box>
          </p>

          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>

    <!-- 商品参数区域 -->
    <div class="mui-card">
      <div class="mui-card">
        <div class="mui-card-header">商品参数</div>
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <p>商品货号： {{ goodsinfo.goods_no }}</p>
            <p>库存情况：{{ goodsinfo.stock_quantity }}件</p>
            <p>上架时间：{{ goodsinfo.add_time | dateFormat('YYYY-MM-DD')}}</p>
          </div>
        </div>
        <div class="mui-card-footer">
          <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
          <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
        </div>
      </div>
      <!-- <div class="mui-card-footer">页脚</div> -->
    </div>
  </div>
</template>
<script>
import swiper from "../subcomponets/Swiper.vue";
import NumberBox from "../subcomponets/goodsinfo_number.vue";

export default {
  data() {
    return {
      id: this.$route.params.id,
      list: [],
      goodsinfo: {},
      ballFlag: false, //小球标识符
      selectData: 1
    };
  },
  created() {
    this.getLunbo();
    this.getGoodsInfo();
  },
  methods: {
    getLunbo() {
      this.$http.get(`api/getthumimages/${this.id}`).then(res => {
        if (res.body.status == 0) {
          res.body.message.forEach(item => {
            item.img = item.src;
          });
          this.list = res.body.message;
        }
      });
    },
    getGoodsInfo() {
      this.$http.get(`api/goods/getinfo/${this.id}`).then(res => {
        // console.log(res.body);
        if (res.body.status == 0) {
          this.goodsinfo = res.body.message[0];
        }
      });
    },
    goDesc(id) {
      this.$router.push({ name: "goodsDesc", params: { id } });
    },
    goComment(id) {
      this.$router.push({ name: "GoodsComment", params: { id } });
    },
    addToShopCar() {
      this.ballFlag = !this.ballFlag;
      //拼接一个对象
      const obj = {
        id: this.id,
        count: this.selectData,
        price: this.goodsinfo.sell_price,
        selected: true
      };
      //调用mutations中的方法 讲拼接的对象传给state
      this.$store.commit("addCar", obj);
    },
    beforeEnter(el) {
      el.style.transform = "translate(0,0)";
    },
    enter(el, done) {
      el.offsetWidth;

      //解决小球兼容性问题
      const ballPosition = this.$refs.ball.getBoundingClientRect();
      const badgePosition = document
        .querySelector("#badge")
        .getBoundingClientRect();
      const x = badgePosition.left - ballPosition.left;
      const y = badgePosition.top - ballPosition.top;

      el.style.transform = `translate(${x}px, ${y}px)`;
      el.style.transition = "all cubic-bezier(.05,.52,.44,1.03) .5s";
      done();
    },
    afterEnter() {
      this.ballFlag = !this.ballFlag;
    },
    sendData(data) {
      // console.log("父组件" + data);
      this.selectData = data;
    }
  },
  components: {
    swiper,
    NumberBox
  }
};
</script>
<style lang="scss" scoped>
.goodsinfo-container {
  background-color: #eee;
  overflow: hidden;
  .now_price {
    color: red;
    font-size: 16px;
    font-weight: bold;
  }
}
.mui-card-footer {
  display: block;
  button {
    margin: 15px 0;
  }
}
.ball {
  position: absolute;
  z-index: 999;
  top: 390px;
  left: 152px;
  width: 15px;
  height: 15px;
  background-color: #f00;
  border-radius: 50%;
  // transform: translate(86px, 331px);
}
</style>

<style lang="scss">
// .mint-swipe-item {
//   -webkit-backface-visibility: hidden;
//   backface-visibility: hidden;
// }
// div {
//   -webkit-transform: translate3d(0, 0, 0);
//   transform: translate3d(0, 0, 0);
// }
</style>