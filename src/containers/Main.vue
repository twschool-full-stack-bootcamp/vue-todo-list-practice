<template>
    <div class="Main_Container">
        <input type="text" placeholder="请输入姓名" v-model="name" />
        <button class="Main_StartButton" @click="startHomePage">开始使用</button>
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
</style>

