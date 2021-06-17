<template>
  <HomeHeader />
  <Streams />
  <Docker />
</template>

<script>
import HomeHeader from './HomeHeader'
import Streams from './Streams'
import Docker from './Docker'

export default {
  name: 'Home',
  components: { HomeHeader, Streams, Docker }
}
</script>
