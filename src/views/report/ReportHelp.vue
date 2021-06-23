<template>
<!-- Help page in Report -->
    <Header content="Help"/>
    <div class="contents">
        <div class="contents__full content">
            <div class="content__left">
                <div class="content__left__iconbox">
                    <span class="iconfont">&#xe60e;</span>
                </div>
                <span class="content__left__title">Full Report</span>
            </div>
            <div class="content__right">
                <span>You can use this function to upload all relevant information about the rubbish you find, including location, photos voice or text descriptions and contamination level.</span>
                <span class="iconfont">&#xe603;</span>
            </div>
        </div>
        <div class="contents__voice content">
            <div class="content__left">
                <div class="content__left__iconbox">
                    <span class="iconfont">&#xe659;</span>
                </div>
                <span class="content__left__title">Voice Only</span>
            </div>
            <div class="content__right">
                <span>You can use this function to record your voice description of where the rubbish is located.</span>
                <span class="iconfont">&#xe603;</span>
            </div>
        </div>
        <router-link :to='{name: "REPORT"}'>
            <div class="back">
            <div class="back__box">
                    <span class="iconfont">&#xe682;</span>
                </div>
                <span class="back__text">Back</span>
        </div>
        </router-link>
    </div>
    <Docker :content="idx"/>
</template>

<script>
import Header from '../../components/Header.vue'
import Docker from '../../components/Docker.vue'

export default {
  name: 'ReportHelp',
  components: { Header, Docker },
  data () {
        return { idx: 2 }
    }
}
</script>

<style lang='scss' scoped>
@import "../../style/variables.scss";
@import "../../style/mixins.scss";
.contents {
    position: absolute;
    top: 12%;
    left: 0;
    bottom: 0;
    right: 0;
    &__full {
        height: 30%;
        border-bottom: 2px dashed $content-themeColor;
    }
    &__voice {
        height: 30%;
        border-bottom: 2px dashed $content-themeColor;
    }
}
.content {
    display: flex;
    &__left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 40%;
        &__iconbox {
            width: 1rem;
            height: 1rem;
            background-color: $content-themeColor;
            @include flexCenter;
            .iconfont {
                font-size: .6rem;
                color: white;
            }
        }
        &__title {
            margin-top: 2%;
            font-size: .18rem;
            color: $content-fontcolor;
        }
    }
    &__right {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 60%;
        span {
            padding: 0 5%;
            font-size: .15rem;
            color: $content-fontcolor;
        }
        .iconfont {
            text-align: right;
            color: $content-themeViceColor;
            font-size: .18rem;
            font-weight: bold;
        }
    }
}
.back {
        position: absolute;
        bottom: 9%;
        left:3%;
        height: .8rem;
        width: .5rem;
        &__box {
            box-sizing: border-box;
            height: .5rem;
            width: .5rem;
            // background-color: $content-themeColor;
            @include flexCenter;
            .iconfont {
                font-size: .4rem;
                color:$content-themeViceColor;
            }
        }
        &__text {
            display: inline-block;
            width: 100%;
            height: .2rem;
            font-size: .15rem;
            text-align: center;
            color: $content-fontcolor;
        }
    }
</style>
