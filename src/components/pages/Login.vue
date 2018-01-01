<template>
  <div class="container">
    <h1>Login</h1>
    <div class="col-md-8 col-md-offset-2">
      <form action="#" class="maverick-form">
        <div class="row">
            <div class="col-md-12">
                <label for="email">Email</label>
                <input type="text" name="email" id="email" v-model="credentials.email" required>
            </div><!-- /col-md-12 -->
            <div class="col-md-12">
                <label for="password">Password</label>
                <input type="password" name="password" id="password" v-model="credentials.password" required>
            </div><!-- /col-md-12 -->
            <div class="col-md-12">
                <input type="submit" value="Login" @click.prevent="submitted">
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
        email: '',
        password: ''
      },
      isSubmitted: false
    }
  },
  methods: {
    submitted () {
      this.isSubmitted = true
    }
  }
}
</script>
