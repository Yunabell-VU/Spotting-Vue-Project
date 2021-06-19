<template>
    <div class="user">
        <div class="user__profile">
            <span class="iconfont">&#xe6bb;</span>
        </div>
        <div class="user__info">
            <span class="user__info__text">Available Items</span>
            <div class="user__info__points">
                <span class="user__info__points__text">Amount :</span>
                <span class="user__info__points__number">1</span>
            </div>
        </div>
        <router-link :to='{name:"MALL"}'>
            <div class="user__btn">
                <button>Go To Mall</button>
            </div>
        </router-link>
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
    .user {
        position: absolute;
        top: 14%;
        left: 5%;
        height: 12%;
        width: 90%;
        border-bottom: 2px solid $content-themeViceColor;
        &__profile {
            float: left;
            height: 100%;
            width: 20%;
            @include flexCenter;
            .iconfont {
                font-size: .6rem;
                color: $content-themeColor;
            }
        }
        &__info {
            float: left;
            height: 100%;
            width: 38%;
            &__text {
                display: inline-block;
                padding-top: 15%;
                width: 100%;
                height: 35%;
                font-size: .16rem;
                color: $content-themeViceColor;
                font-weight: bold;
            }
            &__points {
                width: 100%;
                height: 45%;
                color: $content-themeViceColor;
                &__text {
                    display: inline-block;
                    font-size: .16rem;
                    margin-right: 10%;
                }
                &__number {
                    display: inline-block;
                    font-size: .16rem;
                    margin-right: 5%;
                }
            }
        }
        &__btn {
            float: right;
            height: 100%;
            width: 40%;
            @include flexCenter;
            button {
                height: 58%;
                width: 90%;
                background-color: $content-themeColor;
                border: none;
                border-radius: 0.04rem;
                color: white;
                font-size: 0.18rem;
                font-weight: bold;
            }
        }
    }
</style>
