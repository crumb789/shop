<template>
    <div class="items-placeholder placeholder m-4">
        Loading... 
        <i class="bi bi-arrow-clockwise load"></i>
    </div>
</template>

<style lang="scss" scoped>
.placeholder{
    grid-area: itemsCards;
}
.load{
    display: block;
    animation: loading 4s infinite ease ;
    font-size: 20px;
}

@keyframes loading{
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
}
</style>