<template>
    <MyHeader />
    <UserInfo />
    <Navi />
    <Docker />
</template>

<script>
import MyHeader from './MyHeader'
import UserInfo from './UserInfo'
import Navi from './Navi'
import Docker from './Docker'

export default {
  name: 'My',
  components: { MyHeader, UserInfo, Navi, Docker }
}
</script>

<style lang='scss' scoped>
</style>
