<template>
<!-- Reported Contents -->
  <div class="content-wrapper">
    <div class="content">
      <div class="content__photos">
        <div class="content__photos__image" title="Uploaded Photo"></div>
      </div>
      <div class="content__loc-and-pollut">
        <div class="content__loc-and-pollut__loc">
          <span class="content__title content__loc-and-pollut__loc__title">Location</span>
          <span class="iconfont content__loc-and-pollut__loc__area">E3 &#xe607;</span>
        </div>
        <div class="content__loc-and-pollut__pollut">
          <span class="content__title content__loc-and-pollut__pollut__title"
            >Trash Concentration</span
          >
          <span
            class="iconfont icontent__loc-and-pollut__pollut__level"
            v-for="(item, index) in 5"
            :key="index"
            >&#xe714;</span
          >
        </div>
      </div>
      <div class="content__date">
        <div class="content__title content__date__title">Date</div>
        <div class="content__date__text">2021-6-13</div>
      </div>
      <div class="content__desc">
        <div class="content__title content__desc__title">Description</div>
        <div class="content__desc__text" title="Voice Message">
            <span class="iconfont">&#xe675;</span>
        </div>
      </div>
      <div class="content__reporter">
        <div class="content__title content__reporter__title">Reported by</div>
        <div class="content__reporter__profile">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-touxiang2"></use>
            </svg>
            <span>ADoge</span>
        </div>
      </div>
    </div>
  </div>
  <div class="submit">
      <div class="submit__rsv">
          <span class="submit__instr">save into "History"</span>
          <button class="iconfont submit__btn">&#xe652; Reserve</button>
      </div>
      <div class="submit__cld">
          <span class="submit__instr">Declare Cleaned</span>
          <button class="iconfont submit__btn">&#xe64d; Complete</button>
      </div>
  </div>
  <div class="notice">Reserve a report will remove it from the home page !</div>
</template>

<script>
export default {
  name: 'Content'
}
</script>

<style lang="scss" scoped>
@import '../../../style/variables.scss';
@import '../../../style/mixins.scss';
.content-wrapper {
  position: absolute;
  top: 14%;
  left: 4%;
  height: 56%;
  width: 92%;
  border: 2px solid $content-themeColor;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;
  padding-left: 4%;
  width: 100%;
  height: 100%;
  &__title {
        display: inline-block;
        margin-top: 3%;
        width: 100%;
        font-size: 0.17rem;
        font-weight: bold;
        color: $content-themeColor;
    }
  &__photos {
    margin-top: 2%;
    height: 0.8rem;
    width: 90%;
    // @include flexCenter;
    &__image {
      height: 0.8rem;
      width: 0.8rem;
      background-image: url("https://trello-attachments.s3.amazonaws.com/60ba1bb04709e232d53f03ce/60cdef7d4ca18b297455d3e0/df77c16433eafde9bbea6f6c2766bd31/%E6%B5%B7%E6%BB%A9%E5%9E%83%E5%9C%BE4.jpeg");
      background-size: cover;
    }
  }
  &__loc-and-pollut {
    display: flex;
    margin-top: 2%;
    height: 0.7rem;
    width: 90%;
    &__loc {
      height: 100%;
      width: 50%;
      &__area {
        display: inline-block;
        margin-top: 2%;
        font-size: 0.2rem;
        font-weight: bold;
        color: $content-themeViceColor;
      }
    }
    &__pollut {
      height: 100%;
      width: 50%;
      &__title {
          text-align: center;
      }
      .iconfont {
        font-size: 0.3rem;
        color: #777;
      }
      .iconfont:nth-child(2),
      .iconfont:nth-child(3) {
        color: $content-themeViceColor;
      }
    }
  }
  &__desc {
    height: 0.7rem;
    width: 90%;
    &__text {
      margin-top: 2%;
      width: 1.6rem;
      height: .24rem;
      border-radius: .06rem;
      background-color: $content-themeViceColor;
      box-shadow: 0.01rem 0.02rem 0.1rem 0.01rem rgba(0, 0, 0, 0.2);
      @include flexCenter;
      .iconfont {
          color:white;
          text-align: center;
      }
    }
  }
  &__date {
      height: .5rem;
      &__text {
          margin-top: 2%;
          font-size: .15rem;
          font-weight: bold;
          color: $content-themeViceColor;
      }
  }&__reporter {
      display:flex;
      flex-direction: column;
      align-items: center;
       width: 100%;
      &__profile{
        display: flex;
        align-items: flex-end;
        svg {
          padding-top: 5%;
          padding-right: 10%;
          font-size: .5rem;
        }
         span{
          font-size: .15rem;
          font-weight: bold;
          color: $content-fontcolor;
        }
      }
  }
}
.submit {
  display: flex;
  position: absolute;
  bottom: 15%;
  left: 5%;
  height: 0.7rem;
  width: 90%;
  &__btn {
      border: none;
      width: 1.2rem;
      height: .4rem;
      border-radius: .06rem;
      font-size: .17rem;
      font-weight: bold;
      color: white;
      background-color: $content-themeColor;
  }
  &__instr {
      color:$content-themeViceColor;
      font-size: .13rem;
  }
  &__rsv {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      width: 50%;
  }
  &__cld {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      width: 50%;
  }
}
.notice {
  position: absolute;
  left: 3%;
  bottom: 9%;
  width: 94%;
  height: .3rem;
  text-align: right;
  color: $content-themeViceColor;
  font-size: .13rem;
  font-weight: bold;
}
</style>
