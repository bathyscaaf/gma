<script>
import PortalModal from '@/components/_common/PortalModal/PortalModal.vue'
  export default {
    name: 'AboutSection',
    components: {
      PortalModal
    },
    data () {
      return {
        showTestModal: false
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
  <section class="w-full bg-about">
    <article class="container px-16 mx-auto text-white pb-20">
      <header class="pt-12">
        <div class="section-header text-5xl md:text-5xl text-graphite">
          ABOUT
        </div>
      </header>
      <div class="blurb md:flex items-baseline">
        <div class="md:w-1/3">
          <span class="text-3xl font-semi-bold">Hi. I'm Glenn Berry, a front-end web developer and multimedia swiss army knife based in Seattle, WA.</span>
          <div>
            <a href="/bin/glenn_berry_resume.pdf" target="_blank" rel="noopener" class="button bg-khaki text-graphite mt-8 inline-flex no-underline">
              <img src="/img/download-01.svg" alt="download icon" aria-hidden="true" class="svg-download">
              <div class="ml-4">RESUME</div>
              <div class="ml-4 bg-graphite text-white text-sm font-heading rounded p-2 opacity-25">
                PDF
              </div>
            </a>
          </div>
          <div class="ml-4 bg-graphite text-white text-sm font-heading rounded p-2 opacity-25"
               @click="showTestModal = true"
          >
            Test Modal
          </div>
        </div>
        <div class="md:w-2/3 md:ml-8 text-2xl">
          <p>
            I make responsive websites using modern tools like <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue JS</a> and <a href="https://graphql.org/" target="_blank" rel="noopener">GraphQL</a>.
          </p>
          <p class="mt-4">
            I plan and build the entire front-end of a data-driven CRM and analytics website (for the company I co-founded).
          </p>
          <p class="mt-4">
            I animate with After Effects, Photoshop, Illustrator.
          </p>
          <p class="mt-4">
            I'm building a live music-performance video visualization program using <a href="https://derivative.ca/" target="_blank" rel="noopener">Touchdesigner</a>.
          </p>
          <p class="mt-4 flex items-center">
            I <img src="/img/heart.svg" alt="love" class="mx-2"> synthesizers.
          </p>
        </div>
      </div>
    </article>
    <portal-modal
      :show="showTestModal"
      modal-type="image"
      @CLOSE_MODAL="showTestModal = false"
    >
      Mooo
    </portal-modal>
  </section>
</template>

<style>
  @import "./style/_styles.scss";
  .svg-download {
    height: 2rem;
  }
</style>
