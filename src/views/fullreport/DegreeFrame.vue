<template>
    <div class='degree-wrapper'>
        <span class='frame-text'>SCALE OF POLLUTION</span>
        <div class="input-area">
            <span class="iconfont input-area__level"
                v-for="(item, index) in 5"
                :key="index"
            >
            <!-- &#xe61f; -->
            <!-- &#xe61b; -->
            <!-- &#xe6a1; -->
            &#xe714;
            <!-- &#xe62d; -->
            <!-- &#xe62c; -->
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DegreeFrame'
}
</script>

<style lang='scss' scoped>
@import "../../style/variables.scss";
@import "../../style/mixins.scss";
    .degree-wrapper {
        display: flex;
        margin-top: 5%;
        flex-direction: column;
        box-sizing: border-box;
        height:1.2rem;
        width: 96%;
        border: 2px solid $content-themeColor;
    }
    .frame-text {
        display: inline-block;
        box-sizing: border-box;
        font-size: .16rem;
        font-weight: bold;
        color: $content-themeColor;
        padding: 1% 0 2% 2.5%;
    }
    .input-area {
        margin-left: 5%;
        width: 90%;
        height: 65%;
        @include flexCenter;
        &__level {
            font-size: .5rem;
            color: #777;
        }
        &__level:nth-child(1), &__level:nth-child(2) {
            color: $content-themeViceColor;
        }
    }
</style>
