import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/pages/Home'
import Login from '@/components/pages/Login'
import Article from '@/components/pages/Article'
import Page from '@/components/pages/Page'
import PageCategory from '@/components/pages/PageCategory'
import Admin from '@/components/pages/auth/Admin'
import Dashboard from '@/components/pages/auth/Dashboard'
import NewArticle from '@/components/pages/auth/NewArticle'
import Images from '@/components/pages/auth/Images'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      component: Page,
      children: [
        {
          path: '',
          name: 'Home',
          component: Home
        },
        {
          path: 'category/:category',
          name: 'PageCategory',
          component: PageCategory
        },
        {
          path: 'category/:category/:article',
          name: 'Article',
          component: Article
        }
      ]
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
          path: 'images',
          name: 'Images',
          component: Images
        },
        {
          path: 'new-article',
          name: 'NewArticle',
          component: NewArticle
        },
        {
          path: 'edit/:slug',
          name: 'EditArticle',
          component: NewArticle
        }
      ]
    }
  ],
  mode: 'history'
})
