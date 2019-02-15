<template>
  <div id='home'>
    <div class='main-body'>
      <ul>
        <li class="d_jump" ref="index1" style="height: 500px;">1.基本信息</li>
        <li class="d_jump" ref="index2">2.联系信息</li>
        <li class="d_jump">3.供应商品</li>
        <li class="d_jump">4.设备设施</li>
        <li class="d_jump">5.工程案例</li>
        <li class="d_jump">6.证明材料</li>

      </ul>
      <!-- 左侧-基于element-ui的step组件封装 -->
      <div class="step">
        <left-step :steps="steps"></left-step>
      </div>
    </div>
  </div>
</template>

<script>
import leftSteps from './public/steps.vue'
export default {
  name: 'app',
  data () {
    return {
      steps: {
        active: 0,
        step: [
          {title: '基本信息'},
          {title: '联系信息'},
          {title: '供应商品'},
          {title: '设备设施'},
          {title: '工程案例'},
          {title: '证明材料'}
        ]
      }
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      window.addEventListener('scroll', this.onScroll)
    })
    let index1H = this.$refs.index1.offsetHeight
    let index2H = this.$refs.index2.offsetHeight
    console.log(index1H)
    console.log(index2H)
  },
  methods: {
    onScroll () {
      let scrolled = document.documentElement.scrollTop || document.body.scrollTop
      // 手动获取到各个锚点的距离
      if (scrolled < 310) {
        this.steps.active = 0
      } else if (scrolled < 620 && scrolled >= 310) {
        this.steps.active = 1
      } else if (scrolled < 930 && scrolled >= 620) {
        this.steps.active = 2
      } else if (scrolled < 1240 && scrolled >= 930) {
        this.steps.active = 3
      } else if (scrolled < 1540 && scrolled >= 1240) {
        this.steps.active = 4
      } else {
        this.steps.active = 5
      }
    }
  },
  computed: {},
  components: {
    'left-step': leftSteps
  }
}
</script>

<style lang='less'>
.main-body {
  padding: 0 180px;
  margin: 0 auto;
}
.d_jump {
  height: 330px;
  font-size: 30px;
  color: #333;
  background-color: #e4e4e4;
  text-align: center;
  border-bottom: 1px solid #333;
}
.step {
  position: fixed;
  left: 25px;
  top: 100px;
}
</style>
