<template>
    <div class='wrapper'>
        <span class='frame-text'>YOUR LOCATION</span>
        <div class="info">
            <span>Press map to select location area or press location icon to fill in automatically</span>
        </div>
        <div class="input-box">
            <input type="text" placeholder="LOCATION CODE">
            <span class="iconfont input-box__icon">&#xe65f;</span>
        </div>
        <div class="map"></div>
    </div>
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
    .frame-text {
        display: inline-block;
        font-size: .16rem;
        font-weight: bold;
        color: $content-themeColor;
        padding: 1% 0 5% 2%;
    }
    .info {
        position: absolute;
        top:25%;
        left:4%;
        width: 55%;
        height: 35%;
        font-size: .14rem;
        color: $content-themeViceColor;
    }
    .input-box {
        position:absolute;
        top:70%;
        left:4%;
        width: 55%;
        height: 25%;
        @include flexLeftCenter;
        input {
            padding-left: 5%;
            height: 60%;
            border: 2px solid $content-themeColor;
        }
        .iconfont {
            display: inline-block;
            margin-left: 5%;
            font-size: .3rem;
            color: $content-themeColor;
        }
    }
    .map {
        position:absolute;
        right:2%;
        top: 5%;
        width: 35%;
        height: 90%;
        background-color: cadetblue;
    }
</style>
