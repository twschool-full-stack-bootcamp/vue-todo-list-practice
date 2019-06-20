<template>
<div class="Home_Container">
    <div class="Home_Navigation">
        <router-link :to="{ name:'todo-list', params: { name }}">Todo列表</router-link>
        <router-link :to="{ name: 'personal', params: { name }}">个人信息</router-link>
    </div>
    <div class="Home_RightContent">
        <div>
            <button class="Home_BackButton" @click="backButtonClick()">返回</button>
            <span>登录用户: {{ name }}</span>
        </div>
        <router-view></router-view>
    </div>
</div>
</template>
<script>
export default {
    props: {
        name: String,
    },
    methods: {
        backButtonClick() {
            this.$router.replace("/");
        }
    }
}
</script>

<style scoped>
    .Home_Container {
        display: flex;
        justify-content: flex-start;
        height: 100%;
    }

    .Home_RightContent {
        text-align: left;
        width: 90%;
    }
    
    .Home_BackButton {
      margin-bottom: 32px;
    }

    .Home_Navigation {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>

