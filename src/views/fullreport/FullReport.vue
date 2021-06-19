<template>
    <Header content="Upload" />
    <div class="outer-wrapper">
        <PhotoFrame />
        <LocationFrame />
        <DegreeFrame />
        <DescFrame />
        <div class="submit">
            <button class="submit__save iconfont"
            @click="handleNavigation('SavedRep')"
            >&#xe614; SAVE</button>
            <button class="submit__upload iconfont"
            @click="handleNavigation('UploadFullRep')"
            >&#xe61c; UPLOAD</button>
            <span class="submit__instruction">You can SAVE in "History" and UPLOAD later</span>
        </div>
    </div>
    <Docker :content="idx"/>
</template>

<script>
import { useRouter } from 'vue-router'
import Header from '../../components/Header.vue'
import Docker from '../../components/Docker.vue'
import PhotoFrame from './PhotoFrame'
import LocationFrame from './LocationFrame'
import DescFrame from './DescFrame'
import DegreeFrame from './DegreeFrame'
export default {
    name: 'FullReport',
    components: { Header, PhotoFrame, LocationFrame, DescFrame, DegreeFrame, Docker },
    setup () {
        const router = useRouter()
        const handleNavigation = (text) => {
          router.push({ name: text })
        }
        return { handleNavigation }
    },
    data () {
        return { idx: 2 }
    }
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
