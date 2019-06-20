<template>
    <div class="Main_Container">
        <a-input 
            type="text"
            placeholder="请输入姓名" 
            v-model="name" 
            class="Main_Input"
         />
        <a-button class="Main_StartButton" type="primary" @click="startHomePage">开始使用</a-button>
        <router-link to="/home"></router-link>
    </div> 
</template>
<script>
export default {
    data() {
        return {
            name: '',
        }
    },
    methods: {
        startHomePage() {
           this.$router.push({ name: "home", params: { name: this.name }}); 
        }
    }
}
</script>

<style scoped>
    .Main_Container {
        display: flex;
        flex-direction: column;
        background-color: green;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    .Main_StartButton {
        margin-top: 32px;
    }

    .Main_Input {
        width: 200px;
    }
</style>

