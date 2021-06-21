<template>
  <div class="headerWrapper">
    <div class="header">
      <div class="header__logo">SPOTTING</div>
      <div class="header__services">
        <div class="header__services__flag spain"></div>
        <div class="header__services__flag uk"></div>
        <div class="header__services__contact">
          <div class="iconfont"
          @click= "handleHelpClick"
          >&#xe63f;</div>
          <router-link :to='{name:"Contact"}'>
            <div class="iconfont">&#xe637;</div>
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
      <div class="help-mask__top__arrows">
        <span class="iconfont">&#xe67d;</span>
        <span class="iconfont">&#xe67d;</span>
      </div>
      <div class="help-mask__top__text">
        <span>Switch between languages</span>
        <span>Need help? Contact us!</span>
      </div>
    </div>
    <div class="help-mask__med"></div>
    <div class="help-mask__btm">
      <div class="help-mask__btm__high"></div>
      <div class="help-mask__btm__mid"></div>
      <div class="help-mask__btm__low">
        <div class="help-mask__btm__low__text">
          <span>Home Page</span>
          <span>Your Account</span>
        </div>
        <div class="help-mask__btm__low__arrows">
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
  &__top {
    display: flex;
    flex-direction: column;
    width: 98%;
    height: 20%;
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
  }
  &__med {
    width: 98%;
    height:30%;
    background-color: burlywood;
  }
  &__btm {
    position: relative;
    width: 98%;
    height: 42%;
    &__high {
      position: absolute;
      top:0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: chocolate;
    }
    &__mid {
      position: absolute;
      top:30%;
      left: 0;
      width: 100%;
      height: 70%;
      background-color: cornflowerblue;
    }
    &__low {
      position: absolute;
      top:50%;
      left: 0;
      width: 100%;
      height: 50%;
      background-color: darkcyan;
    }
  }
}
</style>
