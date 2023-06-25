<template>
  <div class="container">
      <nav>
      <router-link to="/">
        <div class="logo">
          <img :src="logo" alt="logo">
        </div>
      </router-link> 
      <!-- <router-link to="/about">About</router-link> -->
    </nav>
    <router-view/>
    <basket-comp></basket-comp>
  </div>
</template>

<script>
import basketComp from '@/components/basketComp'

////images
import logo from '@/assets/images/logo.png'

export default {
  components:{
    basketComp
  },
  data() {
    return{
      logo
    }
  },
}
</script>

<style lang="scss">
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.container{
  position: relative;
}

.logo{
  img{
    height: 65px;
  }
}
</style>
