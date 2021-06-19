<template>
  <div class="streamWrapper">
    <div class="streams">
      <div class="streams__report"
        v-for="item in streamList"
        :key="item.id">
        <div class="streams__report__userInfo">
          <div class="streams__report__userInfo__profile">
            <span class="iconfont" :style="item.color">&#xe6bb;</span>
          </div>
          <div class="streams__report__userInfo__name">
            <span>{{item.name}}</span>
          </div>
          <div class="streams__report__userInfo__distance">
            <span>{{item.distance}}</span>
          </div>
        </div>
        <div class="streams__report__tags">
          <span class="iconfont"
            v-for="(innerItem, innerIndex) in item.tags"
            :key="innerIndex"
            v-html="innerItem" />
        </div>
        <div class="streams__report__btn">
          <router-link :to='{name:"ReportSampleFull"}'>
            <button>Check Report</button>
          </router-link>
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
      color: 'color: orange',
      name: 'Light Tower',
      distance: '100 m',
      tags: ['&#xe602;', '&#xe607', '&#xe641;']
    }, {
      id: 2,
      color: 'color: #6eedfd',
      name: 'Lightning',
      distance: '253 m',
      tags: ['&#xe602;', '&#xe607']
    }, {
      id: 3,
      color: 'color: #4bad4b',
      name: 'Superrr',
      distance: '1 km',
      tags: ['&#xe641;']
    }, {
      id: 4,
      color: 'color: orange',
      name: 'Light Tower',
      distance: '1.5 km',
      tags: ['&#xe607']
    }, {
      id: 5,
      color: 'color: #4bad4b',
      name: 'Sponge Grandpa',
      distance: '2 km',
      tags: ['&#xe641;']
    }, {
      id: 6,
      color: 'color: #6eedfd',
      name: 'Lightning',
      distance: '2.5 km',
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
  left: 5%;
  top: 0;
  padding-bottom: 1.8rem;
  width: 90%;
  height: 100%;
  &__report {
    float: left;
    height: 19%;
    width: 100%;
    margin: 0.15rem 0 0.01rem 0;
    background-color: white;
    border-radius: 0.04rem;
    box-shadow: 0.01rem 0.02rem 0.1rem 0.01rem rgba(0, 0, 0, 0.2);
    &__userInfo {
      float: left;
      box-sizing: border-box;
      padding-top: 2%;
      height: 45%;
      width: 60%;
      &__profile {
        float: left;
        @include flexCenter;
        height: 100%;
        width: 30%;
        .iconfont {
          font-size: 0.45rem;
        }
      }
      &__name {
        float: right;
        height: 60%;
        width: 60%;
        @include flexLeftCenter;
        span {
          color: $content-themeViceColor;
          font-weight: bold;
        }
      }
      &__distance {
        float: right;
        height: 40%;
        width: 60%;
        @include flexLeftCenter;
        span {
          color: $content-fontcolor;
        }
      }
    }
    &__tags {
      float: left;
      box-sizing: border-box;
      padding-left: 25%;
      height: 55%;
      width: 65%;
      @include flexLeftCenter;
      span {
        float: left;
        margin-right: 15%;
      }
      .iconfont {
        color: $content-themeViceColor;
        font-size: 0.28rem;
      }
    }
    &__btn {
      float: right;
      height: 98%;
      width: 35%;
      @include flexCenter;
      transform: translateY(-45%);
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
  }
}
</style>
