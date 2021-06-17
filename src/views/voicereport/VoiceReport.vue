<template>
    <ReportHeader />
    <InputFrame />
    <Docker />
    <div class="submit"></div>
</template>

<script>
import ReportHeader from './ReportHeader'
import Docker from './Docker'
import InputFrame from './InputFrame'

export default {
    name: 'VoiceReport',
    components: { ReportHeader, InputFrame, Docker }
}
</script>

<style lang="scss" scoped>
@import "../../style/variables.scss";
@import "../../style/mixins.scss";
    .submit {
        position: absolute;
        top:70%;
        left: 10%;
        height:10%;
        width: 80%;
        background-color: burlywood;
    }
</style>
