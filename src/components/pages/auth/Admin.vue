<template>
  <div>
    <section class="contents-container">
      <div class="container pd-b-50">
        <div class="text-center">
          <ul id="action-buttons">
            <router-link tag="li" to="/admin/new-article"><i class="fa fa-2x fa-plus"></i></router-link>
            <router-link tag="li" to="/admin/images"><i class="fa fa-2x fa-file-image-o"></i></router-link>
            <router-link tag="li" to="/admin"><i class="fa fa-2x fa-home"></i></router-link>
            <li @click.prevent="onLogout"><i class="fa fa-sign-out fa-2x"></i></li>
          </ul>
        </div>
        <h1>{{ user.first_name }} {{ user.last_name }}</h1>
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
  methods: {
    onLogout () {
      this.$store.dispatch('logout')
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
#action-buttons {
  list-style: none;
}
#action-buttons li {
  display: inline-block;
  cursor: pointer;
}
#action-buttons li i:hover {
  background: rgb(253, 183, 33);
}
#action-buttons li i {
  background: rgba(253, 183, 33, 0.5);
  padding: 13px;
  border-radius: 50%;
  text-align: center;
  vertical-align: middle;
  width: 50px;
  height: 50px;
}
@media screen and (max-width: 991px) {
  #action-buttons {
    display: inline-block;
  }
}
@media screen and (min-width: 992px) {
  #action-buttons {
    position: fixed;
    right: 20px;
    bottom: 50px;
    z-index: 25;
  }
  #action-buttons li {
    margin-bottom: 5px;
  }
  #action-buttons li i:hover {
    background: rgb(253, 183, 33);
  }
  #action-buttons li i {
    background: rgba(253, 183, 33, 0.5);
    padding: 13px;
    border-radius: 50%;
    text-align: center;
    vertical-align: middle;
    width: 50px;
    height: 50px;
  }
}
</style>
