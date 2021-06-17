<template>
    <Header />
    <div class="content"></div>
    <Docker />
</template>

<script>
import Header from './Header'
import Docker from './Docker'

export default {
  name: 'AboutUs',
  components: { Header, Docker }
}
</script>

<style lang='scss' scoped>
  .content {
    position:absolute;
    top:15%;
    left:10%;
    width: 80%;
    height: 70%;
    background-color: burlywood;
  }
</style>
