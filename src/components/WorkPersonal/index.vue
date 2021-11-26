<script>
  import script from './script/index'
  export default script
</script>

<template>
  <article class="container mx-auto text-white overflow-hidden px-8">
    <header class="mb-4 leading-tight">
      <h2 class="text-2xl md:text-3xl font-heading">
        PROJECTS<span class="text-2xl ml-4 md:text-3xl font-heading text-work-light">AND ASSORTED EXPERIMENTS</span>
      </h2>
    </header>
    <div class="md:mr-8 mt-12 overflow-hidden">
      <section class="flex flex-wrap md:flex-no-wrap md:mr-8"
               v-observe-visibility="visibilityChanged"
      >
        <div class="md:w-1/2 mb-8">
          <header>
            <h3 class="text-xl font-semi-bold">
              TRIESTE<span class="ml-4 opacity-25">Live Music Visuals</span>
            </h3>
          </header>
          <p>
            Trieste is a music visualizer program built with Touchdesigner (under development).
            The intent is to make something much more granular, and less generic visually, than the usual VJ application.
          </p>
          <p class="mt-4">
            While Trieste <em>can</em> animate based on user-defined frequency bands,
            the intent is to receive MIDI and audio amplitude data directly from individual Ableton Live tracks and animate based on those values &mdash; for example, a portion of the animation could be driven by the kick drum specifically, another by the snares, another by the melody, bassline, etc.
          </p>
          <p class="mt-4">
            Another key feature is the ability to create "scenes" from layers of composited video with targeted animation layers. The idea is one could create a video in After Effects (or any video content creation program), export different layers of alpha-channel video or (or still images), and be able to animate specific layers before compositing them into a single bespoke video.
          </p>
          <p class="mt-4">
            Trieste's current state can be seen in the <a @click.prevent="openModal('trieste')">video</a>.
          </p>
        </div>
        <aside class="md:ml-8">
          <div class="flex flex-wrap md:flex-no-wrap">
            <div class="flex md:flex-col md:flex-no-wrap flex-wrap md:items-end md:mr-8">
              <figure class="mb-8 md:mr-8">
                <div class="relative">
                  <a role="button"
                     title="Trieste modal button"
                     class="button-image button-video shadow"
                     @click.prevent="openModal('trieste')"
                  >
                    <app-img key="2"
                             lazy-src="/img/personal/trieste@0.75x.jpg"
                             alt="Trieste"
                             :width="488"
                             :height="267"
                    />
                    <div class="play-button" />
                  </a>
                </div>
                <figcaption>
                  Trieste (under development)
                </figcaption>
              </figure>

              <template v-if="modalTarget === 'trieste'">
                <card-modal title="TRIESTE (under development)"
                            :active="modalActive"
                            @MODAL_CLOSE="closeModal"
                >
                  <div class="bg-graphite">
                    <iframe src="https://player.vimeo.com/video/392813558"
                            width="640"
                            height="360"
                            allow="autoplay; fullscreen"
                            allowfullscreen
                    />
                  </div>
                  <div class="mt-8"
                       style="max-width: 640px;"
                  >
                    The imagery in the background is the actual Trieste output.  The visible node networks are the actual "code".  This is all real-time, within the Touchdesigner dev environment.
                    What you are seeing is audio input separated into three frequency bands and used to deform various 3d objects which are then composited over randomly chosen video.
                  </div>
                </card-modal>
              </template>

              <figure class="mb-8 md:mr-8">
                <div class="relative">
                  <a role="button"
                     title="Radiant Eye modal button"
                     class="button-image button-video flex items-center justify-center"
                     @click.prevent="openModal('radiant')">
                    <app-img class="shadow"
                             key="2"
                             lazy-src="/img/personal/radianteye@0.5x.jpg"
                             alt="Radiant Eye"
                             :width="326"
                             :height="184"
                    />
                    <div class="play-button" />
                  </a>
                </div>
                <figcaption>"Radiant Eye" &mdash; made to test Trieste's "scene" feature</figcaption>
              </figure>

              <template v-if="modalTarget === 'radiant'">
                <card-modal title="Radiant Eye"
                            :active="modalActive"
                            @MODAL_CLOSE="closeModal"
                >
                  <div class="bg-graphite">
                    <iframe src="https://player.vimeo.com/video/202598664"
                            width="640"
                            height="360"
                            allow="autoplay; fullscreen" allowfullscreen
                    />
                  </div>
                </card-modal>
              </template>
              <figure class="mb-8 md:mr-8">
                <div class="relative">
                  <a role="button"
                     title="Outpost"
                     class="button-image button-video shadow"
                     @click.prevent="openModal('outpost')">
                    <app-img key="2"
                             lazy-src="/img/personal/outpost@0.33x.jpg"
                             alt="Outpost"
                             :width="297"
                             :height="156"
                    />
                    <div class="play-button" />
                  </a>
                </div>
                <figcaption>"Outpost" &mdash; just for fun.  Video and audio.</figcaption>
              </figure>

              <template v-if="modalTarget === 'outpost'">
                <card-modal title="Customer Details"
                            :active="modalActive"
                            @MODAL_CLOSE="closeModal"
                >
                  <div class="bg-graphite">
                    <iframe src="https://player.vimeo.com/video/202594123"
                            width="640"
                            height="360"
                            allow="autoplay; fullscreen"
                            allowfullscreen
                    />
                  </div>
                </card-modal>
              </template>
            </div>
          </div>
        </aside>
      </section>
    </div>
  </article>
</template>

<style>
  .button-image {
    outline: none;
    @apply m-0 p-0 block cursor-pointer
  }
  a.button-video .play-button {
    outline: none;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
    /*opacity: .7;*/
    background: url(/img/playIcon.svg) no-repeat center center/30%;
  }
  .button-image:active {
    outline: none;
  }
  .button-image:focus {
    outline: none;
  }
</style>
