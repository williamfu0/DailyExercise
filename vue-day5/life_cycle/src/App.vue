<template>
  <div>
    <button @click="show = !show">显示/隐藏</button>
    <TimerCount v-if="show"></TimerCount>
  </div>
</template>

<script>
import TimerCount from "./components/TimerCount.vue";

export default {
  components: {
    TimerCount,
  },
  data() {
    return {
      show: true,
    };
  },
};
</script>

<style>
</style>