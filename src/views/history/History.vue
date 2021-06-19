<template>
    <Header content = "History"/>
    <Navi />
    <RecStreams />
    <Docker :content="idx"/>
</template>

<script>
import Header from '../../components/Header.vue'
import Navi from './Navi'
import RecStreams from './RecStreams'
import Docker from '../../components/Docker.vue'

export default {
  name: 'History',
  components: { Header, Navi, RecStreams, Docker },
  data () {
        return { idx: 1 }
  }
}
</script>

<style lang='scss' scoped>
</style>
