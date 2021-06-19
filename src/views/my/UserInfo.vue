<template>
    <div class="user-wrapper">
        <div class="basic-info">
            <div class="basic-info__profile">
                <span class="iconfont">&#xe6bb;</span>
            </div>
            <span class="basic-info__username">Superrr</span>
            <span class="iconfont basic-info__edit">&#xe608;</span>
        </div>
        <div class="points-info">
            <div class="points-info__left">
                <span>Points :</span>
            </div>
            <div class="points-info__right">
                <span class="points-info__right__number">11</span>
                <router-link :to='{name: "MALL"}'>
                    <span class= "iconfont points-info__right__fish">&#xefd7;</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'UserInfo'
}
</script>

<style lang="scss" scoped>
@import "../../style/variables.scss";
@import "../../style/mixins.scss";
    .user-wrapper {
        position: absolute;
        top: 14%;
        left: 5%;
        height: 26%;
        width: 90%;
        border-bottom:1px solid #777;
    }
    .basic-info {
        display: flex;
        width: 100%;
        height: 50%;
        margin-bottom: 8%;
        &__profile {
            float: left;
            width: 30%;
            height: 100%;
            @include flexCenter;
            .iconfont{
                font-size: 1rem;
                color: $content-themeColor;
            }
        }
        &__username {
            float: left;
            padding-top: 5%;
            padding-left: 2%;
            font-size: .45rem;
            font-weight: bold;
            color: $content-themeViceColor;
        }
        &__edit{
            font-size: .22rem;
            color: #777;
            padding-top: 18%;
            padding-left: 5%;
        }
    }
    .points-info {
        display: flex;
        width: 100%;
        height: 35%;
        color: $content-themeViceColor;
        &__left{
            height: 100%;
            width: 55%;
            @include flexLeftCenter;
            span {
                font-size: .3rem;
                font-weight: bold;
            }
        }
        &__right{
            height: 100%;
            width: 40%;
            @include flexLeftCenter;
            &__number{
                font-size: .3rem;
                margin-right: 15%;
            }
            &__fish{
                font-size: .3rem;
                color: $content-themeViceColor;
            }
        }
    }
</style>
