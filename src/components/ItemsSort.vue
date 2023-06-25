<template>
    <div class="items-sort ">
        <!-- <div @mouseenter="sortMenuOpen" class="dropdown" :class="[activeClass]"> -->
        <div @mouseover="sortMenuOpen" @mouseleave="sortMenuClose" class="dropdown " :class="[activeClass]">
            <div class="dropdown-trigger">
                <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                <span v-if="!activeSorting.tag">Default sorting</span>
                <span v-else>{{activeSorting.tag}}</span>
                <span class="icon is-small">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
                </button>
            </div>
            <div class="dropdown-menu" id="dropdown-menu " role="menu">
                    <ul class="dropdown-content">
                        <li @click="newSort(list)" class="dropdown-item" 
                          :class="{activeTag: list.id == activeSorting.id}"   v-for="list in sortList" :key="list.id">
                            {{list.tag}}
                        </li>
                        
                    </ul>                
                </div>
            </div>
    </div>
</template>

<script>
export default {
    data() {
        return{
            activeClass: ' '
        }
    },
    methods:{
        sortMenuOpen(){
            this.activeClass = 'is-active'
        },
        sortMenuClose(){
            this.activeClass = ' '
        },
        newSort(list){
            this.$store.commit('changeSort', list)
        }
    },
    computed:{
        sortList(){
            return this.$store.state.sortItem
        },
        activeSorting(){
            return this.$store.state.activeSort
        }
    }
}
</script>

<style lang="scss" scoped>
.items{
    &-sort{
        position: absolute;
        right: 0;
        top: -45px;
        .is-active{

        }
        &:hover{

        }
    }
}

.dropdown{
    &-item{
        cursor: pointer;
        &:hover{
            background-color: rgb(231, 231, 231);
        }
    }
}
.activeTag{
    background-color: rgb(240, 240, 240);
}

@media(max-width: 1023px){
    .items{
        &-sort{
            top: -170px;
        }
    }
}
</style>


