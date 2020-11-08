<template>
<div id="app">
  <nav>
    <div class="navigation_logo">
      Twotter
    </div>
    <div class="navigation_user">
      {{user.username}}
    </div>
  </nav>
  <UserProfile/>
</div>
</template>

<script>
import UserProfile from './components/UserProfile'
export default {
  name: 'App',
  components: {UserProfile},
  data(){
    return{
      user:{
        username: '_statusQua0'
      }
    }
  }
}
</script>

<style lang="scss">
#app{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  background-color:#F3F5FA;

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
