<template>
  <div>
    <input type="button" value="减少" @click="remove">
    <input type="button" value="增加" @click="add">
    <br>
    <input type="text" v-model="$store.state.count">
  </div>
</template>

<script>
//按需引入 mapMutations

export default {
  data() {
    return {};
  },
  methods: {
    add() {
      this.$store.commit("increment", { a: 2, b: 3 });
    },
    remove() {
      this.$store.commit("decrament");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
