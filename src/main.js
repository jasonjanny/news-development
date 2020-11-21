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
// axios响应拦截器
axios.interceptors.response.use(res => {
  // console.log(res);

  const errRegExp = /^4\d{2}$/;
  const { message, statusCode } = res.data;

  //错误提醒
  // 如果获取的数据有statusCode，而且是以4开头的三位数
  if (errRegExp.test(statusCode)) {
    Toast.fail(message || '系统错误');
  }

  //用户信息失效
  if (message === "用户信息验证失败") {
    // 清理localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    // 跳转到登录页
    router.replace("/login");
  }

  // 放行
  return res;
});

// axios请求拦截器
axios.interceptors.request.use(config => {
  // 如果发送请求的时候没有token而本地又有token数据
  if (!config.headers.Authorization && localStorage.getItem('token')) {
    // 在请求头带上token
    config.headers.Authorization = localStorage.getItem('token');
  }
  // 放行
  return config;
});

// 1. 导入组件库
import Vant, { Toast } from 'vant'
// 2. 引入组件 css 文件
import 'vant/lib/index.css'
// 3. 注册 vant ui 组件库的标签
Vue.use(Vant)

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
