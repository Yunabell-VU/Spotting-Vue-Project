<template>
  <div class="docker">
    <div
        v-for="(item, index) in dockerList"
        :class="{'docker__item': true,
            'docker__item--active': index === content,
            'docker__item--stress': index === 2}"
        class="docker__item"
        :key="item.icon"
        @click="handleNavigation(item.text)">
      <div class="iconfont" v-html="item.icon" />
      <div class="docker__title">{{item.text}}</div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  name: 'Docker',
  props: ['content'],
  setup () {
      const dockerList = [
          { icon: '&#xe604;', text: 'HOME' },
          { icon: '&#xe698;', text: 'HISTORY' },
          { icon: '&#xe600;', text: 'REPORT' },
          { icon: '&#xe601;', text: 'MALL' },
          { icon: '&#xe671;', text: 'MY' }
      ]
      const router = useRouter()
      const handleNavigation = (text) => {
          router.push({ name: text })
      }
      return { dockerList, handleNavigation }
  }
}
</script>

<style lang='scss' scoped>
@import "../style/variables.scss";
@import "../style/mixins.scss";

.docker {
  position: fixed;
  display: flex;
  box-sizing: border-box;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 8%;
  border-top: 0.01rem solid #f1f1f1;
  background-color: white;
  color: $content-fontcolor;
  &__item {
    flex: 1;
    text-align: center;
    width: 20%;
    .iconfont {
      margin: 0.07rem 0 0.02rem 0;
      font-size: 0.2rem;
      font-weight: bold;
    }
    &--stress {
      color: $content-themeViceColor;
    }
    &--active {
      color: $content-themeColor;
    }
  }
  &__title {
    font-size: 0.2rem;
    font-weight: bold;
    transform: scale(0.5, 0.5);
    transform-origin: center top;
  }
}
</style>
