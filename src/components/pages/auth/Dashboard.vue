<template>
  <div>
    <h1>Dashboard</h1>
    <button @click="onLogout">Logout</button>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  methods: {
    onLogout () {
      this.$store.dispatch('logout')
    }
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
