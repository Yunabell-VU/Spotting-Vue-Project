<template>
    <div class="streamWrapper">
    <div class="streams">
      <div class="streams__report"
        v-for="item in 2"
        :key="item.id">
        <div class="streams__report__band"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecStreams'
}
</script>

<style lang="scss" scoped>
@import "../../style/variables.scss";
@import "../../style/mixins.scss";
.streamWrapper {
  overflow-y: auto; //scroll overflow control
  position: absolute;
  left: 0;
  top: 20%;
  height: 80%;
  width: 100%;
  background-color: $content-bgColor;
}
.streams {
  position: relative;
  display: flex;
  flex-direction: column;
  left: 5%;
  top: 0;
  padding-bottom: 1.8rem;
  width: 90%;
  height: 100%;
  &__report {
    display: flex;
    flex-direction: column;
    height: 35%;
    width: 100%;
    margin: 0.15rem 0 0.01rem 0;
    background-color: white;
    border-radius: 0.1rem;
    box-shadow: 0.01rem 0.02rem 0.1rem 0.01rem rgba(0, 0, 0, 0.2);
    &__band {
          width: 100%;
          height: .08rem;
          background-color: rgb(38, 131, 238);
          border-radius: .1rem .1rem 0 0;
    }
  }
}
</style>
