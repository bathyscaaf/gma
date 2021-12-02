<script>
  import TheHeader from '@/components/TheHeader'
  import MonsterScape from '@/components/MonsterScape'
  import AboutSection from '@/components/AboutSection/AboutSection'
  import LabLottie from '@/components/LabLottie'
  import WorkSection from '@/components/WorkSection/WorkSection'
  import ContactSection from '@/components/ContactSection/ContactSection'
  import { gsap } from 'gsap'
  import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
  import EyeCave from '@/components/EyeCaveContact'
  gsap.registerPlugin(ScrollToPlugin)

  const htmlEl = document.documentElement
  export default {
    components: {
      TheHeader,
      MonsterScape,
      AboutSection,
      LabLottie,
      EyeCave,
      WorkSection,
      ContactSection
    },
    data () {
      return {
        modalActive: false,
        monsterPaused: false,
        scrollPosition: 0
      }
    },
    computed: {
      isScrolled () {
        return this.scrollPosition > 0
      }
    },
    methods: {
      openModal () {
        // console.log('open modal')
        this.modalActive = true
        // htmlEl.classList.add('modal-active')
      },
      toggleModal () {
        this.modalActive = !this.modalActive
      },
      closeModal () {
        // console.log('close modal')
        this.modalActive = false
        this.monsterPaused = false
        htmlEl.classList.remove('modal-active')
      },
      onNavClick (target) {
        // console.log(target)
        gsap.to(window, { duration: 0.75, scrollTo: target, ease: 'expo.inOut' })
      }
    },
    created () {
      window.addEventListener('scroll', (e) => {
        this.scrollPosition = window.top.scrollY
      })
    }
  }
</script>

<template>
  <main id="app"
        class="mooooooo"
  >
    <monster-scape id="marquee-section" :paused="monsterPaused" />
    <about-section id="about-section" @MODAL_OPEN="openModal" />
    <lab-lottie
      aria-hidden="true"
    />
    <work-section id="work-section" @MODAL_OPEN="openModal" />
    <eye-cave
      aria-hidden="true"
    />
    <contact-section id="contact-section" @MODAL_OPEN="openModal" />
    <the-header
      @NAV_CLICK="onNavClick"
      class="header-shadow md:hidden"
    />
    <the-header
      @NAV_CLICK="onNavClick"
      :class="{'header-shadow': isScrolled}"
      class="hidden md:block"
    />
  </main>
</template>

<style>
html.modal-open {
  overflow:hidden;
}
</style>
