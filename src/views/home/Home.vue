<template>
<!-- Home Page -->
  <HomeHeader />
  <Streams />
  <Docker :content="idx" />
</template>

<script>
import HomeHeader from './HomeHeader'
import Streams from './Streams'
import Docker from '../../components/Docker.vue'

export default {
  name: 'Home',
  components: { HomeHeader, Streams, Docker },
  data () {
        return { idx: 0 }
    }
}
</script>
