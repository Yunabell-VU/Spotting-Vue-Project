<template>
    <Header />
    <div class="outer-wrapper">
        <PhotoFrame />
        <LocationFrame />
        <DegreeFrame />
        <DescFrame />
        <div class="submit">
            <button class="submit__save iconfont">&#xe614; SAVE</button>
            <button class="submit__upload iconfont">&#xe61c; UPLOAD</button>
            <span class="submit__instruction">You can Save in Records and Upload later</span>
        </div>
    </div>
    <Docker />
</template>

<script>
import Header from './Header'
import Docker from './Docker'
import PhotoFrame from './PhotoFrame'
import LocationFrame from './LocationFrame'
import DescFrame from './DescFrame'
import DegreeFrame from './DegreeFrame'
export default {
    name: 'FullReport',
    components: { Header, PhotoFrame, LocationFrame, DescFrame, DegreeFrame, Docker }
}
</script>

<style lang="scss" scoped>
@import "../../style/variables.scss";
@import "../../style/mixins.scss";
    .outer-wrapper {
        overflow-y: auto;
        display: flex;
        align-items: center;
        flex-direction: column;
        position: absolute;
        left: 0;
        top: 12%;
        width: 100%;
        height: 120%;
        background-color: $content-bgColor;
    }
    .submit {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 6%;
        margin-bottom: .8rem;
        height: 1.2rem;
        width: 80%;
        button {
            box-sizing: border-box;
            width: 45%;
            height: .4rem;
            border: none;
            background-color: $content-themeColor;
            border-radius: .16rem;
            color: white;
            font-weight: bold;
            font-size: .18rem;
        }
        &__instruction {
            display: inline-block;
            margin-top: 3%;
            width: 100%;
            height: 30%;
            color: $content-themeViceColor;
            font-size: .13rem;
            font-weight: bold;
            text-align: center;
        }
    }
</style>
