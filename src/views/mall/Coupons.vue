<template>
    <div class="wrapper">
        <div class="banner">
            <span>Coupons</span>
        </div>
        <div class="coupon"></div>
    </div>
</template>

<script>
export default {
  name: 'UserInfo'
//   setup () {
//       const couponList = [
//           { imag: '' }
//         ]
//   }
}
</script>

<style lang="scss" scoped>
@import "../../style/variables.scss";
@import "../../style/mixins.scss";
    .wrapper {
        position: absolute;
        top: 28%;
        left: 5%;
        height: 60%;
        width: 90%;
        background-color:palevioletred;
    }
    .banner {
        margin-bottom: 3%;
        width: 100%;
        height:6%;
        background-color: #FFECF3;
        color: $content-themeViceColor;
        @include flexLeftCenter;
        span{
            font-size: .15rem;
            font-weight: bold;
        }
    }
    .coupon {
        width: 45%;
        height: 40%;
        background-color: indigo;
    }
</style>
