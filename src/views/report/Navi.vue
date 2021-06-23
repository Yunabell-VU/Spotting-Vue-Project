<template>
<!-- Navigation in Report, go to Full report, Voice report, Help -->
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
        <router-link :to='{name: "ReportHelp"}'>
            <div class="help">
            <div class="help__box">
                    <span class="iconfont">&#xe62e;</span>
                </div>
                <span class="help__text">Help</span>
        </div>
        </router-link>
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
        top: 25%;
        left: 0;
        height: 45%;
        width: 100%;
    }
    .navi {
        height: 35%;
        width: 92%;
        margin: 4% 3% 15% 4%;
        background-color: $content-themeColor;
        box-shadow: 0.01rem 0.02rem 0.1rem 0.01rem rgba(0, 0, 0, 0.2);
        @include flexLeftCenter;
        color: white;
        &__icon {
            margin: 0 5% 0 4%;
            font-size: .5rem;
        }
        &__text {
            font-size: .23rem;
            font-weight: bold;
        }
        &__arrow {
            position: absolute;
            right:4%;
            font-size: .5rem;
        }
    }
    .help {
        position: absolute;
        bottom: 8%;
        right:3%;
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
