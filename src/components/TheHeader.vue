<script>
  export default {
    name: 'TheHeader',
    methods: {
      onNavClick (e) {
        this.$emit('NAV_CLICK', e)
      }
    }
  }
</script>

<template>
  <header
    class="h-16 header-site w-full fixed bottom-0 left-0 z-30 md:inset-0 lg:inset-0 bg-peach-65 md:flex md:justify-between items-center">
    <nav class="h-full">
      <button @click="onNavClick('#marquee-section')" class="nav-button bg-battleship w-1/4 md:w-auto">
        Monster
      </button>
      <button @click="onNavClick('#about-section')" class="nav-button bg-about w-1/4 md:w-auto">About</button>
      <button @click="onNavClick('#work-section')" class="nav-button bg-work w-1/4 md:w-auto">Work</button>
      <button @click="onNavClick('#contact-section')" class="nav-button bg-contact w-1/4 md:w-auto">Contact</button>
    </nav>
    <div class="pd-12 hidden md:inline-block nav-button">
      <a href="mailto:glenn@gianmonsterattack.com?subject=contact%20from%20giantmonsterattack" class="text-azul">
        glenn@giantmonsterattack.com
      </a>
    </div>
  </header>
</template>

<style>
  .header-site {
    transition: all 0.5s ease;
  }
  .nav-button {
    @apply inline-block text-white font-semi-bold py-2 px-4 h-full outline-none;
  }
  .nav-button:focus {
    @apply outline-none;
  }
</style>
