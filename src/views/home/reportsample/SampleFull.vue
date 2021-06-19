<template>
    <Header content="Reports"/>
    <Content />
    <Docker :content="idx"/>
</template>

<script>
import Header from '../../../components/Header.vue'
import Content from './Content'
import Docker from '../../../components/Docker.vue'

export default {
  name: 'SampleFull',
  components: { Header, Content, Docker },
  data () {
        return { idx: 0 }
    }
}
</script>

<style lang='scss' scoped>
</style>
