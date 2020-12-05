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
import { ActionSheet, Dialog, Field, List, Tab, Tabs, Toast, Uploader } from 'vant'
// 2. 引入组件 css 文件
import 'vant/lib/tab/style'
import 'vant/lib/tabs/style'
import 'vant/lib/list/style'
import 'vant/lib/uploader/style'
import 'vant/lib/dialog/style'
import 'vant/lib/field/style'
import 'vant/lib/action-sheet/style'
import 'vant/lib/toast/style'
// 3. 注册 vant ui 组件库的标签
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(List)
Vue.use(Uploader)
Vue.use(Dialog)
Vue.use(Field)
Vue.use(ActionSheet)


// 引入video.js
import Video from 'video.js'
import 'video.js/dist/video-js.css'
Vue.prototype.$video = Video

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
