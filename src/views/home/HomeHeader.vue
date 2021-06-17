<template>
  <div class="headerWrapper">
    <div class="header">
      <div class="header__logo">SPOTTING</div>
      <div class="header__services">
        <span class="header__services__flag">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-spanish"></use>
          </svg>
        </span>
        <span class="header__services__flag">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-uk"></use>
          </svg>
        </span>
        <div class="header__services__contact">
          <div class="iconfont">&#xe605;</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
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
      font-size: 0.25rem;
      margin-right: 0.1rem;
    }
    &__contact {
      float: right;
      width: 0.25rem;
      height: 0.25rem;
      .iconfont {
        font-size: 0.25rem;
        font-weight: bold;
        color: $content-themeViceColor;
      }
    }
  }
}
</style>
