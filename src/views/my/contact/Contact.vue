<template>
    <Header content="Contact" />
    <div class="content"></div>
    <router-link :to='{name:"AboutUs"}'>
      <div class="btn">
        <button>About us</button>
      </div>
    </router-link>
    <Docker :content="idx"/>
</template>

<script>
import Header from '../../../components/Header.vue'
import Docker from '../../../components/Docker.vue'

export default {
  name: 'Contact',
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
    position:absolute;
    top:15%;
    left:10%;
    width: 80%;
    height: 45%;
    background-color: burlywood;
  }
  .btn {
    position:absolute;
    bottom:13%;
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
