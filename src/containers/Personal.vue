<template>
    <div>
        <div>
            <img src="../assets/logo.png" />
        </div>
       <div>姓名：{{ name }}</div>
       <div>电话：12344253453</div>
    </div>
</template>
<script>
export default {
    props: {
        name: String,
    }
}
</script>
