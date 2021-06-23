<template>
<!-- Coupons Section in Mall -->
    <div class="wrapper">
        <div class="banner">
            <span>Coupons</span>
        </div>
        <div class="coupon"
        v-for="(item, index) in couponList"
        :key="index">
            <div class="coupon__image" :title="item.text"
            :style='{"background-image":"url("+item.image+")"}'>
            <span class="coupon__image__notice">{{item.notice}}</span>
            </div>
            <div class="coupon__info">{{item.text}}</div>
            <div class="coupon__points">
                <span class="iconfont">&#xe67a;</span>
                <span class="coupon__points__text">{{item.points}} Points</span>
            </div>
            <div class="coupon__btn">
                <button class="coupon__btn__submit"
                @click="show"
                >Redeem</button>
            </div>
        </div>
    </div>
    <Confirm ref="MSGCONFIRMPRO"></Confirm>
</template>

<script>
import Confirm from '../../components/Confirm.vue'
export default {
  name: 'UserInfo',
  components: { Confirm },
  methods: {
    show () {
      this.$refs.MSGCONFIRMPRO.show('Redeem this coupon?',
      () => {
        // confirmed
        },
      () => {
        // canceled
          })
    }
  },
  setup () {
      const couponList = [
          {
            image: 'https://trello-attachments.s3.amazonaws.com/60ba1bb04709e232d53f03ce/60c9ea5409770e6a13fe63c5/636965dbeae945a5a36ff5cbe908c0ba/surf_kit.jpg',
            notice: 'Surf Kit 5% Off',
            text: 'Surf Kit 5% off',
            points: '10'
          }, {
            image: 'https://trello-attachments.s3.amazonaws.com/60ba1bb04709e232d53f03ce/60c9ea5409770e6a13fe63c5/636965dbeae945a5a36ff5cbe908c0ba/surf_kit.jpg',
            notice: 'Surf Kit 10% Off',
            text: 'Surf Kit 10% off',
            points: '25'
          }, {
            image: 'https://trello-attachments.s3.amazonaws.com/60ba1bb04709e232d53f03ce/60c9ea5409770e6a13fe63c5/da1f095ee49668bc46660fcb7f90ccdf/surf_lesson.jpg',
            notice: 'Free Surf Lesson',
            text: 'Free Surf Lesson',
            points: '100'
          }, {
            image: 'https://trello-attachments.s3.amazonaws.com/60ba1bb04709e232d53f03ce/60c9ea5409770e6a13fe63c5/114a249261d5dcf983c417c3b3dacc21/drink.jpg',
            notice: 'Drink 10% Off',
            text: 'Bar Drink 10% Off',
            points: '20'
          }]

        return { couponList }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/variables.scss";
@import "../../style/mixins.scss";
    .wrapper {
        position: absolute;
        top: 27%;
        left: 5%;
        height: 62%;
        width: 90%;
    }
    .banner {
        margin-bottom: 3%;
        width: 100%;
        height:6%;
        background-color: #FFECF3;
        color: $content-themeViceColor;
        @include flexLeftCenter;
        span{
            font-size: .16rem;
            font-weight: bold;
        }
    }
    .coupon {
        float:left;
        margin: 0% 5.5% 5% 2.5%;
        width: 42%;
        height: 45%;
        &__image {
            position: relative;
            box-sizing: border-box;
            width: 100%;
            height: 57%;
            border: 1px solid #333;
            background-size: cover;
            @include flexLeftCenter;
            &__notice{
                position:absolute;
                bottom: 0;
                left: 0;
                height: 20%;
                width: 100%;
                font-size: .16rem;
                font-weight: bold;
                color: #FFECF3;
                background-color: $content-themeViceColor;
            }
        }
        &__info {
            padding-top: 1%;
            width: 100%;
            height: 12%;
            color: black;
            font-weight: bold;
            font-size: .155rem;
        }
        &__points {
            color: $content-themeViceColor;
            margin-bottom: 1%;
            @include flexLeftCenter;
            font-size: .16rem;
            .iconfont {
                float: left;
                margin-right: 3%;
            }
            &__text{
                float: left;
            }
        }
        &__btn {
            width: 100%;
            height: 16%;
            button {
                height: 100%;
                width: 100%;
                background-color: #FFECF3;
                border: 1px solid $content-themeViceColor;
                border-radius: 0.04rem;
                color: $content-themeViceColor;
                font-size: 0.17rem;
                font-weight: bold;
                box-shadow: 0.01rem 0.02rem 0.1rem 0.01rem rgba(0, 0, 0, 0.2);
            }
        }
    }
</style>
