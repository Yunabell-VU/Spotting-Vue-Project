<template>
    <Header content="My Wallet"/>
    <UserInfo />
    <Coupons />
    <Docker :content="idx"/>
</template>

<script>
import Header from '../../components/Header.vue'
import UserInfo from './UserInfo'
import Coupons from './Coupons'
import Docker from '../../components/Docker.vue'

export default {
  name: 'Mall',
  components: { Header, UserInfo, Coupons, Docker },
  data () {
        return { idx: 4 }
    }
}
</script>

<style lang='scss' scoped>
</style>
