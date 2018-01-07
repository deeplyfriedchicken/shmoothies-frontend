import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios-auth'

import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    id: null
  },
  mutations: {
    authUser (state, userData) {
      state.token = userData.token
      state.id = userData.id
    },
    clearAuthData (state) {
      state.token = null
      state.id = null
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
            token: res.data.token,
            id: res.data.id
          })
          const now = new Date()
          const expirationDate = new Date(now.getTime() + 3600 * 1000)
          localStorage.setItem('token', res.data.token)
          localStorage.setItem('id', res.data.id)
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
      const id = localStorage.getItem('id')
      const expirationDate = localStorage.getItem('expirationDate')
      const now = new Date()
      if (now <= expirationDate) {
        return
      }
      commit('authUser', {
        token: token,
        id: id
      })
    },
    logout ({commit}) {
      commit('clearAuthData')
      localStorage.removeItem('token')
      localStorage.removeItem('id')
      localStorage.removeItem('expirationDate')
      router.replace('/')
    }
  },
  getters: {
    isAuthenticated (state) {
      return state.token !== null
    },
    authorizationHeader (state) {
      return {
        headers: {
          'Authorization': `Token ${state.token}`
        }
      }
    }
  }
})
