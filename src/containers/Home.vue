<template>
<div class="Home_Container">
    <a-row type="flex" justify="space-between" align="middle" class="Home_Toolbar">
        <a-col :span="4">
            <button @click="backButtonClick()">返回</button>
        </a-col>
        <a-col :span="6">
            <span>登录用户: {{ name }}</span>
        </a-col>
    </a-row>
     <a-divider />
    <a-row>
        <a-col :span="6">
            <a-menu
                 v-model="current"
                 mode="vertical"
            >
                <a-menu-item :key="0">
                    <router-link :to="{ name:'todo-list', params: { name }}">Todo列表</router-link>
                </a-menu-item>
                <a-menu-item :key="1">
                    <router-link :to="{ name: 'personal', params: { name }}">个人信息</router-link>
                </a-menu-item>
            </a-menu>
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
    data() {
        return {
            current: [0]
        }
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
    
    .Home_Toolbar {
      margin-top: 32px;
    }

    .Home_Navigation {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>

