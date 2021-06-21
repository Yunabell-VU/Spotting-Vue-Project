<template>
    <Header content="Upload" />
    <router-link :to='{name:"ReportFull"}'>
      <div class="map-wrapper">
        <div class="map-grid"
          v-for="(item, index) in mapList"
          :key="index"
          :style='{"background-image":"url("+item.imgUrl+")"}'
        ><span>{{item.code}}</span>
        </div>
      </div>
    </router-link>
    <Docker :content="idx"/>
</template>

<script>
import Header from './Header.vue'
import Docker from './Docker.vue'

export default {
  name: 'Contact',
  components: { Header, Docker },
  data () {
        return { idx: 2 }
    },
  setup () {
    const mapList = [
      {
        code: 'E1',
        imgUrl: 'https://trello-attachments.s3.amazonaws.com/60ba1bb04709e232d53f03ce/60cc834215a71802de298567/913a40030920e678a2cce93636ba88da/1.png'
      },
      {
        code: 'E2',
        imgUrl: 'https://trello-attachments.s3.amazonaws.com/60ba1bb04709e232d53f03ce/60cc834215a71802de298567/3f5ae6cb612cfea70fbc98d7ffb655c8/4.png'
      },
      {
        code: 'E3',
        imgUrl: 'https://trello-attachments.s3.amazonaws.com/60ba1bb04709e232d53f03ce/60cc834215a71802de298567/b7b7c5c2fd20aaef7eec8ed5eb4b8223/2.png'
      },
      {
        code: 'E4',
        imgUrl: 'https://trello-attachments.s3.amazonaws.com/60ba1bb04709e232d53f03ce/60cc834215a71802de298567/12129468e09165938dd1afd6365f40c3/5.png'
      },
      {
        code: 'E5',
        imgUrl: 'https://trello-attachments.s3.amazonaws.com/60ba1bb04709e232d53f03ce/60cc834215a71802de298567/829c534e9e25ebb14bc23bf2675bce40/3.png'
      },
      {
        code: 'E6',
        imgUrl: 'https://trello-attachments.s3.amazonaws.com/60ba1bb04709e232d53f03ce/60cc834215a71802de298567/97d882d57f7867d9b48224638a6762bb/6.png'
      }
    ]
    return { mapList }
  }
}
</script>

<style lang='scss' scoped>
@import "../style/variables.scss";
@import "../style/mixins.scss";
.map-wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    position:absolute;
    top:12%;
    left:7%;
    width: 86%;
    height: 80%;
    background-color:azure;
  }
.map-grid {
  box-sizing: border-box;
  width: 1.6rem;
  height: 1.75rem;
  margin-bottom: .02rem;
  background-size: cover;
  border: 1px solid $content-bgColor;
  span {
    display: inline-block;
    color: #777;
    font-size: .6rem;
  }
}
</style>
