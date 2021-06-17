<template>
    <div class='wrapper'></div>
</template>

<script>
export default {
    name: 'DescFrame'
}
</script>

<style lang='scss' scoped>
@import "../../style/variables.scss";
@import "../../style/mixins.scss";
    .wrapper {
        position: absolute;
        box-sizing: border-box;
        top: 63%;
        left: 2%;
        height:16%;
        width: 96%;
        border: 2px solid $content-themeColor;
    }
</style>
