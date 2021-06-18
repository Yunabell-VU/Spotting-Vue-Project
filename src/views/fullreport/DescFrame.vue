<template>
    <div class='wrapper'>
        <span class='frame-text'>DESCRIPTION</span>
        <div class="input-area">
            <div class="input-area__text">
                <input type="text" placeholder="Enter text or record your description">
            </div>
            <div class="input-area__voice">
                <span class="iconfont input-area__voice__mac">&#xe66e;</span>
                <span class="iconfont input-area__voice__arrow">&#xe631;</span>
                <span class="input-area__voice__instruction">Keep pressing to record</span>
            </div>
        </div>
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
        box-sizing: border-box;
        font-size: .16rem;
        font-weight: bold;
        color: $content-themeColor;
        padding: 1% 0 2% 2%;
    }
    .input-area {
        margin-left: 5%;
        width: 90%;
        height: 65%;
        &__text {
            width: 100%;
            height: 55%;
            background-color: burlywood;
            input {
                box-sizing: border-box;
                width: 100%;
                height: 100%;
                border: 2px solid $content-themeColor;
                padding-left: 2%;
                font-size: .13rem;
            }
        }
        &__voice {
            margin-top: 1.5%;
            width: 100%;
            height: 42%;
            @include flexLeftCenter;
            color: $content-themeColor;
            &__mac {
                font-size: .25rem;
            }
            &__instruction {
                font-weight: bold;
            }
        }
    }
</style>
