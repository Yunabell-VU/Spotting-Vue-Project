<template>
    <Header content="About Us"/>
    <div class="content">
      <div class="content__intro">
        <span>SPOTTING is an app committed to help reduce the rubbish in Lobito coast. We value the most of the environment, and protecting it is our duty. </span>
      </div>
      <div class="content__more">
        <span class="content__title">Want to learn more about the project？</span>
        <span class="content__text">If you are interested in our project, you can visit our website below for more information:</span>
        <span class="content__link">www.spottingTeam3fake.com</span>
      </div>
      <div class="content__join">
        <span class="content__title">Join us:</span>
        <span class="content__text">We are recruiting! Find out more about our offers on LinkedIn:</span>
        <span class="content__link">www.linkedinabcabc.com</span>
      </div>
    </div>
    <router-link :to='{name:"Contact"}'>
      <div class="btn">
        <button>Contact us</button>
      </div>
    </router-link>
    <Docker :content="idx"/>
</template>

<script>
import Header from '../../../components/Header.vue'
import Docker from '../../../components/Docker.vue'

export default {
  name: 'AboutUs',
  components: { Header, Docker },
  data () {
        return { idx: 4 }
    }
}
</script>

<style lang='scss' scoped>
@import "../../../style/variables.scss";
@import "../../../style/mixins.scss";
  .content {
    display: flex;
    align-items: center;
    flex-direction: column;
    position:absolute;
    top:15%;
    width: 100%;
    height: 55%;
    &__title {
      margin-bottom: 5%;
      font-size: .15rem;
      font-weight: bold;
      color: $content-themeViceColor;
    }
    &__text {
      margin-bottom: 3%;
      font-size: .14rem;
    }
    &__link {
      text-decoration: underline;
    }
    &__intro {
      box-sizing: border-box;
      padding: 0 3%;
      width: 100%;
      height: 30%;
      text-align: center;
      // border-radius: .09rem;
      // box-shadow: 0 .13rem .1rem 0 rgba(0,0,0,.08);
      span {
        font-size: .16rem;
        color: $content-fontcolor;
      }
    }
    &__more {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      width: 80%;
      height: 30%;
      // border-top: 2px solid $content-themeColor;
    }
    &__join {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      width: 80%;
      height: 40%;
    }
  }
  .btn {
    position:absolute;
    bottom:15%;
    left:33%;
    width: 34%;
    height: 11%;
    button {
      width: 100%;
      height: 100%;
      background-color: $content-themeColor;
      border: none;
      border-radius: 18px;
      font-size: .18rem;
      font-weight: bold;
      color: white;
    }
  }
</style>
