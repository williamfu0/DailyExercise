<template>
  <div class="cart-footer">
    <div class="custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input" id="footerCheck" />
      <label class="custom-control-label" htmlFor="footerCheck"> 全选 </label>
    </div>
    <div>
      <span>合计:</span>
      <span class="price">¥ 100</span>
    </div>
    <button type="button" class="footer-btn btn btn-primary">结算 (0)</button>
  </div>
</template>

<script>
export default {};
</script>

<style>
.cart-footer {
  z-index: 999;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  background: #fff;
}
.cart-footer .price {
  color: red;
  font-weight: bold;
  font-size: 15px;
}
.cart-footer .footer-btn {
  min-width: 80px;
  height: 30px;
  line-height: 24px;
  border-radius: 25px;
  padding: 0;
}
</style>