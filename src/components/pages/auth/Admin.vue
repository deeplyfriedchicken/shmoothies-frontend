<template>
  <div>
    <section class="contents-container">
      <div class="container pd-b-50">
        <h1>Welcome {{ user.first_name }}</h1>
        <router-view></router-view>
      </div>
    </section>
  </div>
</template>

<script>
import axios from '../../../axios-auth'

export default {
  name: 'Admin',
  data () {
    return {
      user: {
        first_name: null,
        last_name: null,
        email: null,
        id: null,
        username: null
      }
    }
  },
  created () {
    axios.get('/api/profile/' + this.$store.state.id + '/')
      .then(res => {
        this.user = res.data
      })
      .catch(error => console.log(error))
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (vm.$store.getters.isAuthenticated) {
        next()
      } else {
        next('/login')
      }
    })
  }
}
</script>

<style>
.pd-b-50 {
  padding-bottom: 50px;
}
</style>
