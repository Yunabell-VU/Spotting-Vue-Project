<template>
    <Header />
    <Content />
    <Docker />
</template>

<script>
import Header from './Header'
import Content from './Content'
import Docker from './Docker'

export default {
  name: 'UploadFullRep',
  components: { Header, Content, Docker }
}
</script>

<style lang='scss' scoped>
</style>
