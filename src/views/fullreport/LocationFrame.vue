<template>
    <div class='loc-wrapper'>
        <div class="loc-wrapper__left">
            <span class='frame-text'>YOUR LOCATION</span>
            <div class="info">
                <span>Click map to select location area or press location icon to fill in automatically</span>
            </div>
            <div class="input-box">
                <input type="text" placeholder="LOCATION CODE">
                <span class="iconfont input-box__icon">&#xe65f;</span>
            </div>
        </div>
        <div class="loc-wrapper__right">
            <div class="map"></div>
        </div>
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
    .loc-wrapper {
        display: flex;
        margin-top: 5%;
        box-sizing: border-box;
        height: 2rem;
        width: 96%;
        border: 2px solid $content-themeColor;
        &__left {
            display: flex;
            flex-direction: column;
            height:100%;
            flex: 60%;
        }
        &__right {
            display: flex;
            align-items: center;
            justify-content: center;
            height:100%;
            flex: 40%;
        }
    }
    .frame-text {
        display: inline-block;
        font-size: .16rem;
        font-weight: bold;
        color: $content-themeColor;
        padding: 1% 0 5% 3.5%;
    }
    .info {
        margin-left: 5%;
        margin-top: 3%;
        width: 95%;
        height: 35%;
        font-size: .14rem;
        color: $content-themeViceColor;
    }
    .input-box {
        margin-left: 7%;
        margin-top: 6%;
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
        width: 90%;
        height: 92%;
        background-image: url('https://trello-attachments.s3.amazonaws.com/60ba1bb04709e232d53f03ce/60cc834215a71802de298567/f82d3ab36b76496afa4480429bb5b4d2/FULL_map.png');
        background-size: cover;
    }
</style>
