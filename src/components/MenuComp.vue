<template>
    <aside class="menu">
        <ul class="menu-list box mr-2 animate__animated animate__backInLeft" :class="{open: menuCategory}">
            <li @click="changeCategory(i)"
                v-for="i in list" :key="i.id" 
                class="menu-list_item box p-3"
                :class="{ active: activeTag.id == i.id }"> 
                {{ i.tag }}
            </li>
            <div @click="openCategoryMenu" class="divider"> <i class="bi bi-chevron-compact-down"></i> </div>
        </ul>
    </aside>
</template>



<script>
export default {
    data() {
        return{
            menuCategory: false,
        }
    },
    methods:{
        changeCategory(item){
            this.$store.commit('changeActiveTag', item)
            this.$emit('fetch-new-tag', item.link)
        },
        openCategoryMenu(){
            this.menuCategory = !this.menuCategory
        }
    },
    computed:{
        activeTag(){
            return this.$store.state.activeTag
        },
        list(){
            return this.$store.state.menuList
        }
    }
}
</script>


<style lang="scss" scoped>
.menu{
    grid-area: menu;
    transition: 0.3s all;
    ul{
        transition: 0.3s all;
        position: relative;
        li{
            cursor: pointer;
            margin: 10px 0;
        }
    }
}

.active{
    color: #deb887;
    font-weight: 600;
    background-color: #f0f8ff;
    transition: 0.2s all;
}
.divider{
    display: none;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 11px;
    width: 100%;
    border-radius: 4px 4px 0 0;
    background-color: #fff;
    box-shadow: 3px 2px 3px #d3d3d3, -3px 2px 3px #d3d3d3;
}


@media(max-width: 1023px){
    .menu{
        margin-left: 8px;
        ul{
            display: flex;
            column-gap: 15px;
            row-gap: 5px;
            justify-content: flex-start;
            flex-wrap: wrap;
            // width: 700px;
            // min-width: 400px;
            li{
                margin: 0;
            }
        }
    }
}

@media(max-width: 424px){
    .menu{
        transition: 0.5s all;
        ul{
            row-gap: 5px;
            height: 80px;
            overflow: hidden;
            transition: 0.5s all;
        }
    }

    .divider{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .open{
        height: auto !important;
    }
}
</style>