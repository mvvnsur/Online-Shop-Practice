<template>
  <div id="app">
    <nav-bar/>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './general/nav-bar.vue';
export default {
  components:{
    NavBar,
  },
}
</script>


<style lang="scss">
  *{
    list-style-type: none;
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
  }
</style>
