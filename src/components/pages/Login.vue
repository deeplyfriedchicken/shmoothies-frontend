<template>
  <div class="container">
    <div class="col-md-8 offset-md-2">
      <h1>Login</h1>
      <form action="#" class="maverick-form">
        <div class="row">
            <div class="col-md-12">
                <label for="username">Username</label>
                <input type="text" name="username" id="username" v-model="credentials.username" required>
            </div><!-- /col-md-12 -->
            <div class="col-md-12">
                <label for="password">Password</label>
                <input type="password" name="password" id="password" v-model="credentials.password" required>
            </div><!-- /col-md-12 -->
            <div class="col-md-12">
                <input type="submit" value="Login" @click.prevent="onSubmit">
            </div><!-- /col-md-12 -->
        </div><!-- /row -->
    </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      credentials: {
        username: '',
        password: ''
      }
    }
  },
  computed: {
    authenticated () {
      return !this.$store.getters.isAuthenticated ? false : this.$store.state.token
    }
  },
  methods: {
    onSubmit () {
      this.$store.dispatch('login', {
        username: this.credentials.username,
        password: this.credentials.password
      })
    }
  }
}
</script>
