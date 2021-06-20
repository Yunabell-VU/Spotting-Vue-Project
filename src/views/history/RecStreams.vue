<template>
    <div class="streamWrapper">
    <div class="streams">
      <div class="streams__report"
        v-for="item in 2"
        :key="item.id">
        <div class="streams__report__band">
            <span>Processing</span>
        </div>
        <div class="streams__report__content">
            <div class="streams__report__content__left">
                <div class="streams__report__content__left__picbox">
                    <div class="streams__report__content__left__picbox__pic"></div>
                    <div class="streams__report__content__left__picbox__date">
                        <span class="iconfont">&#xe653;14-6-2021</span>
                    </div>
                </div>
            </div>
            <div class="streams__report__content__right">
                <div class="streams__report__content__right__loc">
                    <span class="streams__report__content__right__loc__title">Location : </span>
                    <div class="streams__report__content__right__loc__area">
                        <span>E1</span>
                    </div>
                </div>
                <div class="streams__report__content__right__rsv">
                    <span class="streams__report__content__right__rsv__title">Reserved By : </span>
                    <div class="streams__report__content__right__rsv__profile">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-touxiang5"></use>
                        </svg>
                        <span class="streams__report__content__right__rsv__name">Light Tower </span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecStreams'
}
</script>

<style lang="scss" scoped>
@import "../../style/variables.scss";
@import "../../style/mixins.scss";
.streamWrapper {
  overflow-y: auto; //scroll overflow control
  position: absolute;
  left: 0;
  top: 20%;
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
  height: 100%;
  &__report {
    display: flex;
    flex-direction: column;
    height: 35%;
    width: 100%;
    margin: 0.15rem 0 0.01rem 0;
    background-color: white;
    border-radius: 0.1rem;
    box-shadow: 0.01rem 0.02rem 0.1rem 0.01rem rgba(0, 0, 0, 0.2);
    &__band {
        width: 100%;
        height: 13%;
        background-color: rgb(38, 131, 238);
        border-radius: .1rem .1rem 0 0;
        text-align: left;
        span {
            display: inline-block;
            padding-left: 3%;
            padding-top: 1%;
            font-size: .15rem;
            color: white;
            font-weight: bold;
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
                background-image: url("https://trello-attachments.s3.amazonaws.com/60ba1bb04709e232d53f03ce/60cdef7d4ca18b297455d3e0/6db197358383db90a4a0a5b07d773a6b/%E6%B5%B7%E6%BB%A9%E5%9E%83%E5%9C%BE3.jpeg");
                background-size: cover;
            }
            &__date {
                box-sizing: border-box;
                height: .3rem;
                border-top: 1px solid #777;
                @include flexCenter;
                font-size: .2rem;
                font-weight: bold;
                color: rgb(38, 131, 238);
                .iconfont {
                    font-size: .21rem;
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
                font-size: .21rem;
            }
            &__area {
                margin-left: 8%;
                width: .5rem;
                height: .5rem;
                background-color: $content-themeViceColor;
                @include flexCenter;
                span {
                    font-size: .3rem;
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
                font-size: .15rem;
            }
            &__profile {
                margin-top: 2%;
                margin-left: 8%;
                width: 2rem;
                height: .5rem;
                svg {
                    font-size: .45rem;
                }
                span {
                    font-size: .14rem;
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
