<template>
  <div id="app">
    <xinlang></xinlang>
    <hell></hell>
    <XinLang></XinLang>
    <xin-lang> </xin-lang>
    <!-- <HelloWorldVue> </HelloWorldVue> -->
  </div>
</template>

<script>
import hell from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    hell,
  },
};
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
