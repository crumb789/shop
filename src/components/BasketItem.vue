<template>
    <div class="box animate__animated animate__flipInX" v-for="i in cartUser" :key="i.id">
        <div class="cart-wrapper">
            <div class="cart-img">
                <img :src="i.image" alt="">
            </div>
            <div class="cart-descr">
                <router-link class="has-text-dark" :to="`/product/${i.id}`">
                    <p>{{ i.title }}</p> 
                </router-link>                 
                <p class="mt-2 price"> <strong>${{ i.price }}</strong></p>
            </div>
            <button @click="deleteItem(i)" class="button is-warning"> Delete</button>
            <div class="cart-quantity">
                <button @click="removeQuantity(i)" :disabled='i.quantity <= 1'
                    class="button is-small is-responsive">
                        -
                </button>
                    <span>{{ i.quantity }}</span>
                <button @click="addQuantity(i)" :disabled='i.quantity >= 9'
                    class="button is-small is-responsive">
                        +
                </button>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return{

        }
    },
    methods:{
        deleteItem(item){
            this.$store.commit('deleteFromBasket', item) 
        },
        addQuantity(i){
            this.$store.commit('addMoreToQuantity', i) 
        },
        removeQuantity(i){
            this.$store.commit('removeToQuantity', i) 
        }
    },
    computed:{
        cartUser(){
            return this.$store.state.basketAll
        }
    }
}
</script>


<style lang="scss" scoped>
.box{
    width: 800px;
}
.cart{
    position: relative;
    &-wrapper{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    &-img{
        width: 150px;
        img{
            height: 100px;
        }
    }
    &-quantity{
        position: absolute;
        gap: 4px;
        display: flex;
        right: 19px;
        top: 10px;
        align-items: center;
        font-weight: 800;
    }
}
.price{

}
</style>