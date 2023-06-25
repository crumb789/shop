<template>
    <div class="card animate__animated animate__fadeIn">
        <div class="product-descr">
            <div class="card-title subtitle is-6" :title="item.title">
                <router-link :to="`/product/${item.id}`">
                    {{item.title}}
                </router-link> 
            </div>
            <div class="product-descr_price is-bold pl-2 "> 
                <strong>${{ item.price }} </strong>
                <span class="mr-2"> 
                    <i v-if="!item.quantity" @click="addToBasket( item )" class="bi bi-bag-plus"></i>
                    <i v-if="item.quantity" class="bi bi-bag-check animate__animated animate__flipInX"></i>
                </span>
            </div>
            <div class="product-descr_rating">
                <div class="product-descr stars pl-2">
                    <div class="one">
                        <i v-if="ratingStars >= 1" class="bi bi-star-fill rate-fill"></i>
                        <i v-else class="bi bi-star"></i>
                    </div>
                    <div class="two">
                        <i v-if="ratingStars >= 2" class="bi bi-star-fill rate-fill"></i>
                        <i v-else class="bi bi-star"></i>
                    </div>
                    <div class="three">
                        <i v-if="ratingStars >= 3" class="bi bi-star-fill rate-fill"></i>
                        <i v-else class="bi bi-star"></i>
                    </div>
                    <div class="four">
                        <i v-if="ratingStars >= 4" class="bi bi-star-fill rate-fill"></i>
                        <i v-else class="bi bi-star"></i>
                    </div>
                    <div class="five">
                        <i v-if="ratingStars == 5" class="bi bi-star-fill rate-fill"></i>
                        <i v-else class="bi bi-star"></i>
                    </div>
                    <p class="ml-2">{{ item.rating.count }}</p>
                </div>
            </div>
            <!-- <div class="product-descr_rating-count">Ratings {{ item.rating.count }} </div> -->
        </div>
        <div class="card-img ">
            <img :src="item.image" alt="">
        </div>
    </div>
</template>


<script>
export default {
    name:'item-card',
    props:{
        item:{
            Boolean: true
        }
    },
    data() {
        return{
            
        }
    },
    methods:{
        addToBasket( item){
            this.$store.commit('pushToBasket',  item)
        }
    },
    computed:{
        ratingStars(){
            return Math.round(this.item.rating.rate)
        },
        titleCard(){
            // return this.$store.state.itemsFake
        },
        
    }
}
</script>


<style lang="scss" scoped>
.card{
    position: relative;
    padding: 5px 5px 16px 5px;
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;

    // background-color: #36363600;
    // /* opacity: 0.1; */
    // background-image: repeating-radial-gradient( circle at 0 0, transparent 0, #36363600 14px ), repeating-linear-gradient( #b5b6c255, #b5b6c2 );
    &-img{
        max-height: 200px;
        padding: 25px;
        // position: absolute;
    }
    &-title{
        background-color: #f5f5dca1;
        padding: 5px 0;
        border-radius: 5px;
        height: 30px;
        overflow: hidden;
        line-height: 22px;
        a{
            &:hover{
                text-decoration: underline;
            }
        }
    }
}
.product{
    &-descr{
        &_price{
            text-align: left;
            display: flex;
            justify-content: space-between;
            span{
                cursor: pointer;
                i{
                    color: slateblue;
                }
            }
            
        }
    }
}

.rate{
    &-fill{
        color: orange;
    }
}

.stars{
    display: flex;
    justify-content: flex-start;
    gap: 2px;
}


@media(max-width: 1023px){
    .card{
        &-img{
            img{
                width: 60%;
            }
        }
    }
}
@media(max-width: 767px){
    .card{
        &-img{
            img{
                width: 40%;
            }
        }
    }
}
@media(max-width: 424px){
    .card{
        &-img{
            img{
                width: 70%;
            }
        }
    }
}
@media(max-width: 374px){
    .card{
        &-img{
            img{
                width: 90%;
            }
        }
    }
}


</style>