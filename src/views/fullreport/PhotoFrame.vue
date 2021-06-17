<template>
    <div class='wrapper'>
        <span class='frame-text'>CHOOSE PHOTOS TO UPLOAD</span>
        <div class="photos">
            <div class="photos__image"></div>
            <div class="photos__image"></div>
        </div>
    </div>
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
        height:22%;
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
    .photos {
        margin-left: 5%;
        width: 90%;
        height: 60%;
        &__image {
            float: left;
            margin-right: 8%;
            height: .8rem;
            width: .8rem;
            background-color: cadetblue;
        }
    }
</style>
