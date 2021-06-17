<template>
    <ReportHeader />
    <PhotoFrame />
    <LocationFrame />
    <DescFrame />
    <Docker />
    <div class="submit"></div>
</template>

<script>
import ReportHeader from './ReportHeader'
import Docker from './Docker'
import PhotoFrame from './PhotoFrame'
import LocationFrame from './LocationFrame'
import DescFrame from './DescFrame'
export default {
    name: 'FullReport',
    components: { ReportHeader, PhotoFrame, LocationFrame, DescFrame, Docker }
}
</script>

<style lang="scss" scoped>
@import "../../style/variables.scss";
@import "../../style/mixins.scss";
    .submit {
        position: absolute;
        top:80%;
        left: 10%;
        height:10%;
        width: 80%;
        background-color: burlywood;
    }
</style>
