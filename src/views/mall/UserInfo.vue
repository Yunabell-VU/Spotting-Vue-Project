<template>
    <div class="user">
        <div class="user__profile">
            <span class="iconfont">&#xe6bb;</span>
        </div>
        <div class="user__info">
            <span class="user__info__text">Your Balance</span>
            <div class="user__info__points">
                <span class="user__info__points__text">Points :</span>
                <span class="user__info__points__number">11</span>
                <span class="iconfont">&#xefd7;</span>
            </div>
        </div>
        <div class="user__btn">
            <!-- TODO: Router -->
            <button>My Wallet</button>
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
            width: 35%;
            &__text {
                display: inline-block;
                padding-top: 15%;
                width: 100%;
                height: 35%;
                font-size: .17rem;
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
                .iconfont {
                    font-size: .17rem;
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
