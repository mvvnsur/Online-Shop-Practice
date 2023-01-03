<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div class="container">
    <router-link :to="{name : 'home'}" exact>
      <a class="navbar-brand"><img src="@/../public/img/apple.png" width="25px"></a>
    </router-link>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav container d-flex justify-content-between">
        <div class="nav__bar__pages d-flex">
          <router-link :to="{name : 'home'}" class="nav-link" exact>MacBook's</router-link>
          <router-link :to="{name : 'devices'}" class="nav-link">Device's</router-link>
        </div>
        <div class="nav__bar__cart">
          <router-link :to="{name : 'cart', params: {cart_data: CART}}" class="nav-link"><img src="@/../public/img/cart.png" width="25px"></router-link>
          <div class="nav__bar__counter d-flex justify-content-center align-items-center">{{CART.length}}</div>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data(){
    return{
      isActive: false,
    }
  },
  computed:{
    ...mapGetters([
      'CART'
    ])
  }
}
</script>

<style lang="scss" scoped>
  *{
    list-style-type: none;
    text-decoration: none;
  }
  .navbar-nav{
    .nav__bar__cart{
      position: relative;
      .nav__bar__counter{
        width: 16px;
        height: 16px;
        position: absolute;
        bottom:20px;
        left:30px;
        background-color:red;
        border-radius: 50%;
        font-size: 12px;
      }
    }
  }
  a.router-link-active{
    color: white !important;
  }
  .nav__bar__counter{
    color: white;
  }
</style>