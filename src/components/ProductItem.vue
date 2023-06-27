<template>
    <div class="product-item animate__animated animate__slideInUp ">
        <div class="box product card">   
            <!-- {{card}} -->

            <img class="product-image card-image " :src="card.image" alt="">
            <div class="product-wrapper">
                <h4 class="product-title title is-4">
                    {{card.title}}
                </h4>
                <div></div>
                <div class="product-descr subtitle is-5">
                        <p>{{card.description}}</p>
                    <div class="product-price ">
                        <i :class="{activeBag: card.quantity}" class="bi bi-bag bag animate_animated animate__fadeInDown"><span>{{card.quantity}}</span></i>
                        <strong class="has-text-primary-dark">${{card.price}}</strong>
                    </div>
                </div>
                <button @click="addToCart(card)" :disabled='card.quantity >= 9' class="button is-danger">Add to cart</button>
            </div>
        </div>

        <button-back class="animate__animated animate__slideInLeft mt-4">
        </button-back>

    </div>
</template>


<script>
import ButtonBack from '@/components/UI/ButtonBack.vue'

export default {
    name:'product-item',
    components:{
        ButtonBack
    },
    data() {
        return{
            card:[]
        }
    },
    methods:{
       addToCart(card){
        this.$store.commit('pushToBasket', card)
       }
    },
    mounted(){
            // console.log(this.$route)
            fetch(`https://fakestoreapi.com/products/${this.$route.params.id}`)
            .then(res=>res.json())
            .then(json=> this.card  = json)
    }
}
</script>


<style lang="scss" scoped>
.product{
    position: relative;
    max-width: 1200px;
    // min-width: 1000px;
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    gap: 60px;
    &-title{
        text-decoration: underline;
        grid-area: title;
        text-align: left;
    }
    &-image{
        max-height: 350px;
        max-width: 200px;
    }
    &-descr{
        grid-area: descr; 
        text-align: right;
        text-align: left;
    }
    &-price{
        position: absolute;
        top: 20px;
        right: 30px;
    }
    &-wrapper{
        display: grid; 
        grid-template-columns: 300px 300px; 
        grid-template-rows: minmax(50px, auto) minmax(200px, auto) 40px;
        gap: 20px 0px; 
        grid-template-areas: 
        "title ."
        "descr descr"
        "button button"; 
    }
}
.button{
    grid-area: button;
}
.bag{
    position: relative;
    top: 38px;
    right: -50%;
    font-size: 20px;
    opacity: 0;
    transition: 0.3s all;
    &::before{
        font-size: 30px;
    }
    span{
        position: absolute;
        left: 50%;
        transform: translate(-63%, 41%);
        font-size: 16px;
    }
}
.activeBag{
    opacity: 1;
}

@media(max-width: 1023px){
    .product{
        &-wrapper{
            grid-template-columns: auto;
        }
    }
}
@media(max-width: 767px){
    .product{
        flex-direction: column;
        &-wrapper{
        grid-template-areas: 
        "title title"
        "descr descr"
        "button button"; 
        }
    }
}
@media(max-width: 424px){
    .product{
        &-image{
            max-width: 50% ;
        }
    }
}
</style>