<template>
<!-- Map component for map uses -->
    <Header content="Upload" />
    <div class="map-wrapper">
      <router-link :to='{name:"ReportFull"}'>
        <div class="maps">
          <div class="map-grid"
            v-for="(item, index) in mapList"
            :key="index"
            :title="item.code"
            :style='{"background-image":"url("+item.imgUrl+")"}'
          ><span>{{item.code}}</span>
          </div>
        </div>
      </router-link>
    </div>
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
        imgUrl: 'https://trello-attachments.s3.amazonaws.com/60ba1bb04709e232d53f03ce/60cc834215a71802de298567/775866633a90824f581f9378b5eeeea7/1.png'
      },
      {
        code: 'E2',
        imgUrl: 'https://trello-attachments.s3.amazonaws.com/60ba1bb04709e232d53f03ce/60cc834215a71802de298567/e42ebf1526c449ffecdd40c52472e5a6/2.png'
      },
      {
        code: 'E3',
        imgUrl: 'https://trello-attachments.s3.amazonaws.com/60ba1bb04709e232d53f03ce/60cc834215a71802de298567/111ce2b1b82ec43d3e010c5bcd1f9afc/3.png'
      },
      {
        code: 'E4',
        imgUrl: 'https://trello-attachments.s3.amazonaws.com/60ba1bb04709e232d53f03ce/60cc834215a71802de298567/5ac334e6989bc4bfea065e7aec529252/4.png'
      },
      {
        code: 'E5',
        imgUrl: 'https://trello-attachments.s3.amazonaws.com/60ba1bb04709e232d53f03ce/60cc834215a71802de298567/e3f16ab15acbbbba48b1ef0a1d0f703e/5.png'
      },
      {
        code: 'E6',
        imgUrl: 'https://trello-attachments.s3.amazonaws.com/60ba1bb04709e232d53f03ce/60cc834215a71802de298567/cec8d66becee389ab49ea55834bc4a58/6.png'
      },
      {
        code: 'E7',
        imgUrl: 'https://trello-attachments.s3.amazonaws.com/60ba1bb04709e232d53f03ce/60cc834215a71802de298567/dd63f1458aaabb6b2fc48c2562c951cb/7.png'
      },
      {
        code: 'E8',
        imgUrl: 'https://trello-attachments.s3.amazonaws.com/60ba1bb04709e232d53f03ce/60cc834215a71802de298567/146259bad3688b18a386921f0b3227fe/8.png'
      },
      {
        code: 'E9',
        imgUrl: 'https://trello-attachments.s3.amazonaws.com/60ba1bb04709e232d53f03ce/60cc834215a71802de298567/1d893e7780dd7e80248fe2dd2a27dc6c/9.png'
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
  position:absolute;
  top:12%;
  left:0;
  bottom: 8%;
  background-color: darkseagreen;
}
.maps {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin-top: 10%;
    width: 100%;
    height: 57%;
  }
.map-grid {
  box-sizing: border-box;
  width: 1.23rem;
  height: 1.23rem;
  margin-bottom: 2px;
  background-size: cover;
  @include flexCenter;
  span {
    display: inline-block;
    color: #777;
    font-size: .4rem;
  }
}
</style>
