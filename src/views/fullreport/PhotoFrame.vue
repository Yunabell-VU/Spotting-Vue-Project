<template>
    <div class='wrapper'></div>
</template>

<script>
export default {
    name: 'PhotoFrame'
}
</script>

<style lang='scss' scoped>
@import "../../style/variables.scss";
@import "../../style/mixins.scss";
    .wrapper {
        position: absolute;
        box-sizing: border-box;
        top: 13%;
        left: 2%;
        height:23%;
        width: 96%;
        border: 2px solid $content-themeColor;
    }
</style>
