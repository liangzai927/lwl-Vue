<template>
  <div>
    <h3>当前数量为:{{ count }}</h3>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    count: function() {
      return this.$store.state.count;
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
