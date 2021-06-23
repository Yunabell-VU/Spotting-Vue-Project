<template>
<!-- Cleaned Section -->
  <div class="streamWrapper">
    <div class="instruction">
      <span class="instruction__info">Spots completed cleaning by you and</span>
      <span class="instruction__info">your uploaded spots cleaned by others</span>
      <span class="iconfont instruction__text">&#xe664; : check the report</span>
      <span class="iconfont instruction__text">&#xe65e; : share your cleaned spots</span>
    </div>
    <div class="streams">
      <div class="streams__report" v-for="item in 2" :key="item.id">
        <div class="streams__report__content">
          <div class="streams__report__content__left">
            <div class="streams__report__content__left__picbox">
              <div class="streams__report__content__left__picbox__pic" title="Photo"></div>
              <div class="streams__report__content__left__picbox__date">
                <span class="iconfont">&#xe653;12-6-2021</span>
              </div>
            </div>
          </div>
          <div class="streams__report__content__right">
            <div class="streams__report__content__right__loc">
              <span class="streams__report__content__right__loc__title"
                >Location :
              </span>
              <div class="streams__report__content__right__loc__area">
                <span>E6</span>
              </div>
            </div>
            <div class="streams__report__content__right__rsv">
              <span class="streams__report__content__right__rsv__title"
                >Cleaned By :
              </span>
              <div class="streams__report__content__right__rsv__profile">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-touxiang2"></use>
                </svg>
                <span class="streams__report__content__right__rsv__name"
                  >ADoge
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="streams__report__band">
          <span class="streams__report__band__title">Cleaned</span>
          <div class="streams__report__band__icons">
            <span class="iconfont" title="Check Cleaned Report">&#xe664;</span>
            <span class="iconfont" title="Share Cleaned Report">&#xe65e;</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClStreams'
}
</script>

<style lang="scss" scoped>
@import "../../style/variables.scss";
@import "../../style/mixins.scss";
.streamWrapper {
  overflow-y: auto; //scroll overflow control
  position: absolute;
  left: 0;
  top: 0.3rem;
  height: 80%;
  width: 100%;
  background-color: $content-bgColor;
}
.instruction {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 5%;
  width: 100%;
  height: 1.1rem;
  border-bottom: 2px dashed rgba(119, 119, 119, 0.472);
//   font-weight: bold;
  color: $content-fontcolor;
  &__info {
    font-size: 0.16rem;
  }
  &__text {
      font-size: .15rem;
  }
}
.streams {
  position: relative;
  display: flex;
  flex-direction: column;
  left: 2%;
  top: 0;
  padding-top: 0.15rem;
  width: 94%;
  height: 100%;
  &__report {
    display: flex;
    flex-direction: column;
    height: 40%;
    width: 100%;
    margin: 0.15rem 0 0.01rem 0;
    background-color: white;
    border-radius: 0.05rem;
    box-shadow: 0.01rem 0.02rem 0.1rem 0.01rem rgba(0, 0, 0, 0.2);
    &__band {
      width: 100%;
      height: 18%;
      background-color: rgb(46, 185, 209);
      border-radius: 0 0 0.05rem 0.05rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      span {
        display: inline-block;
        padding-left: 3%;
        padding-top: 1%;
        font-size: 0.16rem;
        color: white;
      }
      &__title {
        font-weight: bold;
      }
      &__icons {
        display: flex;
        justify-content: space-between;
        padding-right: 5%;
        width: 35%;
        .iconfont {
          font-size: 0.25rem;
        }
      }
    }
    &__content {
      display: flex;
      width: 100%;
      height: 87%;
      &__left {
        width: 45%;
        height: 100%;
        @include flexCenter;
        &__picbox {
          display: flex;
          flex-direction: column;
          width: 1.3rem;
          height: 1.3rem;
          border: 1px solid #777;
          &__pic {
            height: 1rem;
            background-image: url("https://trello-attachments.s3.amazonaws.com/60ba1bb04709e232d53f03ce/60cdef7d4ca18b297455d3e0/874f963014619a12aacdd2b91a89efe0/%E5%B9%B2%E5%87%80%E6%B5%B7%E6%BB%A91.jpg");
            background-size: cover;
          }
          &__date {
            box-sizing: border-box;
            height: 0.3rem;
            border-top: 1px solid #777;
            @include flexCenter;
            font-size: 0.2rem;
            font-weight: bold;
            color: rgb(46, 185, 209);
            .iconfont {
              font-size: 0.18rem;
            }
          }
        }
      }
      &__right {
        width: 55%;
        height: 100%;
        &__loc {
          display: flex;
          align-items: center;
          width: 100%;
          height: 45%;
          &__title {
            color: $content-themeViceColor;
            font-size: 0.21rem;
          }
          &__area {
            margin-left: 8%;
            width: 0.5rem;
            height: 0.5rem;
            background-color: $content-themeViceColor;
            @include flexCenter;
            span {
              font-size: 0.3rem;
              color: white;
            }
          }
        }
        &__rsv {
          box-sizing: border-box;
          width: 100%;
          height: 55%;
          padding-top: 5%;
          &__title {
            color: $content-themeViceColor;
            font-size: 0.15rem;
          }
          &__profile {
            margin-top: 2%;
            margin-left: 8%;
            width: 2rem;
            height: 0.5rem;
            svg {
              font-size: 0.45rem;
            }
            span {
              font-size: 0.14rem;
              font-weight: bold;
              color: $content-fontcolor;
              margin-left: 5%;
            }
          }
        }
      }
    }
  }
}
</style>
