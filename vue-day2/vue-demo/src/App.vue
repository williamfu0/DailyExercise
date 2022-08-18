<template>
  <div class="baidu">
   <p> <a :href="baidu" @click="pre">百度</a>  
   <!-- 默认不写执行第一个形参 -->
    <br/>
    <a :href="baidu" :class="font_color" @click="pre($event)">百度</a>
    <!-- $event 是vue事件属性的固定写法 -->
    </p>
   <h2 :class="font_color">{{font_color}}</h2>
      <input type="checkbox"  value="yellow" v-model="font_color"/>黄色
      <input type="checkbox"  value="green" v-model="font_color"/>绿色
      <input type="checkbox"  value="black" v-model="font_color"/>黑色
      <input type="checkbox" value="orange" v-model="font_color">橙色

  </div>
</template>

<script>


export default {
  data() {
    return {
      baidu: 'http://www.baidu.com',
      
      font_color: [],
      
  }
  },
  methods: {
    pre(event) {
   event.preventDefault()
  }
}
}
</script>

<style>
.baidu {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.yellow{
  color: yellow;
}
.green{
  color: green;
}
.black{
  color: black;
}
.orange{
  color: orange;
}
</style>