<template>
    <Header content="Contact" />
    <div class="content">
      <div class="content__address">
        <div class="content__icon">
          <span class="iconfont">&#xe665;</span>
        </div>
        <div class="content__text">
          <span class="content__text__title">Office address: </span>
          <span>VU Amsterdam Main building</span>
          <span>De Boelelaan 1105</span>
          <span>1081 HV Amsterdam</span>
          <span>The Netherlands</span>
        </div>
      </div>
      <div class="content__email">
        <div class="content__icon">
          <span class="iconfont">&#xe668;</span>
        </div>
        <div class="content__text">
          <span class="content__text__title">Email address:  </span>
          <span>spotting@team3.com</span>
        </div>
      </div>
      <div class="content__tel">
        <div class="content__icon">
          <span class="iconfont">&#xe667;</span>
        </div>
        <div class="content__text">
          <span class="content__text__title">Tel:  </span>
          <span>+31 99 88 77665</span>
        </div>
      </div>
      <div class="content__media">
        <div class="content__icon content__media__icons">
          <span class="iconfont">&#xe670;</span>
          <span class="iconfont">&#xe66d;</span>
          <span class="iconfont">&#xe66c;</span>
        </div>
        <div class="content__text content__media__text">
          <span>@SpottingTeam3</span>
        </div>
      </div>
    </div>
    <router-link :to='{name:"AboutUs"}'>
      <div class="btn">
        <button>About us</button>
      </div>
    </router-link>
    <Docker :content="idx"/>
</template>

<script>
import Header from '../../../components/Header.vue'
import Docker from '../../../components/Docker.vue'

export default {
  name: 'Contact',
  components: { Header, Docker },
  data () {
        return { idx: 4 }
    }
}
</script>

<style lang='scss' scoped>
@import "../../../style/variables.scss";
@import "../../../style/mixins.scss";
.content {
    position:absolute;
    top:15%;
    left:10%;
    width: 80%;
    height: 53%;
    color: $content-fontcolor;
    &__address {
    display: flex;
    margin-bottom: 2%;
    width: 100%;
    height: 35%;
    border-bottom: 1px solid $content-fontcolor;
    }
      &__icon {
      width: 15%;
      @include flexCenter;
      .iconfont {
        font-size:.3rem
      }
  }
  &__text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 2%;
    width: 80%;
    span {
      padding-bottom: 2%;
      font-size: .16rem;
    }
    &__title {
      color: $content-themeViceColor;
      font-weight: bold;
    }
  }
  &__email {
    display: flex;
    margin-bottom: 2%;
    width: 100%;
    height: 18%;
    border-bottom: 1px solid $content-fontcolor;
  }
  &__tel {
    display: flex;
    margin-bottom: 2%;
    width: 100%;
    height: 18%;
    border-bottom: 1px solid $content-fontcolor;
  }
  &__media {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2%;
    width: 100%;
    height: 23%;
    // border-bottom: 1px solid $content-fontcolor;
    &__icons {
      margin-top: 3%;
      width: 60%;
      display: flex;
      justify-content: space-between;
    }
    &__text {
      margin-top: 4%;
      text-align: center;
    }
  }
}
  .btn {
    position:absolute;
    bottom:15%;
    left:33%;
    width: 34%;
    height: 11%;
    button {
      width: 100%;
      height: 100%;
      background-color: $content-themeColor;
      border: none;
      border-radius: 18px;
      font-size: .18rem;
      font-weight: bold;
      color: white;
    }
  }
</style>
