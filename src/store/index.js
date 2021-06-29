import { createStore } from 'vuex'

export default createStore({
  state: {
    logged: false,
    login: "",
    password: "",
    email:"",
    date: "",
    
  },
  mutations: {
    setlogged(value) {
     this.state.logged=value
    },
  },
  actions: {
  },
  modules: {
  }
})
