<template>
    <div class='wrapper'></div>
</template>

<script>
export default {
    name: 'InputFrame'
}
</script>

<style lang='scss' scoped>
@import "../../style/variables.scss";
@import "../../style/mixins.scss";
    .wrapper {
        position: absolute;
        box-sizing: border-box;
        top: 25%;
        left: 2%;
        height:35%;
        width: 96%;
        background-color: $content-themeColor;
    }
</style>
