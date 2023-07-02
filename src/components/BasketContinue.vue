<template>
    <div class=" basket-continue animate__animated animate__backInRight">
        <p>You have {{ howProducts }} purchases</p>
        <p>To be paid: <strong>${{ sumInBasket }}</strong></p>
        <div class="basket-continue__btns">
            <button v-if="stageOrder > 1" @click="prevtStep" class="button is-warning is-light">Previous Step</button>
            <button @click="nextStep" class="button is-success is-light">Сontinue shopping</button>
        </div>
        <slot></slot>
    </div>
</template>


<script>
export default {
    data() {
        return{

        }
    },
    methods:{
        nextStep(){
            this.$store.commit('nextOrderStep')
        },
        prevtStep(){
            this.$store.commit('prevOrderStep')
        }
    },
    computed:{
        howProducts(){
            return this.$store.getters.quantityInCart
        },
        sumInBasket(){
            return this.$store.getters.priceInCart
        },
        stageOrder(){
            return this.$store.state.orderStep
        },
    }
}
</script>
<style lang="scss" scoped>
.basket{
    &-continue{
        // position: absolute;
        align-self: flex-start;
        p{
            text-align: right;
        }
        &__btns{
            display: flex;
            flex-direction: column;
        }
    }
    button{
        margin-top: 15px;
    }
}

@media(max-width: 1023px){
    .basket{
        &-continue{
            align-self: flex-end;
            margin-right: 20px;
        }  
    }  
}
@media(max-width: 767px){
    .basket{
        &-continue{
            margin-right: 100px;
        }  
    }  
}

@media(max-width: 424px){
    .basket{
        &-continue{
            margin-right: 20px;
        }  
    }  
}
</style>