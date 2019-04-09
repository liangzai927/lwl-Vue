<template>
  <div>
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            v-for="item in cates"
            :key="item.id"
            :class="{'mui-active':item.id==0}"
            class="mui-control-item"
            href="#item1mobile"
            data-wid="tab-top-subpage-1.html"
            @click="getPhotoListByCateId(item.id)"
          >{{ item.title }}</a>
        </div>
      </div>
    </div>
    <!-- 图片列表 -->
    <ul class="list">
      <router-link tag="li" :to="'/home/photoinfo/'+item.id" v-for="item in list" :key="item.id">
        <img v-lazy="item.img_url">
        <p class="info" v-html="item.seo_description"></p>
      </router-link>
    </ul>
  </div>
</template>
<script>
import mui from "../../lib/mui/js/mui.min.js";

export default {
  data() {
    return {
      cates: [], //所有分类列表数据
      list: [] //图片列表数据
    };
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005
    });
  },
  created() {
    this.getAllCategory();
    this.getPhotoListByCateId(0);
  },
  methods: {
    getAllCategory() {
      //获取所有图片
      this.$http.get("api/getimgcategory").then(res => {
        // console.log(res.body);
        if (res.body.status == 0) {
          res.body.message.unshift({ title: "全部", id: 0 });
          this.cates = res.body.message;
        }
      });
    },
    getPhotoListByCateId(cateid) {
      this.$http.get(`api/getimages/${cateid}`).then(res => {
        if (res.body.status == 0) {
          this.list = res.body.message;
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.list {
  padding: 0;
  background: gray;
  list-style: none;

  img[lazy="loading"] {
    width: 40px;
    height: 300px;
    margin: auto;
  }
  li {
    position: relative;

    img {
      width: 100%;
    }
    .info {
      position: absolute;
      bottom: 0;
      background: rgba(0, 0, 0, 0.4);
    }
  }
}
</style>