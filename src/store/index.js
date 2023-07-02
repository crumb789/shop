import { createStore } from 'vuex'
import basket from '@/store/basket.js'

export default createStore({
  state: {
    itemsFake:[ ],
    howLoad: 5,
    orderStep: 1,
    itemsFakeAllInCategory: [ ],
    basketAll:[ ],
    activeSort: [ ],
    sortItem:[
      {
        "id":"0",
        "tag":"Default sorting",
        "link":""
      },
      {
        "id":"1",
        "tag":"Price: lowest first",
        "link":""
      },
      {
        "id":"2",
        "tag":"Price: highest first",
        "link":""
      },
    ],
    menuList: [
      {
        "id":"0",
        "tag":"All",
        "link":""
      },
      {
        "id":"1",
        "tag":"Men's clothing",
        "link":"/category/men's clothing"
      },
      {
        "id":"2",
        "tag":"Women's clothing",
        "link":"/category/women's clothing"
      },
      {
        "id":"3",
        "tag":"Jewelery",
        "link":"/category/jewelery"
      },
      {
        "id":"4",
        "tag":"Electronics",
        "link":"/category/electronics"
      },
    ],
    activeTag: 0,
  },

  getters: {
    howInCategory(state){
      return state.itemsFakeAllInCategory.length
    },
    priceInCart(state){
      let sum =  state.basketAll.reduce((sum, item) => sum + item.price * item.quantity  , 0);
      sum = Math.round(sum * 10) / 10
      return sum
    },
    quantityInCart(state){
      let sum =  state.basketAll.reduce((sum, item) => sum + item.quantity  , 0);
      return sum
    },
  },

  mutations: {
    getAllItemsFake(state, newItemsArray){
      state.itemsFake = newItemsArray
    },
    howLoading(state){
      state.howLoad = state.howLoad + 5
    },
    getAllItemsFakeInCategory(state, newItems){
      state.itemsFakeAllInCategory = newItems
    },
    changeActiveTag(state, newTag){
      state.activeTag = newTag
    },

    pushToBasket(state, newProduct){
      if(!state.basketAll.find(item => item.id == newProduct.id)) { ////////if this product is not yet available, then push it to the cart
        state.basketAll.push(newProduct)
        state.basketAll.map(product => product.quantity = 1)
      }
      else { ////////if there is, then add the quantity
        state.basketAll.forEach(product => {
          if(product.id == newProduct.id){
            product.quantity ++
          }
        })
      }
    },
    deleteFromBasket(state, item){
      state.basketAll = state.basketAll.filter(product => product.id != item.id)
    },
    addMoreToQuantity(state, i){
      state.basketAll.forEach(item => {
        if(item.id == i.id){
          item.quantity ++
        }
      })
    },
    removeToQuantity(state, i){
      state.basketAll.forEach(item => {
        if(item.id == i.id){
          item.quantity --
        }
      })
    },
    changeSort(state, newSort){
      state.activeSort = newSort
      console.log(newSort)
    },
    nextOrderStep(state){
      (state.orderStep >= 3) ? state.orderStep = 3 : state.orderStep++
    },
    prevOrderStep(state){
      (state.orderStep <= 1) ? state.orderStep = 1 : state.orderStep--
    }
  },
  actions: {
    async  getAllItemsFake ({ commit, state }, category ) {    ///get all items with how load
      
      let newItemsArray = []
        if(category){
          await  fetch(`https://fakestoreapi.com/products${category}?limit=${state.howLoad}`)
            .then(res=>res.json())
            .then(res=> newItemsArray = res);
            console.log(newItemsArray)
            commit('getAllItemsFake', newItemsArray)       
        }
        if(!category){
          await  fetch(`https://fakestoreapi.com/products?limit=${state.howLoad}`)
            .then(res=>res.json())
            .then(res=> newItemsArray = res);
            console.log(newItemsArray)
            commit('getAllItemsFake', newItemsArray)
        }

        
      },


  async  getAllItemsFakeInCategory ({ commit, state }, category ) {    ///get all items
    let newItemsArray = []
      if(category){
        await  fetch(`https://fakestoreapi.com/products${category}`)
            .then(res=>res.json())
            .then(res=> newItemsArray = res);
            console.log(newItemsArray)
            commit('getAllItemsFakeInCategory', newItemsArray)
      }
        if(!category){
          await  fetch(`https://fakestoreapi.com/products`)
            .then(res=>res.json())
            .then(res=> newItemsArray = res);
            console.log(newItemsArray)
            commit('getAllItemsFakeInCategory', newItemsArray)
        }
      },
  },
  modules: {
    basket
  }
})

