<template>
  <div class="photoinfo-container">
    <h3>{{ photoinfo.title }}</h3>
    <p class="subtitle">
      <span>发表时间：{{ photoinfo.add_time | dateFormat }}</span>
      <span>点击：{{ photoinfo.click }}次</span>
    </p>
    <hr>
    <!-- 缩略图区域 -->
    <vue-preview :slides="list"></vue-preview>
    <!-- 图片内容区域 -->
    <div class="content"></div>
    <!-- 放置一个现成的评论子组件 -->
    <comment-box :id="id"></comment-box>
  </div>
</template>
<script>
import Commentbox from "../subcomponets/Comment.vue";
export default {
  data() {
    return {
      id: this.$route.params.id, //获取传过来的id
      photoinfo: {}, //图片详情
      list: [] //缩略图
    };
  },
  created() {
    this.getPhotoInfo();
    this.getThumbs();
  },
  methods: {
    getPhotoInfo() {
      console.log(this.id);
      this.$http.get("api/getimageInfo/" + this.id).then(res => {
        // console.log(res.body);
        if (res.body.status == 0) {
          this.photoinfo = res.body.message[0];
        }
      });
    },
    getThumbs() {
      this.$http.get("api/getthumimages/" + this.id).then(res => {
        // console.log(res.body);
        if (res.body.status == 0) {
          res.body.message.forEach(item => {
            item.w = 600;
            item.h = 400;
            item.msrc = item.src;
          });
          this.list = res.body.message;
        }
      });
    }
  },
  components: {
    "comment-box": Commentbox
  }
};
</script>
<style lang="scss" scoped>
.photoinfo-container {
  padding: 3px;
  h3 {
    color: #26a2ff;
    font-size: 15px;
    text-align: center;
    margin: 15px 0;
  }
  .subtitle {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }
  .content {
    font-size: 13px;
    line-height: 30px;
  }
}
</style>
<style lang="scss">
[itemscope="itemscope"] {
  display: flex;
  margin: 0 5px 0;
  figure {
    flex: 1;
    img {
      width: 100%;
    }
  }
}
</style>