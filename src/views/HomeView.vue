<template>
  <div class="home container">
    <div class="home-wrapper">
      <menu-comp
        @fetch-new-tag='newFetch'  >
      </menu-comp>       

      <div class="items" v-if="itemsFake">
        <items-sort>   
        </items-sort>
        <div class="items-wrapper" >
            <item-card v-for="item in itemsFake" :key="item.id" 
              :item='item'>            
            </item-card>
        </div>
        <div class="items-quantity mt-3"><span> {{ itemsFake.length }} </span>  products out of <span> {{ howInCategoryAll }} </span> are shown</div>
        <button v-if="howLoad <= itemsFake.length" @click="loadMore" class="button is-success mt-4">Load More</button>
      </div>

      <items-placeholder v-else></items-placeholder>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import axios from 'axios'
import { reactive, toRaw } from 'vue' 
import ItemCard from '@/components/ItemCard.vue'
import MenuComp from '@/components/MenuComp.vue'
import ItemsPlaceholder from '@/components/ItemsPlaceholder.vue'
import ItemsSort from '@/components/ItemsSort.vue'




export default {
  name: 'HomeView',
  components: {
    ItemCard,
    MenuComp,
    ItemsPlaceholder,
    ItemsSort,
  },
  data(){
    return{
      items: reactive(
        [] 
      ),
      howLoad: 5, 
    }
  },
  computed:{
    itemsFake(){
      return this.$store.state.itemsFake
    },
    howInCategoryAll(){
      return this.$store.getters.howInCategory

    },
    sotring(){
        return this.$store.state.activeSort
    }
  },
  methods:{
    async getItems(){
      this.items = toRaw(this.items)
        // await  fetch(`https://fakestoreapi.com/products?limit=${this.howLoad}`)
        //       .then(res=>res.json())
        //       .then(res=> this.items = res);
        

       /*  get all items without category */
        
        // console.log(allItems)
        this.$store.dispatch('getAllItemsFake')
        this.$store.commit('howLoading')
      },
      async  newFetch(category){
        this.$store.dispatch('getAllItemsFake', category)
        this.$store.commit('howLoading')

      /*  get all items in category */
        this.$store.dispatch('getAllItemsFakeInCategory', category)
      },
      loadMore(){
        let category = this.$store.state.activeTag.link
        this.howLoad = this.howLoad + 5
        
        this.$store.dispatch('getAllItemsFake', category)
        this.$store.commit('howLoading')
        
      },
  },
  mounted(){
    // this.getItems()
    this.$store.dispatch('getAllItemsFake')
    this.$store.dispatch('getAllItemsFakeInCategory' )
    // this.$store.commit('getAllItemsFake', this.items)
  }
}
</script>

<style lang="scss" scoped>
.home{
  padding: 0 0 50px 0;
  &-wrapper{
    margin-top: 24px;
    display: grid;
    grid-template-columns: 223px 717px;
    grid-template-rows: minmax(100px, auto);
    grid-gap: 20px;    
    justify-content: center;

    grid-template-areas: 
      "menu itemsCards"; 
  }
}
.items{
  position: relative;
  &-wrapper{
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 24px 12px;
    margin-bottom: 30px;

    grid-area: itemsCards;
  }
  &-placeholder{
    width: 40%;
  }
  &-quantity{
    span{
      font-weight: 600;
    }
  }
}

@media(max-width: 1023px){
  .home{
    &-wrapper{
      grid-template-columns: 1fr;
      grid-template-areas:
        "menu menu"
        "itemsCards itemsCards";
      row-gap: 10px;
      column-gap: 0;
    }
  }
}

@media(max-width: 767px){
  .items{
    &-wrapper{
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: auto;
      gap: 20px;
    }
    &-placeholder{
      
    }
  }
}
</style>
