<template>
    <div class="wrapper">
        <div class="navis">
            <div class="navi"
            v-for="(item, index) in naviList"
            :key="index"
            @click="handleNavigation(index)">
                <span class="iconfont navi__icon" v-html="item.icon"></span>
                <span class="navi__text">{{item.text}}</span>
                <span class="iconfont navi__arrow">&#xe692;</span>
            </div>
        </div>
        <div class="help">
            <div class="help__box">
                <span class="iconfont">&#xe62e;</span>
            </div>
            <span class="help__text">Help</span>
        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  name: 'Navi',
  setup () {
      const naviList = [
          {
              icon: '&#xe60e;',
              text: 'Make your Report',
              destination: ''
          },
          {
              icon: '&#xe659;',
              text: 'Voice Input Only',
              destination: ''
          }
      ]
      const router = useRouter()
      const handleNavigation = (index) => {
           if (index === 0) {
               router.push({ name: 'ReportFull' })
           } else {
               router.push({ name: 'ReportVoice' })
           }
      }
      return { naviList, handleNavigation }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/variables.scss";
@import "../../style/mixins.scss";
    .wrapper{
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: $content-bgColor;
    }
    .navis {
        position: absolute;
        top: 26%;
        left: 0;
        height: 45%;
        width: 100%;
    }
    .navi {
        height: 26%;
        width: 100%;
        margin-top:2%;
        margin-bottom: 10%;
        background-color: $content-themeColor;
        box-shadow: 0.01rem 0.02rem 0.1rem 0.01rem rgba(0, 0, 0, 0.2);
        @include flexLeftCenter;
        &__icon {
            margin: 0 5% 0 4%;
            font-size: .5rem;
            color: #000;
        }
        &__text {
            font-size: .2rem;
        }
        &__arrow {
            position: absolute;
            right:4%;
            font-size: .5rem;
            color: white;
        }
    }
    .help {
        position: absolute;
        bottom: 10%;
        right:3%;
        height: .8rem;
        width: .6rem;
        &__box {
            box-sizing: border-box;
            height: .6rem;
            width: .6rem;
            border: 1px solid #333;
            background-color: $content-themeColor;
            @include flexCenter;
            .iconfont {
                font-size: .5rem;
            }
        }
        &__text {
            display: inline-block;
            width: 100%;
            height: .2rem;
            font-size: .15rem;
            text-align: center;
        }
    }
</style>
