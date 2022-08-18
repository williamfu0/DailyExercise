<template>
  <div class="cart-goods-item">
    <div class="left">
      <div class="custom-control custom-checkbox">
        <input
          type="checkbox"
          class="custom-control-input"
          :id="`input_${item.id}`"
          :checked="item.goods_state"
          @change="changeChecked"
        />
        <label class="custom-control-label" :for="`input_${item.id}`">
          <img :src="item.goods_img" alt="" />
        </label>
      </div>
    </div>
    <div class="right">
      <div class="top">{{ item.goods_name }}</div>
      <div class="bottom">
        <span class="price">¥ {{ item.goods_price }}</span>
        <span>{{ item.goods_count }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
  methods: {
    changeChecked(event) {
      this.$emit("updateChecked", this.item.id, event.target.checked);
    },
  },
};
</script>

<style>
.custom-control-label {
  margin-left: 10px;
}
.cart-goods-item {
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}
.cart-goods-item .left img {
  width: 120px;
  height: 120px;
  margin-right: 8px;
  border-radius: 10px;
}
.cart-goods-item .left .custom-control-label::before,
.cart-goods-item .left .custom-control-label::after {
  top: 50px;
}
.cart-goods-item .right {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.cart-goods-item .right .bottom {
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
}
.cart-goods-item .right .bottom .price {
  color: red;
  font-weight: bold;
}
</style>