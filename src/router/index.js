import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import UserCenter from '../views/profile/UserCenter.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/usercenter',
    component: UserCenter
  }
]

const router = new VueRouter({
  routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
  // 判断是否是跳转到用户中心
  if (to.path === "/usercenter") {
    // 判断是否存在 token
    if (localStorage.getItem('token')) {
      return next();
    } else {
      // 没有token表示没有登录就要访问用户中心
      // catch 捕获错误
      return router.push('/login').catch(err => { });
    }
  }

  return next();
})

export default router
