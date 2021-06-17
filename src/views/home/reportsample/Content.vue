<template>
    <div class="content-wrapper"></div>
    <div class="submit"></div>
</template>

<script>
export default {
  name: 'Content'
}
</script>

<style lang="scss" scoped>
@import "../../../style/variables.scss";
    .content-wrapper {
        position: absolute;
        top: 14%;
        left: 4%;
        height: 56%;
        width: 92%;
        border: 2px solid $content-themeColor;
    }
    .submit {
        position: absolute;
        bottom: 15%;
        left:10%;
        height: .8rem;
        width: 80%;
        background-color:rgb(236, 73, 196);
    }
</style>
