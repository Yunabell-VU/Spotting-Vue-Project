<template>
    <div class='wrapper'>
        <span class='frame-text'>DESCRIPTION</span>
    </div>
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
    .frame-text {
        display: inline-block;
        font-size: .16rem;
        font-weight: bold;
        color: $content-themeColor;
        padding: 1% 0 5% 2%;
    }
</style>
