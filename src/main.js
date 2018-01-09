// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ToggleButton from 'vue-js-toggle-button'

import store from './store'

Vue.config.productionTip = process.env.NODE_ENV === 'production'

Vue.use(ToggleButton)

Vue.use(require('vue-moment'))

Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  })
})

Vue.filter('plus', function (value) {
  if (!value) return ''
  value = value.toString().replace(/ /g, '+')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App },
  router
})
