<template>
  <div class="goods-list">
    <div class="goods-item" v-for="item in list" :key="item.id" @click="goDetaile(item.id)">
      <img :src="item.img_url" alt>
      <h1 class="title">{{ item.title }}</h1>
      <div class="info">
        <p class="price">
          <span class="now">&yen;{{ item.sell_price }}</span>
          <span class="old">&yen;{{ item.sell_price }}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{ item.stock_quantity }}件</span>
        </p>
      </div>
    </div>
    <mt-button type="danger" plain size="large" @click="getMore">加载更多</mt-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pageIndex: 1, //默认显示第一页
      list: [] //所有数据
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.$http.get(`api/getgoods?pageindex=${this.pageIndex}`).then(res => {
        // console.log(res);
        if (res.body.status == 0) {
          this.list = [...this.list, ...res.body.message];
        }
      });
    },
    getMore() {
      this.pageIndex++;
      this.getList();
    },
    goDetaile(id) {
      //第一种玩法 字符串的方式
      // this.$router.push("/home/goodsinfo/" + id);
      //第二种 写一个对象
      // this.$router.push({ path: "/home/goodsinfo/" + id });
      //第三种 ,命名路由
      this.$router.push({ name: "GoodsInfo", params: { id } });
    }
  }
};
</script>
<style lang="scss" scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  padding: 7px;
  justify-content: space-between;
}
.goods-item {
  width: 49%;
  border: 1px solid #ccc;
  box-shadow: 0 0 8px #ccc;
  margin: 4px 0;
  padding: 2px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 229px;
  img {
    width: 100%;
  }
  .title {
    font-size: 14px;
  }
  .info {
    background: #eee;
    p {
      margin: 0;
      padding: 5px;
      .now {
        color: red;
        font-weight: bold;
        font-size: 16px;
      }
      .old {
        text-decoration: line-through;
      }
    }
  }
}
</style>