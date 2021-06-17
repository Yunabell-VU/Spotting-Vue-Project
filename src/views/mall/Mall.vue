<template>
    <MallHeader />
    <UserInfo />
    <Coupons />
    <Docker />
</template>

<script>
import MallHeader from './MallHeader'
import UserInfo from './UserInfo'
import Coupons from './Coupons'
import Docker from './Docker'

export default {
  name: 'Mall',
  components: { MallHeader, UserInfo, Coupons, Docker },
  data () {
    return {
      logaName: 'Points'
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
