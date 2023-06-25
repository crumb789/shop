<template>
    <div class="basket-link">
        <router-link :class="{active:thisIsBasketPage} " to="/basket">
            <i v-if="!basketEmpty" class="bi bi-cart4 animate__animated animate__flipInX"></i> 
            <i v-else class="bi bi-cart-dash-fill animate__animated animate__flipInX"></i>
            <span>Basket</span>
        </router-link>
        <div v-if="!thisIsBasketPage" class="basket-sum">${{ sumInBasket }}</div>
    </div>
</template>

<script>
export default {
    data() {
        return{

        }
    },
    computed:{
        thisIsBasketPage(){
            return this.$route.path == '/basket'
        },
        basketEmpty(){
            return this.$store.state.basketAll.length > 0
        },
        sumInBasket(){
            return this.$store.getters.priceInCart
        },
  
    }
}
</script>

<style lang="scss" scoped>
.basket{
    &-link{
        position: absolute;
        right: 30px;
        top: 30px;
        a{
            color: #000;
            span{
                margin-left: 4px;
            }
        }
    }
}
.active{
    color: #42b983 !important;
}


@media(max-width: 424px){
    .basket{
        &-link{
            right: 15px;
            top: 10px;
        }
    }
}

</style>