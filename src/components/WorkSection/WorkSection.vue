<script>
  // import LabBackground from '@/components/LabBackground/LabBackground'
  import WorkSoro from '@/components/WorkSoro'
  import WorkSbux from '@/components/WorkSbux'
  import WorkSaltmine from '@/components/WorkSaltmine'
  import WorkPersonal from '@/components/WorkPersonal'

  export default {
    name: 'WorkSection',
    components: {
      WorkSbux,
      WorkSoro,
      WorkSaltmine,
      WorkPersonal
    },
    data () {
      return {
      }
    },
    methods: {
      openModal () {
        this.$emit('MODAL_OPEN')
      }
    }
  }
</script>

<template>
  <section class="w-full bg-work work-section sedimentary-layer"
           id="work-section-soro"
  >
    <header class="container mx-auto p-8 md:pt-12">
      <h2 class="section-header text-5xl md:text-5xl text-white">
        WORK
      </h2>
    </header>
    <work-soro class="container px-8" />

    <div class="separator my-8 overflow-hidden" id="work-section-starbucks">
      <img src="img/line.svg"
           class="opacity-25"
           alt="separator-line"
           aria-hidden="true"
      >
    </div>
    <work-sbux />

    <div class="separator my-8 overflow-hidden">
      <img src="img/line.svg"
           class="opacity-25"
           alt="separator-line"
           aria-hidden="true"
      >
    </div>
    <work-saltmine />

    <div class="separator my-8 overflow-hidden"
         id="work-section-saltmine"
    >
      <img src="img/line.svg"
           class="opacity-25"
           alt="separator-line"
           aria-hidden="true"
      >
    </div>
    <work-personal class="relative pb-12" />
  </section>
</template>

<style>
</style>
