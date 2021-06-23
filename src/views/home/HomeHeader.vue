<template>
<!-- Header of Home, include Logo, Language, Help, Contact -->
  <div class="headerWrapper">
    <div class="header">
      <div class="header__logo">SPOTTING</div>
      <div class="header__services">
        <div class="header__services__flag spain" title="Spanish"></div>
        <div class="header__services__flag uk" title="English"></div>
        <div class="header__services__contact">
          <div class="iconfont"
          @click= "handleHelpClick" title="Help"
          >&#xe63f;</div>
          <router-link :to='{name:"Contact"}'>
            <div class="iconfont" title="Contact">&#xe637;</div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <teleport to="body">
    <div class="help-mask"
    v-show="show"
    @click= "handleHelpClick">
    <div class="help-mask__top">
      <div class="help-mask__top__arrows help-mask__arrows">
        <span class="iconfont">&#xe67d;</span>
        <span class="iconfont">&#xe67d;</span>
      </div>
      <div class="help-mask__top__text help-mask__text">
        <span>Switch between languages</span>
        <span>Need help? Contact us!</span>
      </div>
    </div>
    <div class="help-mask__med"></div>
    <div class="help-mask__btm">
      <div class="help-mask__btm__high">
        <div class="help-mask__btm__high__text help-mask__text">
          <span>Report discovered rubbish</span>
        </div>
        <div class="help-mask__btm__high__arrows help-mask__arrows">
          <span class="iconfont">&#xe67c;</span>
        </div>
      </div>
      <div class="help-mask__btm__mid">
        <div class="help-mask__btm__mid__text help-mask__text">
          <span>Your reports history</span>
          <span>Exchange points</span>
        </div>
        <div class="help-mask__btm__mid__arrows help-mask__arrows">
          <span class="iconfont">&#xe67c;</span>
          <span class="iconfont">&#xe67c;</span>
        </div>
      </div>
      <div class="help-mask__btm__low">
        <div class="help-mask__btm__low__text help-mask__text">
          <span>Trash Spots</span>
          <span>Your Account</span>
        </div>
        <div class="help-mask__btm__low__arrows help-mask__arrows">
          <span class="iconfont">&#xe67c;</span>
          <span class="iconfont">&#xe67c;</span>
        </div>
      </div>
    </div>
    </div>
  </teleport>
</template>

<script>
export default {
  name: 'HomeHeader',
  data () {
    return {
      show: false
    }
  },
  methods: {
    handleHelpClick () {
      this.show = !this.show
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/variables.scss";
@import "../../style/mixins.scss";
.headerWrapper {
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  height: 12%;
  width: 100%;
}
.header {
  overflow: hidden;
  position: relative;
  background: $content-themeColor;
  height: 100%;
  padding: 0 0.18rem;
  left: 0;
  top: 0;
  // bottom:.5rem;
  right: 0;
  &__logo {
    @include alignCenter;
    color: white;
    font-size: 0.36rem;
    font-weight: bold;
    font-family: Arial, "Franklin Gothic Medium", sans-serif;
  }
  &__services {
    position: absolute;
    bottom: 6%;
    width: 90%;
    height: 0.27rem;
    &__flag {
      float: left;
      width: 0.25rem;
      height: 0.25rem;
      margin-right: 0.1rem;
      background-size: cover;
    }
    .spain {
        background-image: url(../../assets/spain.png);
      }
    .uk {
        background-image: url(../../assets/uk.png);
      }
    &__contact {
      display: flex;
      float: right;
      width: .6rem;
      height: 0.25rem;
      .iconfont {
        margin-right: 20%;
        font-size: 0.25rem;
        color: white;
      }
    }
  }
}
.help-mask{
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top:12%;
  left: 0;
  width: 100%;
  height: 88%;
  color:white;
  background-color: rgba(26, 24, 24, 0.698);
  &__text {
      display: flex;
      justify-content: space-between;
      height: 50%;
      span {
        @include flexCenter;
        border: .02rem dashed white ;
        border-radius: .06rem;
        text-align: center;
        width: 1.2rem;
        font-size: .15rem;
      }
    }
  &__arrows {
      display: flex;
      justify-content: space-between;
      height: 40%;
      span {
        width: .2rem;
        margin-left:.2rem;
        margin-right: .3rem;
        font-size: .4rem;
        // font-weight: bold;
      }
    }
  &__top {
    display: flex;
    flex-direction: column;
    width: 98%;
    height: 20%;
  }
  &__med {
    width: 98%;
    height:30%;
    // background-color: burlywood;
  }
  &__btm {
    position: relative;
    width: 98%;
    height: 42%;
    &__high {
      position: absolute;
      top:15%;
      left: 38%;
      width: 35%;
      height: 100%;
      &__text {
        height:30%;
        transform:translateX(-10%);
      }
      &__arrows {
        height:70%;
        .iconfont {
          display: inline-block;
          font-size: .7rem;
          transform: scale(1,1.8) translate(50%, 20%);
          margin-left: 0;
          margin-right: 0;
        }
      }
    }
    &__mid {
      position: absolute;
      top:50%;
      left: 20%;
      width: 65%;
      height: 50%;
      &__text {
        height: 31%;
        span {
          width: 1rem;
        }
      }
      &__arrows {
        height: 70%;
        width: 78%;
        .iconfont {
          margin-left: 0;
          font-size: .8rem;
        }
      }
    }
    &__low {
      position: absolute;
      top:67%;
      left: 0;
      width: 100%;
      height: 30%;
      &__text {
        span {
          width: 1rem;
        }
      }
    }
  }
}
</style>
