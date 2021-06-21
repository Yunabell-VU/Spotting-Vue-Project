<template>
<div class="upload-wrapper">
    <ReportModel />
    <div class="info">
        <span class="info__title">You Get 1 Point !</span>
        <div class="info__fish">
            <span class="iconfont">&#xe67a;</span>
        </div>
        <span class="info__instruction">Go to "History" to check your uploaded reports</span>
    </div>
    <HistoryButton />
</div>
</template>

<script>
import ReportModel from '../common/ReportSample.vue'
import HistoryButton from '../common/HistoryBtn.vue'
export default {
  name: 'Content',
  components: { ReportModel, HistoryButton }
}
</script>

<style lang="scss" scoped>
@import "../../../style/variables.scss";
@import "../../../style/mixins.scss";
    .upload-wrapper {
        position: absolute;
        display: flex;
        align-items: center;
        flex-direction: column;
        top: 13%;
        left: 4%;
        height: 75%;
        width: 92%;
    }
    .info {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 5%;
        width: 100%;
        height: 2rem;
        &__title {
            font-size: .18rem;
            font-weight: bold;
            color: $content-themeViceColor;
        }
        &__fish {
            margin-top: 7%;
            width: .6rem;
            height: .6rem;
            border-radius: 50%;
            border: 1px dashed $content-themeColor;
            @include flexCenter;
            .iconfont {
                font-size: .3rem;
                color: $content-themeColor;
            }
        }
        &__instruction {
            margin-top: 12%;
            font-size: .14rem;
            color: $content-themeViceColor;
        }
    }
</style>
