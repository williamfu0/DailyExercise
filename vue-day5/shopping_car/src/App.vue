<template>
  <div id="app">
    <CartHeaderVue></CartHeaderVue>
    <GoodItemVue
      v-for="item in list"
      :key="item.id"
      :item="item"
      @updateChecked="updateChecked"
    ></GoodItemVue>
    <CartFooterVue></CartFooterVue>
  </div>
</template>

<script>
import CartFooterVue from "./components/CartFooter.vue";
import CartHeaderVue from "./components/CartHeader.vue";
import GoodItemVue from "./components/GoodItem.vue";
import axios from "axios";

export default {
  data() {
    return {
      list: [],
    };
  },
  components: {
    CartFooterVue,
    CartHeaderVue,
    GoodItemVue,
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      axios.get("/goodsList").then(({ data }) => {
        this.list = data;
      });
    },
    updateChecked(id, goods_state) {
      this.list = this.list.map((item) => {
        if (item.id == id) {
          console.log(id);
          item.goods_state = goods_state;
        }
        return item;
      });
    },
  },
};
</script>

<style>
#app {
  padding-top: 50px;
  padding-bottom: 50px;
}
</style>