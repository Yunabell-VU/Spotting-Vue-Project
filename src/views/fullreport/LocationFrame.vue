<template>
    <div class='wrapper'></div>
</template>

<script>
export default {
    name: 'LocationFrame'
}
</script>

<style lang='scss' scoped>
@import "../../style/variables.scss";
@import "../../style/mixins.scss";
    .wrapper {
        position: absolute;
        box-sizing: border-box;
        top: 37%;
        left: 2%;
        height:25%;
        width: 96%;
        border: 2px solid $content-themeColor;
    }
</style>
