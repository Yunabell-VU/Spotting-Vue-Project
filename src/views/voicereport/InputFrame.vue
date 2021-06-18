<template>
    <div class='wrapper'>
        <div class="voicebar">
            <div class="voicebar__progress"></div>
            <div class="voicebar__remain"></div>
        </div>
        <div class="buttons">
            <span class="iconfont buttons__play">&#xe620;</span>
            <span class="iconfont buttons__record">&#xe805;</span>
        </div>
    </div>
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
        left: 5%;
        height:35%;
        width: 90%;
        // background-color: $content-themeColor;
    }
    .voicebar {
        box-sizing: border-box;
        width: 100%;
        height: 12%;
        border: 1px solid #777;
        background-color: rgba($color: #4BAD4B, $alpha: .1);
        @include flexLeftCenter;
        &__progress {
            float: left;
            margin-left: 5%;
            width:10%;
            height:10%;
            background-color: $content-themeColor;
            box-shadow: inset 0 -1px 0 rgba(0,0,0,.1) ;
        }
        &__remain{
            float: left;
            width:80%;
            height:10%;
            background-color: white;
            box-shadow: inset 0 1px 2px rgba(0,0,0,.1) ;
        }
    }
    .buttons {
        position: relative;
        width:100%;
        height: 80%;
        &__play {
            position: absolute;
            top: 5%;
            left:50%;
            margin-left: -.2rem;
            font-size: .4rem;
            color:$content-themeColor;
        }
        &__record {
            position: absolute;
            top: 40%;
            left:50%;
            margin-left: -.5rem;
            font-size: 1rem;
            color:$content-themeViceColor;
        }
    }
</style>
