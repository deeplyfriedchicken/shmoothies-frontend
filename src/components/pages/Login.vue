<template>
  <div class="container">
    <h1>Login</h1>
    <div class="col-md-8 col-md-offset-2">
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
import axios from 'axios'

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
  methods: {
    onSubmit () {
      console.log(this.credentials)
      axios.post('http://localhost:8000/api/login/', this.credentials)
        .then(res => console.log(res))
        .catch(error => console.log(error))
    }
  }
}
</script>
