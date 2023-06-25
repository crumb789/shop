<template>
    <div class="products">
        <!-- <h3 class="title is-3">product card</h3> -->
        <product-item></product-item>
    </div>
</template>

<script>
import ProductItem from '@/components/ProductItem.vue'

export default {
  components: { ProductItem },
    name:'product-page',
    data() {
        return{

        }
    },
    
}
</script>

<style lang="scss" scoped>
.products{

}
</style>