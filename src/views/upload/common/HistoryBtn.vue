<template>
<div class="submit">
    <router-link :to='{name:"HISTORY"}'>
        <button class="iconfont">&#xe63a; History</button>
    </router-link>
</div>
</template>

<script>
export default {
  name: 'HistoryButton'
}
</script>

<style lang="scss" scoped>
@import "../../../style/variables.scss";
@import "../../../style/mixins.scss";
    .submit {
        padding-top: 2%;
        height: .8rem;
        width: 80%;
        @include flexCenter;
        button {
            box-sizing: border-box;
            width: 1.3rem;
            height: .4rem;
            border: none;
            background-color: $content-themeColor;
            border-radius: .16rem;
            color: white;
            font-weight: bold;
            font-size: .18rem;
        }
    }
</style>
