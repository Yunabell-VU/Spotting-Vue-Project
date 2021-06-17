<template>
    <ReportHeader />
    <Content />
    <Docker />
</template>

<script>
import ReportHeader from './ReportHeader'
import Content from './Content'
import Docker from './Docker'

export default {
  name: 'SampleFull',
  components: { ReportHeader, Content, Docker }
}
</script>

<style lang='scss' scoped>
</style>
