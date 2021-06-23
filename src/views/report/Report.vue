<template>
<!-- Report Function -->
    <Header content="Report"/>
    <Navi />
    <Docker :content="idx"/>
</template>

<script>
import Header from '../../components/Header.vue'
import Navi from './Navi'
import Docker from '../../components/Docker.vue'

export default {
  name: 'Report',
  components: { Header, Navi, Docker },
  data () {
        return { idx: 2 }
    }
}
</script>

<style lang='scss' scoped>
</style>
