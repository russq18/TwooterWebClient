<template>
<div id="app">
  <nav>
    <router-link to="/">
      <div class="navigation_logo">
        Twotter
      </div>
    </router-link>
    <div class="navigation_user" v-if="user">
      {{user.username}}
    </div>
  </nav>
  <router-view/>
</div>
</template>

<script>
import{ useStore } from 'vuex';
import{ computed } from 'vue';

export default {
  name: 'App',
  setup(){
    const store = useStore();
    const user = computed(() => store.state.User.user);

    return{
      user
    }
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

 nav{
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding:10px 5%;
    background-color: rgb(59, 196, 150);
    color: white;
    .navigation_logo{
      font-weight: bold;
      font-size: 24px;
    }
    .navigation_user{
      font-weight: bold;
    }
  }
.follow-button{
  width: 6rem;
  align-self: center;
  text-align: center;
  height: 1rem;
  background: darkblue;
  color:darkgray;
}
</style>
