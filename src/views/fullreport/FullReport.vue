<template>
    <Header />
    <PhotoFrame />
    <LocationFrame />
    <DescFrame />
    <Docker />
    <div class="submit">
        <span class="submit__instruction">You can Save in Records and Upload later</span>
        <button class="submit__save iconfont">&#xe614; SAVE</button>
        <button class="submit__upload iconfont">&#xe61c; UPLOAD</button>
    </div>
</template>

<script>
import Header from './Header'
import Docker from './Docker'
import PhotoFrame from './PhotoFrame'
import LocationFrame from './LocationFrame'
import DescFrame from './DescFrame'
export default {
    name: 'FullReport',
    components: { Header, PhotoFrame, LocationFrame, DescFrame, Docker }
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
        &__instruction {
            display: inline-block;
            width: 100%;
            height: 30%;
            // padding-top: 2%;
            margin-bottom: 2%;
            color: $content-themeViceColor;
            font-size: .13rem;
            font-weight: bold;
            text-align: center;
        }
        button {
            box-sizing: border-box;
            width: 45%;
            height: 60%;
            border: none;
            background-color: $content-themeColor;
            border-radius: .16rem;
            color: white;
            font-weight: bold;
            font-size: .18rem;
        }
        &__upload {
            float: right;
        }
    }
</style>
