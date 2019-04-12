<template>
  <div class="mui-numbox" data-numbox-min="1" :data-numbox-max="max">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="test" class="mui-input-numbox" type="number" value="1" @change="getNum" ref="sumBox">
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>
<script>
import mui from "../../lib/mui/js/mui.min.js";

export default {
  name: "goodsinfo_number",
  props: ["max"],
  watch: {
    max: function(newValue, oldValue) {
      mui(".mui-numbox")
        .numbox()
        .setOption("max", parseInt(newValue));
    }
  },
  data() {
    return {};
  },
  mounted() {
    mui(".mui-numbox").numbox();
  },
  methods: {
    getNum() {
      // console.log(this.$refs.sumBox.value);
      this.$emit("sendData", parseInt(this.$refs.sumBox.value));
    }
  }
};
</script>
<style lang="scss" scoped>
</style>