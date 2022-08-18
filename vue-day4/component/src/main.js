import Vue from 'vue'

import App from './App.vue'

import Pannel from './components/xinlang';
Vue.component("xinlang", Pannel)
Vue.config.productionTip = false



new Vue({
  render: h => h(App),
}).$mount('#app')
