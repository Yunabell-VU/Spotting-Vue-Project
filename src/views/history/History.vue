<template>
<!-- History Function -->
    <Header content = "History"/>
    <Navi />
    <Docker :content="idx"/>
</template>

<script>
import Header from '../../components/Header.vue'
import Navi from './Navi'
import Docker from '../../components/Docker.vue'

export default {
  name: 'History',
  components: { Header, Navi, Docker },
  data () {
        return { idx: 1 }
  }
}
</script>

<style lang='scss' scoped>
</style>
