<script>
  import TheHeader from '@/components/TheHeader'
  import MonsterScape from '@/components/MonsterScape'
  import AboutSection from '@/components/AboutSection/AboutSection'
  import { gsap } from 'gsap'
  import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
  gsap.registerPlugin(ScrollToPlugin)
  const labLottie = () => import(
    /* webpackchunkname: "lab-lottie" */ '@/components/LabLottie.vue'
    )
  const workSection = () => import(
    /* webpackchunkname: "work-section" */ '@/components/WorkSection/WorkSection.vue'
    )
  const contactSection = () => import(
    /* webpackchunkname: "contact-section" */ '@/components/ContactSection/ContactSection.vue'
    )
  const eyeCave = () => import(
    /* webpackchunkname: "eye-cave" */ '@/components/EyeCaveContact'
    )
  const htmlEl = document.documentElement
  export default {
    components: {
      TheHeader,
      MonsterScape,
      AboutSection,
      labLottie,
      eyeCave,
      workSection,
      contactSection
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
    created () {
      window.addEventListener('scroll', (e) => {
        this.scrollPosition = window.top.scrollY
      })
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
    }
  }
</script>

<template>
  <main id="app">
    <monster-scape id="marquee-section" :paused="monsterPaused" />
    <about-section id="about-section" @MODAL_OPEN="openModal" />
    <lab-lottie
      class="lab-lottie"
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
