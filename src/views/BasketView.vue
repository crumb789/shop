<template>
        <h4 v-if="!basketEmpty" class="title is-4 animate__animated animate__slideInDown">Cart is empty</h4>
       <button-back class="animate__animated animate__backInRight mb-4"></button-back>
    <div class="basket">
        <div class="basket-box_wrapper">
            <basket-item>
            </basket-item>
        </div>
        
        <basket-continue v-if="basketEmpty">
             <progress v-if="basketEmpty" class="progress is-primary mt-4" value="15" max="100">15%</progress>
        </basket-continue>
       
    </div>
</template>


<script>
import BasketItem from '@/components/BasketItem.vue'
import BasketContinue from '@/components/BasketContinue.vue'
import ButtonBack from '@/components/UI/ButtonBack.vue'

export default {
  components: { 
        BasketItem,
        BasketContinue,
        ButtonBack,
    },
    data() {
        return{

        }
    },
    computed:{
        basketEmpty(){
            return this.$store.state.basketAll.length > 0
        }
    }
}
</script>


<style lang="scss" scoped>
.basket{
    position: relative;
    display: flex;
    align-items: center;
    gap: 30px;
    justify-content: center;
}

@media(max-width: 1023px){
    .basket{
        flex-direction: column-reverse;
    }
}
</style>