<script>
  export default {
    name: 'LabLottie',
    props: {
      active: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        anim: null,
        animationSpeed: 1,
        eyeOpen: false
      }
    },
    watch: {
      active (val, oldVal) {
        if (val) {
          this.onOpenEye()
        }
      }
    },
    methods: {
      handleAnimation: function (anim) {
        this.anim = anim
      },

      stop: function () {
        this.anim.stop()
      },

      play: function () {
        this.anim.play()
      },

      pause: function () {
        this.anim.pause()
      },
      onSpeedChange: function () {
        this.anim.setSpeed(this.animationSpeed)
      },
      visibilityChanged (e) {
        if (e) {
          this.anim.goToAndPlay(1, true)
        } else {
          this.anim.goToAndStop(1, true)
        }
      }
    },
    mounted () {
      this.anim = this.$lottie.loadAnimation({
        container: this.$refs.lab, // the dom element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: '/lottie/lab.json' // the path to the animation json
      })
    }
  }
</script>

<template>
  <div class="bg-about lab-section">
    <div class="lab-container">
      <div ref="lab"
           v-observe-visibility="visibilityChanged"
           class="lab md:soml-20"
      />
    </div>
  </div>

</template>

<style>
  .lab-section {
    display: flex;
  }
  .lab-container {
    display: inline-block;
    margin-bottom: -1px;
    padding: 0;
  }
  .lab {
    padding: 0;
    margin: 0;
  }
</style>
