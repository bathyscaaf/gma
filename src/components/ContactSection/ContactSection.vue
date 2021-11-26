<script>
  import script from './script/index'
  export default script
</script>

<template>
  <section class="w-full bg-contact px-8 pb-64 text-khaki">
    <article class="container mx-auto">
      <header class="py-12">
        <div class="font-heading text-5xl md:text-4xl text-darker">Contact Me</div>
      </header>
      Via:
      <ul class="list-disc list-inside">
        <li>
          <a href="mailto:glenn@giantmonsterattack.com?subject=Contact%20from%20Giantmonsterattack%20site">glenn@giantmonsterattack.com</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/glenn-berry-5b59673"
             target="_blank"
             rel="noopener">
            Linkedin profile
          </a>
        </li>
      </ul>
      <div class="mb-8">
        or use the email form below.
      </div>
      <div class="email-form md:w-1/2">
        <email-form />
      </div>
    </article>
  </section>
</template>

<style>
</style>
