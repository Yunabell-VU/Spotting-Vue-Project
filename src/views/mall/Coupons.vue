<template>
    <div class="wrapper">
        <div class="banner">
            <span>Coupons</span>
        </div>
        <div class="coupon"
        v-for="(item, index) in couponList"
        :key="index">
            <div class="coupon__image"
            :style='{"background-image":"url("+item.image+")"}'>
            <span class="coupon__image__notice">{{item.notice}}</span>
            </div>
            <div class="coupon__info">{{item.text}}</div>
            <div class="coupon__points">
                <span class="iconfont">&#xefd7;</span>
                <span class="coupon__points__text">{{item.points}} Points</span>
            </div>
            <div class="coupon__btn">
                <button class="coupon__btn__submit">Redeem</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'UserInfo',
  setup () {
      const couponList = [
          {
            image: 'https://trello-attachments.s3.amazonaws.com/60ba1bb04709e232d53f03ce/60c9ea5409770e6a13fe63c5/52809848a147b77309701725569cc01b/surf_kit.jpg',
            notice: 'Surf Kit 5% Off',
            text: 'Surf Kit 5% off',
            points: '10'
          }, {
            image: 'https://trello-attachments.s3.amazonaws.com/60ba1bb04709e232d53f03ce/60c9ea5409770e6a13fe63c5/52809848a147b77309701725569cc01b/surf_kit.jpg',
            notice: 'Surf Kit 10% Off',
            text: 'Surf Kit 10% off',
            points: '25'
          }, {
            image: 'https://trello-attachments.s3.amazonaws.com/60ba1bb04709e232d53f03ce/60c9ea5409770e6a13fe63c5/d2073d9f3c5abd3833db191a3075ff0b/surf_lesson.jpg',
            notice: 'Free Surf Lesson',
            text: 'Free Surf Lesson',
            points: '100'
          }, {
            image: 'https://trello-attachments.s3.amazonaws.com/60ba1bb04709e232d53f03ce/60c9ea5409770e6a13fe63c5/d29c7c2ffb7fc64804da20c4ec15deef/drink.jpg',
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
            font-size: .15rem;
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
