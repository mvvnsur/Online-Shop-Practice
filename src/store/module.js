import axios from 'axios'

export default{    
  state: {
    users: []
  },
  getters: {
    USERS_INFO(state){
      return state.users
    },
    // GET_UPPER_CASE(state){
    //   return state.users.map(item => item.title.toUpperCase())
    // }
  },
  mutations: { 
    SET_USERS: (state, users) => {
      state.users = users
    }
  },
  actions: {
    GET_USERS_FROM_API({commit}){
      return axios('https://jsonplaceholder.typicode.com/users',{
        method: 'GET'
      })
        .then((users) => {
          commit('SET_USERS', users.data);
          return users;
        })
        .catch((error) => {
          console.log(error)
          return error;
        })
    }
  },
  modules: {
  }
}