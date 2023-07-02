<template>
        <h4 v-if="!basketEmpty" class="empty title is-4 animate__animated animate__slideInDown">Cart is empty</h4>
    <div class="basket">
        <button-back class="basket-back animate__animated animate__backInLeft mb-4"></button-back>

        <div class="basket-box_wrapper">
            <basket-item v-if="stageOrder === 1">
            </basket-item>

            <form-order v-if="stageOrder === 2">
            </form-order>

            <div v-if="stageOrder === 3" class="order-close">
                <h1 class="title is-3">Thanks for the order</h1>

                <button @click="newOrder" class="button is-primary">New order</button>
            </div>
        </div>

        
        <basket-continue  v-if="basketEmpty && stageOrder < 3">
            <progress v-if="basketEmpty"  class="progress is-primary mt-4" :value="lineContinued" max="100"> </progress>
        </basket-continue>
         
    </div>
</template>


<script>
import BasketItem from '@/components/BasketItem.vue'
import BasketContinue from '@/components/BasketContinue.vue'
import ButtonBack from '@/components/UI/ButtonBack.vue'
import FormOrder from '@/components/FormOrder.vue'

export default {
  components: { 
        BasketItem,
        BasketContinue,
        ButtonBack,
        FormOrder,
    },
    data() {
        return{

        }
    },
    methods:{
        newOrder(){
            this.$router.push('/')
        }
    },
    computed:{
        basketEmpty(){
            return this.$store.state.basketAll.length > 0
        },
        stageOrder(){
            return this.$store.state.orderStep
        },
        lineContinued(){
            let result = this.$store.state.orderStep
            let max = 3
            let procent = 100 / (max / result)
            return procent
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
.progress{
    transition: 0.5s all;
}

.order{
    &-close{
        width: 800px;
    }
}
@media(max-width: 1023px){
    .basket{
        flex-direction: column-reverse;
    }
    .order{
    &-close{
            width: auto;
        }
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