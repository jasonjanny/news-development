import Vue from 'vue'
import App from './App.vue'
import router from './router'

import axios from './utils/axios'
// 绑定到原型
Vue.prototype.$axios = axios;

// 设置全局过滤器
// 传入两个参数 过滤器和函数
Vue.filter('fixImgUrl', (oldUrl) => {
  if (oldUrl.indexOf("http") > -1) {
    return oldUrl;
  } else {
    return axios.defaults.baseURL + oldUrl;
  }
})

// 1. 导入组件库
import Vant, { Toast } from 'vant'
// 2. 引入组件 css 文件
import 'vant/lib/index.css'
// 3. 注册 vant ui 组件库的标签
Vue.use(Vant)

// 引入video.js
import Video from 'video.js'
import 'video.js/dist/video-js.css'
Vue.prototype.$video = Video

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
