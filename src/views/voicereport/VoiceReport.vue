<template>
    <Header content="Upload"/>
    <InputFrame />
    <Docker :content="idx"/>
    <div class="submit">
        <span class="submit__instruction">You can SAVE in "History" and UPLOAD later</span>
        <button class="submit__save iconfont">&#xe614; SAVE</button>
        <button class="submit__upload iconfont">&#xe61c; UPLOAD</button>
    </div>
</template>

<script>
import Header from '../../components/Header.vue'
import Docker from '../../components/Docker.vue'
import InputFrame from './InputFrame'

export default {
    name: 'VoiceReport',
    components: { Header, InputFrame, Docker },
    data () {
        return { idx: 2 }
    }
}
</script>

<style lang="scss" scoped>
@import "../../style/variables.scss";
@import "../../style/mixins.scss";
    .submit {
        position: absolute;
        top:65%;
        left: 10%;
        height:10%;
        width: 80%;
        &__instruction {
            display: inline-block;
            width: 100%;
            height: 30%;
            // padding-top: 2%;
            margin-bottom: 4%;
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
