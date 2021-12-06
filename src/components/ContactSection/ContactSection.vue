<script>
  import script from './script/index'
  export default script
</script>

<template>
  <section class="w-full bg-contact px-8 pb-64 text-white">
    <article class="container mx-auto">
      <header class="py-12">
        <h2 class="section-header text-outline-dark text-5xl md:text-4xl text-white">
          CONTACT
        </h2>
      </header>
      <div class="text-2xl mb-4">Send a message:</div>
      <div
        class="ml-4"
      >
        <a href="https://www.linkedin.com/in/glenn-berry-5b59673"
           target="_blank"
           rel="noopener"
           class="inline-flex text-xl"
        >
          <img src="/img/linkedin.svg" width="32" height="32" alt="Linked In logo" class="mr-2">
          Linkedin profile
        </a>
      </div>
      <div
        class="ml-4 mt-2"
      >
        <a
          class="inline-flex text-xl"
          href="mailto:glenn@giantmonsterattack.com?subject=Contact%20from%20Giantmonsterattack%20site">
          <img src="/img/email.svg" width="32" height="32" alt="Linked In logo" class="mr-2">
          glenn@giantmonsterattack.com
        </a>
      </div>
      <div class="mb-8 text-2xl mt-4">
        or use the form below:
      </div>
      <div class="email-form md:w-1/2">
        <email-form />
      </div>
    </article>
  </section>
</template>

<style>
</style>
