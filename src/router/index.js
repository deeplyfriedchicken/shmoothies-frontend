import Vue from 'vue'
import Router from 'vue-router'

// import store from '../store'

import Home from '@/components/pages/Home'
import Login from '@/components/pages/Login'
import Article from '@/components/pages/Article'
import Page from '@/components/pages/Page'
import PageCategory from '@/components/pages/PageCategory'
import Dashboard from '@/components/pages/auth/Dashboard'
// import CreateArticle from '@/components/pages/auth/CreateArticle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/admin',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/category',
      name: 'Page',
      component: Page,
      children: [
        {
          path: ':category',
          name: 'PageCategory',
          component: PageCategory
        },
        {
          path: ':category/:article',
          name: 'Article',
          component: Article
        }
      ]
    }
  ],
  mode: 'history'
})
