<template>
    <div class="user-profile">
        <div class="user-profile_user-panel">
            <h1 class="user-profile_username">@{{user.username}}</h1>
            <div class="user-profile_admin-badge" v-if="user.isAdmin">Admin</div>
            <div class="user-profile_follower-count">
                <strong>Followers: </strong> {{followers}}
            </div>
            <form class="user-profile_create-twoot">
                <label>
                    <strong>New Twoot</strong>
                </label>
                <textarea id="newTwoot" rows="4" v-model="newTwootContent"/>
                <div class="user-profile_create-twoot-type">
                    <label for="newTwootType"><strong>Type: </strong></label>
                    <select id="newTwootType" v-model="selectedTwootType">
                        <option :value="option.value" v-for="(option,index) in twootTypes" :key="index">
                            {{option.name}}
                        </option>
                    </select>
                </div>
            </form>
        </div>
        <div class="user-profile_twoots-wrapper">
            <TwootItem v-for="twoot in user.twoots" 
            :key="twoot.id" 
            :username="user.username" 
            :twoot="twoot" 
            @favorite="toggleFavorite"/>
        </div>
    </div>
</template>
<script>
import TwootItem from "./TwootItem"
    export default {
    name: "UserProfile",
    components: { TwootItem },
    data() {
        return {
            newTwootContent:'',
            selectedTwootType:'instant',
            twootTypes:[
                {value:'draft', name: 'Draft'},
                {value:'instant', name: 'Instant Twoot'},
            ],
            followers:0,
            user:{
                id:1,
                username: 'statusQuao',
                firstname: ' Russell',
                lastname: 'Quao',
                email: 'quao.russell3@gmail.com',
                isAdmin: true,
                twoots:[
                    {  id: 1, content:'Twotter is amazing'},
                    {  id: 2, content:"Don't forget to subscribe to Russell's Channel"},
                    {  id: 3, content:'YEEETTTTTTTTTTTT'},
                    {  id: 4, content:"bEARS bEATS bATTLESTAR GALACTICA"},
                    {  id: 5, content:'yIKESSSSSSSS'},
                    {  id: 6, content:"yERRRRRRRRRRRRRRrRrRrRr"},
                    {  id: 7, content:'Twotter is amazing'},
                    {  id: 8, content:"Don't forget to subscribe to Russell's Channel"}
                ]
            }
        }
  },
  computed: {
    fullName() {
      return `${this.user.firstname} ${this.user.lastname}`;
    }
  },
  methods: {
    followUser() {
      this.followers++;
    },
    toggleFavorite(id){
        console.log(`Favorited Tweet with the ID of #${id}`)
    }
  },
  watch: {
    followers(newFollowerCount, oldFollowerCount){
        if(oldFollowerCount < newFollowerCount){
            console.log('YO YOU GAINED A FOLLOWER')
        }
    }
  },
  mounted() {
    this.followUser();
  }
}
</script>
<style>
.user-profile{
    display: grid;
    grid-template-columns: 1fr 3fr;
    width: 100%;
    padding: 50px 5%
}
.user-profile_user-panel{
    display: flex;
    flex-direction: column;
    margin-right: 50px;
    padding: 20px;
    background-color:white;
    border-radius: 5px;
    border: 1px solid #DFE3E8;
}

.user-profile_create-twoot{
    display: flex;
    flex-direction: column;
    padding-top: 20px;
}
h1{
    margin: 0;
}
.user-profile_admin-badge{
    background: rebeccapurple;
    color: white;
    border: radius 5px;
    margin-right: auto;
    padding: 0 10px;
    font-weight:bold;
}
</style>