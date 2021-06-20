<template>
  <div class="streamWrapper">
    <div class="streams">
      <div class="streams__report"
        v-for="item in streamList"
        :key="item.id">
        <div class="streams__report__top">
          <div class="streams__report__pollute">
            <div class="streams__report__pollute__band"></div>
            <span class="streams__report__pollute__title">Pollute Level :</span>
            <div class="streams__report__pollute__level">
              <span class="iconfont"
              v-for="(item, index) in 5"
              :key="index"
              >&#xe714;</span>
            </div>
            <!-- TODO: change 0-nth child's color -->
          </div>
        </div>
        <div class="streams__report__down">
          <div class="streams__report__left">
            <div class="streams__report__left__distance">
              <span class="streams__report__left__distance__title">Distance : </span>
              <span class="streams__report__left__distance__text">{{item.distance}}</span>
            </div>
            <div class="streams__report__left__mark">
              <div class="streams__report__left__mark__profile">
                <svg class="icon" aria-hidden="true">
                  <use :xlink:href="'#' + item.profile"></use>
                </svg>
              </div>
              <span class="streams__report__left__mark__title">{{item.time}} ago </span>
            </div>
          </div>
          <div class="streams__report__right">
            <div class="streams__report__right__btn">
              <router-link :to='{name:"ReportSampleFull"}'>
                <button>Check</button>
              </router-link>
            </div>
            <div class="streams__report__right__tags">
              <span class="iconfont"
                v-for="(innerItem, innerIndex) in item.tags"
                :key="innerIndex"
               v-html="innerItem" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Streams',
  setup () {
    const streamList = [{
      id: 1,
      profile: 'icon-touxiang2',
      pollute: 2,
      distance: '100 m',
      time: '2 mins',
      tags: ['&#xe602;', '&#xe607', '&#xe641;']
    }, {
      id: 2,
      profile: 'icon-peitubiaotouxiang-1-copy-copy',
      pollute: 1,
      distance: '253 m',
      time: '2 days',
      tags: ['&#xe602;', '&#xe607']
    }, {
      id: 3,
      profile: 'icon-touxiang',
      pollute: 3,
      distance: '1 km',
      time: '3 hrs',
      tags: ['&#xe641;']
    }, {
      id: 4,
      profile: 'icon-fish',
      pollute: 2,
      distance: '1.5 km',
      time: '4 days',
      tags: ['&#xe607']
    }, {
      id: 5,
      profile: 'icon-touxiang3',
      pollute: 4,
      distance: '2 km',
      time: '50 mins',
      tags: ['&#xe641;']
    }, {
      id: 6,
      profile: 'icon-touxiang4',
      pollute: 3,
      distance: '2.5 km',
      time: '30 mins',
      tags: ['&#xe602;', '&#xe607', '&#xe641;']
    }]
    return { streamList }
  }
}
</script>

<style lang='scss' scoped>
@import "../../style/variables.scss";
@import "../../style/mixins.scss";
.streamWrapper {
  overflow-y: auto; //scroll overflow control
  position: absolute;
  left: 0;
  top: 12%;
  height: 80%;
  width: 100%;
  background-color: $content-bgColor;
}
.streams {
  position: relative;
  display: flex;
  flex-direction: column;
  left: 5%;
  top: 0;
  padding-bottom: 1.8rem;
  width: 90%;
  height: 200%;
  &__report {
    display: flex;
    flex-direction: column;
    height: 35%;
    width: 100%;
    margin: 0.15rem 0 0.01rem 0;
    background-color: white;
    border-radius: 0.1rem;
    box-shadow: 0.01rem 0.02rem 0.1rem 0.01rem rgba(0, 0, 0, 0.2);
    &__top {
      width: 100%;
      height: .5rem;
    }
    &__pollute {
        width: 100%;
        height: .6rem;
        &__band {
          width: 100%;
          height: .08rem;
          background-color: $content-themeColor;
          border-radius: .1rem .1rem 0 0;
        }
        &__title {
          padding: 2% 3% 0 2%;
          display: inline-block;
          font-size: .15rem;
          color: $content-themeViceColor;
        }
        &__level {
          display: inline-block;
          .iconfont {
            color: #777;
            font-size: .3rem;
          }
          .iconfont:nth-child(1), .iconfont:nth-child(2) {
            color: $content-themeViceColor;
          }
        }
      }
    &__down {
      display: flex;
      width: 100%;
      height: 1rem;
    }
    &__left {
      box-sizing: border-box;
      width: 60%;
      padding-left: 2%;
      &__distance {
        box-sizing: border-box;
        width: 100%;
        height: .3rem;
        color: $content-fontcolor;
        font-size: .15rem;
        padding-top: 5%;
        &__title {
          color: $content-themeViceColor;
        }
      }
      &__mark {
        display: flex;
        align-items:flex-end;
        justify-content: space-between;
        padding-top: 2%;
        width: 60%;
        height: .6rem;
        &__profile {
          font-size: .4rem;
        }
        &__title {
          color: $content-fontcolor;
          font-size: .13rem;
        }
      }
    }
    &__right {
      width: 40%;
      height: 100%;
      &__btn {
        height: 70%;
        width: 100%;
        @include flexCenter;
        button {
          height: 0.26rem;
          width: 0.9rem;
          background-color: $content-themeViceColor;
          border: none;
          border-radius: 0.04rem;
          color: white;
          font-size: 0.12rem;
        }
      }
      &__tags {
      display: flex;
      justify-content: flex-end;
      box-sizing: border-box;
      height: 25%;
      width: 100%;
      span {
        margin-left: 15%;
        margin-right: 5%;
      }
      .iconfont {
        color: $content-themeViceColor;
        font-size: 0.28rem;
      }
    }
    }
  }
}
</style>
