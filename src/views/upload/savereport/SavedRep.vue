<template>
<!-- Saved feedback -->
    <Header content="Saved"/>
    <Content />
    <Docker :content="idx"/>
</template>

<script>
import Header from '../../../components/Header.vue'
import Content from './Content'
import Docker from '../../../components/Docker.vue'

export default {
  name: 'SavedRep',
  components: { Header, Content, Docker },
  data () {
        return { idx: 1 }
    }
}
</script>

<style lang='scss' scoped>
</style>
