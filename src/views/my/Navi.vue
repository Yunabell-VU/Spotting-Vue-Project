<template>
    <div class="navi-wrapper">
        <div class="navi"
        v-for="(item, index) in naviList"
        :key="index">
            <span class="navi__name">{{item.name}}</span>
            <span class="iconfont">&#xe692;</span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Navi',
  setup () {
    const naviList = [
          { name: 'My Footprint', destination: 'HOME' },
          { name: 'My Wallet', destination: 'REC' },
          { name: 'About Spotting', destination: 'REPORT' }
      ]
    return { naviList }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/variables.scss";
@import "../../style/mixins.scss";
    .navi-wrapper {
        position: absolute;
        top: 45%;
        left: 0;
        height: 45%;
        width: 100%;
    }
    .navi {
        height: 20%;
        width: 100%;
        margin-bottom: 10%;
        box-shadow: 0.01rem 0.02rem 0.1rem 0.01rem rgba(0, 0, 0, 0.2);
        color: $content-themeViceColor;
        font-weight: bold;
        @include flexLeftCenter;
        &__name {
            font-size: .17rem;
            margin-left: 5%;
            margin-right: 5%;
        }
        .iconfont {
            font-weight: bold;
            font-size: .3rem;
        }
    }
</style>
