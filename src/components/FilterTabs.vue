<template>
    <a-menu
        v-model="tabType"
        mode="horizontal"
    >
        <a-menu-item :key="0"
            @click="clickTab(0)"
         >
            All
        </a-menu-item>
        <a-menu-item :key="1"
            @click="clickTab(1)"
        >
            Undo 
        </a-menu-item>
        <a-menu-item :key="2"
            @click="clickTab(2)"
        >
            Done 
        </a-menu-item>
    </a-menu>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
   name: 'FilterTabs',
   computed: {
       tabType: {
           get() {
              return [this.$store.state.tabType]; 
           },
           set(newValue) {
               this.updateTabType(newValue[0]);
           }
       }
   },
   methods: {
       ...mapMutations([
           'updateTabType',
       ]),
       clickTab(type) {
           this.updateTabType(type);
       }
   }
}
</script>
<style scoped>
.FilterTabs_container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
}
.FilterTabs_container_button-normal {
    border: 1px solid green;
    height: 40px;
    width: 90px;
    margin-left: 8px;
    margin-right: 8px;
    cursor: pointer;
}

.FilterTabs_container_button-selected {
    border: 1px solid green;
    background-color: green;
    height: 40px;
    width: 90px;
    color: white;
    margin-left: 8px;
    margin-right: 8px;
    cursor: pointer;
}
</style>

