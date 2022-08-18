import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/mobile/flexible'
import "@/styles/reset.css"

/* import { recommandMusic as recommendMusicAPI } from '@/api/home'    //测试 详细看素材文档
async function myFn() {
  const res = await recommendMusicAPI({ limit: 6 });
  console.log(res);
}
myFn(); */

Vue.config.productionTip = false
import { Tabbar, TabbarItem, NavBar, Col, Row, Image as VanImage, Cell, Icon, Search } from 'vant';
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(NavBar);
Vue.use(Col);
Vue.use(Row);
Vue.use(VanImage);
Vue.use(Cell);
Vue.use(Icon);
Vue.use(Search);



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
