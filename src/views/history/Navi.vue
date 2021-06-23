<template>
<!-- Navigation bar on top -->
    <div class="navi-wrapper">
        <div class="navi">
            <div class="navi__btn"
            @click="show(1)"
            :class="index===1? 'navi__btn--active':''">
            <span class="iconfont" title="Processing">&#xeae5;</span>
            </div>
            <div class="navi__btn"
            @click="show(2)"
            :class="index===2? 'navi__btn--active':''">
            <span class="iconfont" title="Reserved">&#xe652;</span>
            </div>
            <div class="navi__btn"
            @click="show(3)"
            :class="index===3? 'navi__btn--active':''">
            <span class="iconfont" title="Cleaned">&#xe64b;</span>
            </div>
            <div class="navi__btn"
            @click="show(4)"
            :class="index===4? 'navi__btn--active':''">
            <span class="iconfont" title="Saved">&#xe648;</span>
            </div>
        </div>
        <div class="navi-content">
            <keep-alive>
                <component :is="comp"
                            v-show="isShow">
                </component>
            </keep-alive>
        </div>
    </div>
</template>

<script>
import ProcStreams from './ProcStreams.vue'
import RsvStreams from './RsvStreams.vue'
import ClStreams from './ClStreams.vue'
import SavedStreams from './SavedStreams.vue'
export default {
  name: 'Navi',
  components: { ProcStreams, RsvStreams, ClStreams, SavedStreams },
  data () {
      return {
          index: 1,
          comp: 'ProcStreams',
          isShow: true
      }
  },
  methods: {
      show (value) {
        this.index = value
        this.isShow = true
        if (value === 1) this.comp = 'ProcStreams'
        if (value === 2) this.comp = 'RsvStreams'
        if (value === 3) this.comp = 'ClStreams'
        if (value === 4) this.comp = 'SavedStreams'
      }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/variables.scss";
@import "../../style/mixins.scss";
    .navi-wrapper {
        position: absolute;
        top: 12%;
        left: 0;
        height: 100%;
        width: 100%;
    }
    .navi {
        position: fixed;
        display: flex;
        width: 100%;
        height: .3rem;
        &__btn {
            box-sizing: border-box;
            width: 25%;
            padding-top: 1%;
            background-color: $content-themeColor;
            line-height: .2rem;
            text-align: center;
            span {
                display: inline-block;
                color: white;
                padding-bottom: 2%;
            }
            .iconfont {
                font-size: .2rem;
            }
            &--active {
                background: $content-bgColor;
                span {
                    border-bottom: 2px solid $content-themeColor;
                    color: $content-themeColor;
                }
            }
        }
    }
</style>
