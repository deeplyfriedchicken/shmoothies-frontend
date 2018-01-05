import Vue from 'vue'
import Router from 'vue-router'

// import store from '../store'

import Home from '@/components/pages/Home'
import Login from '@/components/pages/Login'
import Article from '@/components/pages/Article'
import Page from '@/components/pages/Page'
import PageCategory from '@/components/pages/PageCategory'
import Admin from '@/components/pages/auth/Admin'
import Dashboard from '@/components/pages/auth/Dashboard'
import NewArticle from '@/components/pages/auth/NewArticle'

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
      component: Admin,
      children: [
        {
          path: '',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: 'new-article',
          name: 'NewArticle',
          component: NewArticle
        }
      ]
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
