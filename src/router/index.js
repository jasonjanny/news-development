import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

import UserCenter from '../views/profile/UserCenter.vue'
import UserEdit from '../views/profile/UserEdit.vue'
import UserFocus from '../views/profile/UserFocus.vue'
import UserCollect from '../views/profile/UserCollect.vue'

import PostDetail from '../views/PostDetail.vue'
import MoreComment from '../views/moreComment.vue'
import Comment from '../views/Comment.vue'
import ProgramManagement from '../views/ProgramManagement.vue'

import Test from '../views/Test.vue'
import Digui from '../views/Digui.vue'

import Parent from '../comment/Parent.vue'
import Main from '../comment/Main.vue'

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
    component: UserCenter,
    meta: {
      needAuth: true
    }
  },
  {
    path: '/useredit',
    component: UserEdit,
    meta: {
      needAuth: true
    }
  },
  {
    path: '/userfocus',
    component: UserFocus,
    meta: {
      needAuth: true
    }
  },
  {
    path: '/usercollect',
    component: UserCollect,
    meta: {
      needAuth: true
    }
  },
  {
    path: '/postdetail/:id',
    component: PostDetail,
  },
  {
    path: '/morecomment/:id',
    component: MoreComment,
  },
  {
    path: '/comment',
    component: Comment,
  },
  {
    path: '/program',
    component: ProgramManagement,
  },
  {
    path: '/test',
    component: Test,
  },
  {
    path: '/digui',
    component: Digui,
  },
  {
    path: '/parent',
    component: Parent,
  },
  {
    path: '/main',
    component: Main,
  }
]

const router = new VueRouter({
  routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
  // 判断是否是跳转到用户中心
  /* if (to.path === "/usercenter" || to.path === "/useredit") {
    // 判断是否存在 token
    if (localStorage.getItem('token')) {
      return next();
    } else {
      // 没有token表示没有登录就要访问用户中心
      // catch 捕获错误
      return router.push('/login').catch(err => { });
    }
  } */

  // 将需要校验的页面配置成一个数组
  /* const pageNeedAuth = [
    '/usercenter',
    '/useredit'
  ],

  if (pageNeedAuth.indexOf(to.path) > -1) {
    // 判断是否存在 token
    if (localStorage.getItem('token')) {
      return next();
    } else {
      // 没有token表示没有登录就要访问用户中心
      // catch 捕获错误
      return router.push('/login').catch(err => { });
    }
  } */

  // 利用路由 meta 实现
  if (to.meta.needAuth) {
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
