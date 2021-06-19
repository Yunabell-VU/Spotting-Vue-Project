<template>
  <div class="headerWrapper">
    <div class="header">
      <div class="header__logo">{{content}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: ['content']
}
</script>

<style lang="scss" scoped>
@import "../style/variables.scss";
@import "../style/mixins.scss";
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
    font-family: Arial, "Franklin Gothic Medium", "Arial Narrow", sans-serif;
  }
}
</style>
