<template>
    <div class="btn_wrapper">
        <button @click="this.$router.go(-1)"  class="button is-success is-light ">Back</button>
    </div>
</template>

<style lang="scss" scoped>
.btn_wrapper{
    display: flex;
    .button{
        margin-left: 70px;
    }
}
</style>