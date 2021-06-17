<template>
    <div class="user-wrapper"></div>
</template>

<script>
export default {
  name: 'UserInfo'
}
</script>

<style lang="scss" scoped>
@import "../../style/variables.scss";
    .user-wrapper {
        position: absolute;
        top: 14%;
        left: 5%;
        height: 13%;
        width: 90%;
        background-color: orange;
        border-bottom: 2px solid $content-themeViceColor;
    }
</style>
