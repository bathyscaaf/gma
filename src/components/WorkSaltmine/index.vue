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
        At Saltmine, a now defunct production house, I worked on projects for clients such as Intel, Microsoft, Zumiez, Corbis, Weidan &amp; Kennedy, and more.
      </div>
      <aside class="flex flex-wrap md:ml-8">
        <figure class="mb-8 md:mr-8">
          <a role="button"
             title="Zumiez BYOC modal button"
             @click.prevent="openModal('zumiez')">
            <app-img lazy-src="/img/saltmine/zumiez_x2@0.5x.jpg"
                     alt="Zumiez BYOC"
                     class="button-image shadow"
                     :width="244"
                     :height="162"/>
            <div class="play-button"></div>
          </a>
          <figcaption>Zumiez BYOC</figcaption>
        </figure>

        <template v-if="modalTarget === 'zumiez'">
          <card-modal title="Zumiez BYOC" :active="modalActive" @MODAL_CLOSE="closeModal">
            <div>
              <app-img lazy-src="/img/saltmine/zumiez_x2.jpg"
                       class="shadow"
                       alt="Zumiez BYOC"
                       :width="486"
                       :height="323"/>
            </div>
          </card-modal>
        </template>

        <figure class="mb-8 md:mr-8">
          <a role="button"
             title="Microsoft WPC kiosk modal button"
             @click.prevent="openModal('ms_wpc')">
            <app-img key="0"
                     lazy-src="/img/saltmine/Microsoft_WPC_x2@0.5x.jpg"
                     alt="Microsoft WPC kiosk"
                     class="button-image shadow"
                     :width="288"
                     :height="216"/>
          </a>
          <figcaption>MS WPC kiosk</figcaption>
        </figure>

        <template v-if="modalTarget === 'ms_wpc'">
          <card-modal title="Microsoft WPC kiosk" :active="modalActive" @MODAL_CLOSE="closeModal">
            <div>
              <app-img key="1"
                       lazy-src="/img/saltmine/Microsoft_WPC_x2.jpg"
                       class="shadow"
                       alt="Microsoft WPC kiosk"
                       :width="574"
                       :height="430"/>
            </div>
          </card-modal>
        </template>
      </aside>
    </div>
  </article>
</template>

<style>
  @import "./style/_styles.css";
  .ss-pic {
    width: 30rem;
  }
  .soro-ss {
    /*border: 1px solid red;*/
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    max-width: 28rem;
    /*background: lightsalmon;*/
  }
  .soro-ss:not(:last-child) {
    /*margin-right: 100px;*/
  }
  .soro-logo {
    max-width: 15rem;
  }
  .ss-preload {
    width: 1px;
    height: 1px;
    overflow: hidden;
    position: absolute;
    left: -200px;
  }
  figure {
    /*background: red;*/
  }
</style>
