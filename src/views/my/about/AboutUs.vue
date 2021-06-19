<template>
    <Header content="About Us"/>
    <div class="content"></div>
    <Docker :content="idx"/>
</template>

<script>
import Header from '../../../components/Header.vue'
import Docker from '../../../components/Docker.vue'

export default {
  name: 'AboutUs',
  components: { Header, Docker },
  data () {
        return { idx: 4 }
    }
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
