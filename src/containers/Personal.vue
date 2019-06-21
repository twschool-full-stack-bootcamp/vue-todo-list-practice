<template>
    <div>
        <div class="Personal_Avatar_Container">
             <a-avatar :size="128" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"  />
        </div>
        <a-card title="信息">
            <p>姓名：{{ name }}</p>
            <p>电话：12344253453</p>
        </a-card>
    </div>
</template>
<script>
export default {
    props: {
        name: String,
    }
}
</script>
<style scoped>
    .Personal_Avatar_Container {
        margin-bottom: 32px;
    }
</style>

