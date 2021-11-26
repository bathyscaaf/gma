<script>
  export default {
    name: 'EyeCave',
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
        // console.log('triggered')
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
        container: this.$refs.eye, // the dom element that will contain the animation
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: '/lottie/eye_shapes.json' // the path to the animation json
      })
    }
  }
</script>

<template>
  <div class="bg-work">
    <div class="pb-8">
      <svg id="strata-top"
           class="w-full"
           xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 6616 100">
        <rect width="6616"
              height="100"
              class="fill-about"
              style="stroke:none"/>
        <path d="M6617,1278H0v-30.8c455.87-71.1,699.68-7.7,977.09-8.1,279.92-.3,298.58-28,550.16-28.9,250.29-.9,361.5,35.9,539.73,40.9,292.11-29.8,297.51-38,584.36-24.2,235.44-12.8,187.37-31.7,427.08-38.6,444.21-35,954.92,25.5,1553.38,59.2,0,0,781-50.3,1985.1,10.7Z"
              transform="translate(0 -1177)"
              class="fill-work"
              style="stroke:none"/>
      </svg>
    </div>
    <div class="h-cave-sm landscape-sm:h-cave-sm md:h-cave-md lg:h-cave-md xl:h-cave-xl w-full bg-black flex flex-col justify-center items-center relative overflow-hidden">
      <div id="eye-container">
        <div ref="eye"
             v-observe-visibility="visibilityChanged"
             class="max-w-xs xl:max-w-lg"
        />
      </div>
      <img id="stalactites"
           class="xl:min-w-4/4 absolute top-0 overflow-hidden w-full min-w-10/4 portrait-sm:min-w-8/4 landscape-sm:min-w-6/4 md:min-w-6/4 lg:min-w-0 "
           src="img/stalactites.svg"
           aria-hidden="true"
           alt="stalactites"/>
      <img id="stalagmites"
           class="absolute bottom-0 w-full overflow-hidden min-w-10/4 portrait-sm:min-w-9/4 landscape-sm:min-w-6/4 md:min-w-6/4 lg:min-w-5/4"
           src="img/stalagmites.svg"
           aria-hidden="true"
           alt="stalagmites"/>
    </div>
    <div class="pt-8">
      <svg id="strata-bottom" class="w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6616 100">
        <rect width="6616"
              height="100"
              class="fill-transparent"
              style="stroke:none"/>
        <path d="M6617,1278H0v-30.8c455.87-71.1,699.68-7.7,977.09-8.1,279.92-.3,298.58-28,550.16-28.9,250.29-.9,361.5,35.9,539.73,40.9,292.11-29.8,297.51-38,584.36-24.2,235.44-12.8,187.37-31.7,427.08-38.6,444.21-35,954.92,25.5,1553.38,59.2,0,0,781-50.3,1985.1,10.7Z"
              transform="translate(0 -1177)"
              class="fill-work"
              style="stroke:none"/>
      </svg>
    </div>

  </div>

</template>

<style>
  #stalactites {
    top: -1px;
  }
  #stalagmites {
    bottom: -1px;
  }
  #strata-bottom {
    transform: rotate(180deg);
    margin-top: -1px;
    margin-bottom: -1px;
  }
</style>
