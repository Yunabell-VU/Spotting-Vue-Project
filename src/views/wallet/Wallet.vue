<template>
    <WalletHeader />
    <UserInfo />
    <Coupons />
    <Docker />
</template>

<script>
import WalletHeader from './WalletHeader'
import UserInfo from './UserInfo'
import Coupons from './Coupons'
import Docker from './Docker'

export default {
  name: 'Mall',
  components: { WalletHeader, UserInfo, Coupons, Docker },
  data () {
    return {
      logaName: 'Points'
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
