<template>
  <div class="newsinfo-container">
    <h3 class="title">{{ newsinfo.title }}</h3>
    <p class="subtitle">
      <span>发表时间：{{ newsinfo.add_time }}</span>
      <span>点击：{{ newsinfo.click }} 次</span>
    </p>
    <div class="content" v-html="newsinfo.content"></div>
    <comment-box :id="id"></comment-box>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
import comment from "../subcomponets/Comment.vue"; //引入组件
export default {
  data() {
    return {
      id: this.$route.params.id, //url中传的id值
      newsinfo: {} //新闻对象
    };
  },
  created() {
    this.getNewInfo();
  },
  methods: {
    getNewInfo() {
      this.$http.get("api/getnew/" + this.id).then(res => {
        // console.log(res.body);
        if (res.body.status == 0) {
          this.newsinfo = res.body.message[0];
        } else {
          Toase("获取新闻失败");
        }
      });
    }
  },
  components: {
    "comment-box": comment
  }
};
</script>
<style lang="scss" scoped>
.newsinfo-container {
  padding: 0 4px;
  .title {
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: red;
  }
  .subtitle {
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
}
</style>