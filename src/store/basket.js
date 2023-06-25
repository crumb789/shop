import { createStore } from 'vuex'

export default createStore({
  state: {
    basketAll: 0,
  },
  getters: {

  },
  mutations: {
    pushToBasket(state, newProduct){
        state.basketAll.push(newProduct)
    }
  },
  actions: {
  },
  modules: {
    
  },

})
