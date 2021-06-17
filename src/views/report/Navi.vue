<template>
    <div class="navi-wrapper"></div>
    <div class="help"></div>
</template>

<script>
export default {
  name: 'Navi'
}
</script>

<style lang="scss" scoped>
    .navi-wrapper {
        position: absolute;
        top: 15%;
        left: 0;
        height: 45%;
        width: 100%;
        background-color:orchid;
    }
    .help {
        position: absolute;
        bottom: 10%;
        right:3%;
        height: .8rem;
        width: .7rem;
        background-color:orchid;
    }
</style>
