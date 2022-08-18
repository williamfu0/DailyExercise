<template>
  <div id="app">
<h1 @click="toColor" :style="{color:color}">hello</h1>

  </div>
</template>

<script>
//v-for v-if 的使用 
export default {
  data() {
    return {
      arr: ['yellow', 'red', 'black', 'green'],
      color:''
  }
  },
  methods: {
    toColor() {
      this.color = this.arr[~~(Math.random() * this.arr.length)]
      console.log(this.color);
}
    }
  }



</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.show{
  color: red;

}
</style>
