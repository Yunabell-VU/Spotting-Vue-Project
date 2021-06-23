<template>
<!-- Confirm pop-up -->
  <div class="content-pop" v-if="bool_show">
    <div class="result" v-html="content"></div>
    <div class="bottom">
      <div class="cancel" @click="cancel">No</div>
      <div class="confirm" @click="confirm">Yes</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'msgConfirmPro',
  data () {
    return {
      bool_show: false,
      content: '',
      cancelBack: undefined,
      confirmBack: undefined
    }
  },
  methods: {
    show (content, confirm, cancel) {
      if (confirm) {
        this.confirmBack = confirm
      }
      if (cancel) {
        this.cancelBack = cancel
      }
      this.content = content
      this.bool_show = true
    },
    cancel () {
      this.bool_show = false
      if (this.cancelBack) {
        this.cancelBack()
      }
    },
    confirm () {
      this.bool_show = false
      if (this.confirmBack) {
        this.confirmBack()
      }
    }
  }
}
</script>

<style scoped>
.content-pop {
  width: 250px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  /* padding: 0.04rem 0 0 0; */
  box-sizing: border-box;
  background: #ffffff;
  height: 149px;
  border-radius: 24px;
}

.result {
  overflow: auto;
  padding: 20px 30px;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  /* bottom: 87px; */
  font-size: 16px;
  position: absolute;
  text-align: center;
  color: #333;
  box-sizing: border-box;
  -webkit-overflow-scrolling: touch;
}
.content-pop .bottom {
  font-size: 16px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #f5f5f5;
}

.content-pop .bottom .cancel {
  color: #666666;
  width: 50%;
  height: 100%;
  line-height: 48px;
  text-align: center;
  border-right: 01px solid #f5f5f5;
}

.content-pop .bottom .confirm {
  color: #2283e2;
  width: 50%;
  height: 100%;
  text-align: center;
  line-height: 48px;
}

.content-pop .title {
  box-sizing: border-box;
  padding: 40px 0;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  color: #333;
  border-bottom: 0.003rem solid #f5f5f5;
}
</style>
