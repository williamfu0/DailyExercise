<template>
  <div id="app">
<p><button @click="show=!show" >显示/隐藏</button></p>
<h1 v-if="show">这是一段话</h1>
  </div>
</template>

<script>
//v-if v-show v-for

export default {
  data() {
    return {
    show:true
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
</style>
