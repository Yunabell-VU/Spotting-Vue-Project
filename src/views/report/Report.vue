<template>
    <ReportHeader />
    <Navi />
    <Docker />
</template>

<script>
import ReportHeader from './ReportHeader'
import Navi from './Navi'
import Docker from './Docker'

export default {
  name: 'Report',
  components: { ReportHeader, Navi, Docker }
}
</script>

<style lang='scss' scoped>
</style>
