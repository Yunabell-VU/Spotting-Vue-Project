<template>
<div class="upload-wrapper">
    <ReportModel />
    <div class="info">
        <span class="info__title">Your Report is Saved !</span>
        <span class="info__text">Go to "History" to UPLOAD it at any time.</span>
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
        margin-top: 20%;
        width: 100%;
        height: 2rem;
        color: $content-themeViceColor;
        &__title {
            font-size: .19rem;
            font-weight: bold;
        }
        &__text {
            text-align: center;
            margin-top: 15%;
            width: 100%;
            font-size: .16rem;
            font-weight: bold;
        }
    }
</style>
