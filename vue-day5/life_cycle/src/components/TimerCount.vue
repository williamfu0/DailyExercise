<template>
  <div>
    <h1>{{ count }}</h1>
  </div>
</template>

<script>
export default {
  name: "TimerCount",
  data() {
    return {
      count: 60,
    };
  },
  created() {
    console.log("created 执行中0");
    this.flag = setInterval(() => {
      this.count--;
    }, 1000);
  },
  mounted() {
    console.log("mounted 执行1");
  },
  updated() {
    console.log("updated 执行2");
  },
  beforeDestroy() {
    console.log("beforeDestroy 执行3");
    clearInterval(this.flag);
  },
};
</script>

<style>
</style>