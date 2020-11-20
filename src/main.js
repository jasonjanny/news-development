import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// 导入axios库
import axios from "axios";
// 设置基准路径
axios.defaults.baseURL = 'http://157.122.54.189:9083';
// 绑定到原型
Vue.prototype.$axios = axios;

// 1. 导入组件库
import Vant from 'vant'
// 2. 引入组件 css 文件
import 'vant/lib/index.css'
// 3. 注册 vant ui 组件库的标签
Vue.use(Vant)

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
