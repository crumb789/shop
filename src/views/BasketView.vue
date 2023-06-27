<template>
        <h4 v-if="!basketEmpty" class="empty title is-4 animate__animated animate__slideInDown">Cart is empty</h4>
    <div class="basket">
        <button-back class="basket-back animate__animated animate__backInLeft mb-4"></button-back>
        <div class="basket-box_wrapper">
            <basket-item >
            </basket-item>

            <address-comp v-if="false">                
            </address-comp>
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
import AddressComp from '@/components/AddressComp.vue'

export default {
  components: { 
        BasketItem,
        BasketContinue,
        ButtonBack,
        AddressComp,
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
    &-back{
            z-index: 100;
        }
}

@media(max-width: 1023px){
    .basket{
        flex-direction: column-reverse;
    }
}

@media(max-width: 1023px){
    .basket{
        &-back{
            position: absolute;
            top: 63px;
            left: 0;
        }
    }
}

@media(max-width: 556px){
    .basket{
        &-back{
            position: absolute;
            top: 63px;
            left: 0;
        }
    }
}
@media(max-width: 424px){
    .basket{
        &-back{
            position: absolute;
            top: 63px;
            left: -10%;
        }
    }
}
@media(max-width: 374px){
    .basket{
        &-back{
            position: absolute;
            top: 63px;
            left: -15%;
        }
    }
}
</style>