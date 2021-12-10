<script>
  import script from './script/index'
  export default script
</script>

<template>
  <article class="container mx-auto text-white px-8">
    <header class="mb-4 leading-tight">
      <span class="text-xl md:text-3xl font-heading text-outline-dark">SALTMINE</span> <span class="text-xl ml-4 md:text-3xl font-heading text-peach">2004 - 2008</span>
      <br>
      <span class="font-extraLight">
        Front-end developer/Flash Developer
      </span>
    </header>
    <div class="flex">
      <div class="md:w-1/2 py-2">
        At Saltmine, a now defunct digital agency, I worked on projects for clients such as Intel, Microsoft, Zumiez, Corbis, Weidan &amp; Kennedy, and more.
      </div>
      <aside class="flex flex-wrap md:ml-8">
        <figure class="mb-8 md:mr-8">
          <a role="button"
             title="Zumiez BYOC modal button"
             @click.prevent="showZumiezModal = true">
            <app-img lazy-src="/img/saltmine/zumiez_x2@0.5x.jpg"
                     alt="Zumiez BYOC"
                     class="button-image shadow"
                     :width="244"
                     :height="162"/>
            <div class="play-button"></div>
          </a>
          <figcaption>Zumiez BYOC</figcaption>
        </figure>
        <figure class="mb-8 md:mr-8">
          <a role="button"
             title="Microsoft WPC kiosk modal button"
             @click.prevent="showMsoftModal = true">
            <app-img key="0"
                     lazy-src="/img/saltmine/Microsoft_WPC_x2@0.5x.jpg"
                     alt="Microsoft WPC kiosk"
                     class="button-image shadow"
                     :width="288"
                     :height="216"/>
          </a>
          <figcaption>MS WPC kiosk</figcaption>
        </figure>
      </aside>
    </div>
    <portal-modal
      :has-header="true"
      :has-footer="true"
      :show="showZumiezModal"
      @CLOSE_MODAL="showZumiezModal = false"
    >
      <template v-slot:header>
        Zumiez BYOC
      </template>
      <template v-slot:content>
        <div class="bg-darker inline-flex justify-center">
          <app-img lazy-src="/img/saltmine/zumiez_x2.jpg"
                   class="shadow"
                   alt="Zumiez BYOC"
                   :width="486"
                   :height="323"
          />
        </div>
        <p class="mt-4">
          An animated skateboard package builder on Zumiez.com.  Built using Flash, inventory data ingested via REST endpoint.
        </p>
        <p class="mt-4">
          I also implemented their website redesign, but the screenshots are lost in time.
        </p>
      </template>
      <template v-slot:footer>
        <div class="footer-row flex justify-end">
          <button
            @click="showZumiezModal = false"
            class="button bg-paprika text-white"
          >
            Close
          </button>
        </div>
      </template>
    </portal-modal>
    <portal-modal
      :has-header="true"
      :has-footer="true"
      :show="showMsoftModal"
      @CLOSE_MODAL="showMsoftModal = false"
    >
      <template v-slot:header>
        Microsoft WPC kiosk
      </template>
      <template v-slot:content>
        <div
          class="bg-darker inline-flex justify-center"
        >
          <app-img key="1"
                   lazy-src="/img/saltmine/Microsoft_WPC_x2.jpg"
                   class="shadow"
                   alt="Microsoft WPC kiosk"
                   :width="574"
                   :height="430"
          />
        </div>
        <p class="mt-4 summit-text">
          An interactive Flash quiz embedded into a C# application/kiosk on the floor of Microsoft's Worldwide Partner Conference.
        </p>
      </template>
      <template v-slot:footer>
        <div class="footer-row flex justify-end">
          <button
            @click="showMsoftModal = false"
            class="button bg-paprika text-white"
          >
            Close
          </button>
        </div>
      </template>
    </portal-modal>
  </article>
</template>
<style lang="css" scoped src="./style/_styles.css" />
