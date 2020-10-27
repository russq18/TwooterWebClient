<template>
<div id="app">
  <UserProfile></UserProfile>
</div>
</template>

<script>
import UserProfile from './components/UserProfile'
export default {
  name: 'App',
  components: {
    'UserProfile': UserProfile
  }
}
</script>

<style>
#app{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  text-align: center;
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
