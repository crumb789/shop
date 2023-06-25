<template>
    <div class=" basket-continue animate__animated animate__backInRight">
        <p>You have {{ howProducts }} purchases</p>
        <p>To be paid: <strong>${{ sumInBasket }}</strong></p>
        <button class="button is-success is-light">Сontinue shopping</button>
        <slot></slot>
    </div>
</template>


<script>
export default {
    data() {
        return{

        }
    },
    computed:{
        howProducts(){
            return this.$store.getters.quantityInCart
        },
        sumInBasket(){
            return this.$store.getters.priceInCart
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
    }
    button{
        margin-top: 15px;
    }
}

</style>