import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import { users } from "../assets/users"
import UserProfile from '../views/UserProfile'
import Admin from '../views/Admin'
import store from '../store/index'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user/:userId',
    name: 'UserProfile',
    component: UserProfile
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta:{
      requireAdmin:true
    }

  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})


router.beforeEach(async(to,from,next) => {
  const user = store.state.User.user;

  if(!user){
    await store.dispatch('User/setUser',users[0])
  }

  const isAdmin = true;
  const requireAdmin = to.matched.some(record => record.meta.requireAdmin)

  if(requireAdmin && ! isAdmin)next({name: 'Home'});
  else next();
})

export default router
