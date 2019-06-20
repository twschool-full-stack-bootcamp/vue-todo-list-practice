<template>
<div class="Home_Container">
    <a-row type="flex" justify="space-between" align="middle">
        <a-col :span="4">
            <button @click="backButtonClick()">返回</button>
        </a-col>
        <a-col :span="6">
            <span>登录用户: {{ name }}</span>
        </a-col>
    </a-row>
    <a-row>
        <a-col :span="6">
            <router-link :to="{ name:'todo-list', params: { name }}">Todo列表</router-link>
            <router-link :to="{ name: 'personal', params: { name }}">个人信息</router-link>
        </a-col>
        <a-col :span="18">
            <router-view></router-view>
        </a-col>
    </a-row>
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

