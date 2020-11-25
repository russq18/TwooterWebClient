export const UserModule = {
    namespaced: true,

    state: {
        user:null
      },
      mutations: {
        //mutations are functions that change the state
        SET_USER(state,user){
          state.user = user;
        }
      },
    
    
      actions: {
        //functions throughout your app that call mutations
        setUser({ commit }, user){
          commit('SET_USER',user)
        }
      },
}