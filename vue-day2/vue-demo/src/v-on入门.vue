<template>
  <div id="app">
  <h1>这是计数:{{count}}</h1>
  <p><button v-on:click="countPlus">+1</button></p>
  <p><button @click="countPlus1">+5</button></p>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return { count: 0 }
  },
  methods: {
    countPlus() {
      this. count++
    },
  countPlus1() {
      this. count=this.count+5
    },
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
</style>
