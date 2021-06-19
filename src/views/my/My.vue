<template>
    <Header content="User"/>
    <UserInfo />
    <Navi />
    <Docker :content="idx"/>
</template>

<script>
import Header from '../../components/Header'
import UserInfo from './UserInfo'
import Navi from './Navi'
import Docker from '../../components/Docker.vue'

export default {
  name: 'My',
  components: { Header, UserInfo, Navi, Docker },
  data () {
        return { idx: 4 }
    }
}
</script>

<style lang='scss' scoped>
</style>
