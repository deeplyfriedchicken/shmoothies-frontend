import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios-auth'

import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null
  },
  mutations: {
    authUser (state, userData) {
      state.token = userData.token
    },
    clearAuthData (state) {
      state.token = null
    }
  },
  actions: {
    setLogoutTimer ({commit, dispatch}, expirationTime) {
      setTimeout(() => {
        dispatch('logout')
      }, expirationTime * 1000)
    },
    login ({commit, dispatch}, authData) {
      axios.post('/api/login/', {
        username: authData.username,
        password: authData.password
      })
        .then(res => {
          commit('authUser', {
            token: res.data.token
          })
          const now = new Date()
          const expirationDate = new Date(now.getTime() + 3600 * 1000)
          localStorage.setItem('token', res.data.token)
          localStorage.setItem('expirationDate', expirationDate)
          router.replace('/admin')
          dispatch('setLogoutTimer', 3600)
        })
        .catch(error => console.log(error))
    },
    tryAutoLogin ({commit}) {
      const token = localStorage.getItem('token')
      if (!token) {
        return
      }
      const expirationDate = localStorage.getItem('expirationDate')
      const now = new Date()
      if (now <= expirationDate) {
        return
      }
      commit('authUser', {
        token: token
      })
    },
    logout ({commit}) {
      commit('clearAuthData')
      localStorage.removeItem('token')
      localStorage.removeItem('expirationDate')
      router.replace('/')
    }
  },
  getters: {
    isAuthenticated (state) {
      return state.token !== null
    }
  }
})
