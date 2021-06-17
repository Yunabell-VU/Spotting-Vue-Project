<template>
    <RecHeader />
    <Navi />
    <RecStreams />
    <Docker />
</template>

<script>
import RecHeader from './RecHeader'
import Navi from './Navi'
import RecStreams from './RecStreams'
import Docker from './Docker'

export default {
  name: 'Rec',
  components: { RecHeader, Navi, RecStreams, Docker }
}
</script>

<style lang='scss' scoped>
</style>
