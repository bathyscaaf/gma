<script>
  import script from './script/index'
  export default script
</script>

<template>
  <article class="container mx-auto text-white overflow-hidden px-8">
    <header class="mb-4 leading-tight">
      <h2 class="text-2xl md:text-3xl font-heading text-outline-dark">STARBUCKS<span class="text-2xl ml-4 md:text-3xl font-heading text-peach">2008 - 2015</span></h2>
    </header>
    <div class="md:mr-8 mt-12 overflow-hidden">
      <section class="flex flex-wrap md:flex-no-wrap md:mr-8" v-observe-visibility="visibilityChanged">
        <div class="md:w-1/2 mb-8">
          <header>
            <h3 class="text-xl font-semi-bold text-outline-dark">STARBUCKS.COM<span class="ml-2 text-peach">&amp; RELATED MICROSITES</span></h3>
          </header>
          <p>
            During my 6 years at Starbucks our website grew from a few promotional pages to a fully responsive,
            fully localized information, coffee culture, and e-commerce destination. As part
            of our talented team of developers my work touched each aspect of the site, from the Homepage to the
            Starbucks Account section.
          </p>
          <p class="mt-4">
            For much of that time I was individually responsible for video on Starbucks.com, developing custom
            video solutions using Flash and later HTML5.
          </p>
        </div>
        <aside class="md:ml-8">
          <div class="flex flex-wrap md:flex-no-wrap">
            <div class="flex md:flex-col md:flex-no-wrap flex-wrap md:items-end md:mr-8">
              <div>
                <a class="button-image"
                   role="button"
                   title="Starbucks Homepage (2015) modal button"
                   @click.prevent="openModal('homepage')">
                  <app-img lazy-src="/img/sbux/sbux_homepage@0.5x.png"
                           class="mb-8 shadow portrait-sm:mr-8 landscape-sm:mr-8"
                           alt="Starbucks Homepage (2015)"
                           :height="222"
                           :width="234"/>
                </a>
              </div>
              <div>
                <a class="button-image"
                   role="button"
                   title="Mobile page with media player modal button"
                   @click.prevent="openModal('coffeehouse')">
                  <app-img lazy-src="/img/sbux/sbux_ch_mbx2@0.25x.png"
                           class="mb-8 shadow mr-8 md:ml-0 md:mr-0"
                           alt="Mobile page with media player"
                           :height="113"
                           :width="116"/>
                </a>
              </div>
            </div>
            <div>
              <a class="button-image"
                 role="button"
                 title="Mobile page with media player modal button"
                 @click.prevent="openModal('htb')">
                <app-img lazy-src="/img/sbux/sbux_htb@0.5x.png"
                         class="shadow md:ml-0"
                         alt="How to Brew"
                         :height="416"
                         :width="228"/>
              </a>
            </div>
          </div>

        </aside>
      </section>
      <section>
        <header class="my-12">
          <h3 class="text-xl font-semi-bold text-outline-dark">STARBUCKS RETI<span class="text-peach ml-4">INSTALLATIONS, KIOSKS</span></h3>
          <span>
            Research into Emerging Technologies team &mdash; I worked with the Starbucks RETI team conceptualizing, prototyping, and executing innovative in-store experiences.
            <br>Some of these projects, such as those below, made it into retail stores, while others remained conceptual prototypes
          </span>
        </header>
        <div class="flex flex-wrap md:flex-no-wrap">
          <div class="md:w-1/2">
            <h4 class="text-xl font-semi-bold text-outline-dark">Magic Chalkboard<span class="ml-4 text-peach">RETI</span></h4>
            <p class="mt-2">
              Interactive touchscreens at the Disneyland and Disneyworld Starbucks stores &mdash; a video camera
              takes real-time video of the immediate area which is transformed into "chalk" outlines on the
              screen.
              On touching the screen the video freezes and the user can draw over top of the frozen 'chalk" with multiple
              fingers. The Anaheim and Orlando screens are networked together, and periodically switch the camera
              views to their sister store.
            </p>
            <p class="mt-4">
              I was intimately involved in the conceptual phase, including the idea itself, building prototypes
              (using Touchdesigner), and creating concept videos exploring the look and feel of potential
              features.
            </p>
            <p class="mt-4 mb-8 md:mb-0">
              <a href="http://www.bloomberg.com/bw/articles/2014-06-03/in-new-disney-starbucks-magic-chalkboards-mimic-customers"
                 target="_blank" rel="noopener">"In New Disney Starbucks, 'Magic' Chalkboards Mimic Customers"</a> &mdash; link
              to Bloomberg.com
            </p>
          </div>
          <aside class="md:ml-8 flex flex-wrap">
            <div class="relative">
              <div class="inline-block relative">
                <a role="button"
                   class="button-image button-video shadow mb-8"
                   title="Magic Chalkboard Disneyland modal button"
                   @click.prevent="openModal('mc1')">
                  <app-img lazy-src="/img/sbux/MagicChalkboard_Wide_x2@0.5x.png"
                           alt="Magic Chalkboard in use"
                           :width="358"
                           :height="202"/>
                  <div class="play-button"></div>
                </a>
              </div>

            </div>
            <div>
              <a role="button"
                 class="button-image shadow landscape-sm:ml-8 md:ml-8"
                 title="Magic Chalkboard Disneyland modal button"
                 @click.prevent="openModal('mc2')">
                <app-img lazy-src="/img/sbux/MagicChalkboard1_x2@0.25x.png"
                         alt="Magic Chalkboard in use"
                         :height="238"
                         :width="170"/>
              </a>
            </div>
          </aside>
        </div>

        <div class="flex flex-wrap md:flex-no-wrap mt-12 mb-2">
          <div class="md:w-1/2">
            <h4 class="text-xl font-semi-bold text-outline-dark">Coffee Passion Wall<span class="ml-4 text-peach">RETI</span></h4>
            <p class="mt-2">
              A six screen matrix on display in the Disneyland and Disneyworld Starbucks stores. The video plays
              like an organic, (very) slowly animated painting &mdash; intended add to the store's ambiance, yet remain
              unobtrusive.
            </p>
            <p class="mt-4">
              I created over two hours of highly stylized video for this project using existing footage, photos,
              and time-lapse sequences as raw material.
            </p>
            <p class="mt-4 mb-8 md:mb-0">
              <a href="http://www.technobuffalo.com/2014/03/11/starbucks-unveils-new-interactive-display-at-downtown-disney/"
                 target="_blank" rel="noopener">Starbucks Unveils New Interactive Display at Downtown Disney</a> &mdash; Techno
              Buffalo article
            </p>
          </div>
          <aside class="md:ml-8 flex flex-wrap">
            <div class="flex">
              <div>
                <div class="relative">
                  <a role="button"
                     class="button-image button-video shadow mb-8 md:mb-0 landscape-sm:mr-8 portrait-sm:mr-8"
                     title="Magic Chalkboard Disneyland modal button"
                     @click.prevent="openModal('cpwVid')">
                    <app-img lazy-src="/img/sbux/btc_poster.jpg"
                             alt="CPW Video"
                             :width="640/1.85"
                             :height="360/1.85"/>
                    <div class="play-button"></div>
                  </a>
                </div>
              </div>
              <div class="flex flex-col flex-wrap md:ml-8">
                <div class="mb-8">
                  <a role="button"
                     class="button-image shadow"
                     title="Coffee Passion Wall scale reference modal button"
                     @click.prevent="openModal('cpw1')">
                    <app-img lazy-src="/img/sbux/CoffeePassionWall1_x2@0.5x.png"
                             alt="Magic Chalkboard in use"
                             :width="234"
                             :height="214"/>
                  </a>
                </div>
                <div class="md:ml-8">
                  <a role="button"
                     class="button-image"
                     title="Coffee Passion Wall perspective modal button"
                     @click.prevent="openModal('cpw2')">
                    <app-img lazy-src="/img/sbux/CoffeePassionWall2_x2@0.5x.png"
                             alt="Coffee Passion Wall perspective"
                             class="shadow"
                             :width="204"
                             :height="150"/>
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>

        <div class="mt-12 mb-2 flex">
          <div>
            <div>
              <h4 class="text-xl font-semi-bold text-outline-dark">Additional RETI Projects</h4>
              <p class="mt-2 mb-4">
                Some additional examples.  Details within the modal windows.
              </p>
            </div>
            <aside class="flex flex-wrap">
              <div class="mb-8 landscape-sm:mr-8">
                <figure>
                  <a role="button"
                     class="button-image shadow"
                     title="Evolution Fresh modal button"
                     @click.prevent="openModal('evolution')">
                    <app-img lazy-src="/img/sbux/EvolutionFresh.jpg"
                             alt="Evolution Fresh"
                             :width="234"
                             :height="214"/>
                  </a>
                </figure>
                <figcaption>Evolution Fresh</figcaption>
              </div>
              <div class="md:ml-8">
                <figure class="portrait-sm:mb-8">
                  <a role="button"
                     class="button-image shadow"
                     title="MIDAS modal button"
                     @click.prevent="openModal('midas')">
                    <app-img lazy-src="/img/sbux/midas@0.25x.jpg"
                             alt="MIDAS"
                             :width="208"
                             :height="129"/>
                  </a>
                  <figcaption>Midas</figcaption>
                </figure>
              </div>
              <div>
                <figure class="relative md:ml-8 md:mb-0 portrait-sm:mb-8">
                  <a role="button"
                     class="button-image button-video shadow"
                     title="Magic Chalkboard Disneyland modal button"
                     @click.prevent="openModal('midasVid')">
                    <app-img lazy-src="/img/sbux/midas_selected@0.5x.jpg"
                             alt="CPW Video"
                             :width="259"
                             :height="162"/>
                    <div class="play-button"></div>
                  </a>
                  <figcaption>Midas in action</figcaption>
                </figure>
              </div>
            </aside>
          </div>

        </div>

      </section>
    </div>
    <template v-if="modalTarget === 'homepage'">
      <card-modal title="Starbucks Homepage (2015)" :active="modalActive" @MODAL_CLOSE="closeModal">
        <app-img lazy-src="/img/sbux/sbux_homepage.png"
                 class="shadow"
                 alt="Starbucks Homepage (2015)"
                 :height="468"
                 :width="441"/>
      </card-modal>
    </template>

    <template v-if="modalTarget === 'coffeehouse'">
      <card-modal title="Starbucks Homepage (2015)" :active="modalActive" @MODAL_CLOSE="closeModal">
        <app-img lazy-src="/img/sbux/sbux_ch_mbx2.png"
                 class="shadow"
                 alt="Mobile page with media player"
                 :height="638/2"
                 :width="1065/2"/>
      </card-modal>
    </template>

    <template v-if="modalTarget === 'htb'">
      <card-modal title="Starbucks Homepage (2015)" :active="modalActive" @MODAL_CLOSE="closeModal">
        <app-img lazy-src="/img/sbux/sbux_htb.png"
                 class="shadow"
                 alt="How to Brew"
                 :height="832"
                 :width="454"/>
      </card-modal>
    </template>

    <template v-if="modalTarget === 'mc1'">
      <card-modal title="Magic Chalkboard in use" :active="modalActive" @MODAL_CLOSE="closeModal">
        <div class="bg-black">
          <video src="/video/magic_chalkboard_baseline.mp4" controls mute autoplay />
        </div>
      </card-modal>
    </template>

    <template v-if="modalTarget === 'mc2'">
      <card-modal title="Magic Chalkboard, Disneyland" :active="modalActive" @MODAL_CLOSE="closeModal">
        <app-img lazy-src="/img/sbux/MagicChalkboard1_x2.png"
                 class="shadow"
                 alt="Magic Chalkboard, Disneyland"
                 :height="475"
                 :width="337"/>
      </card-modal>
    </template>

    <template v-if="modalTarget === 'cpwVid'">
      <card-modal title="Coffee Passion Wall" :active="modalActive" @MODAL_CLOSE="closeModal">
        <div class="bg-black">
          <video src="/video/CoffeePassionEdit_baseline2.mp4" controls mute autoplay />
        </div>
      </card-modal>
    </template>

    <template v-if="modalTarget === 'cpw1'">
      <card-modal title="Coffee Passion Wall" :active="modalActive" @MODAL_CLOSE="closeModal">
        <app-img lazy-src="/img/sbux/CoffeePassionWall1_x2.png"
                 class="shadow"
                 alt="Coffee Passion Wall scale reference"
                 :width="466"
                 :height="428"/>
      </card-modal>
    </template>

    <template v-if="modalTarget === 'cpw2'">
      <card-modal title="Coffee Passion Wall" :active="modalActive" @MODAL_CLOSE="closeModal">
        <app-img lazy-src="/img/sbux/CoffeePassionWall2_x2.png"
                 class="shadow"
                 alt="Coffee Passion Wall perspective"
                 :width="405"
                 :height="297"/>
      </card-modal>
    </template>

    <template v-if="modalTarget === 'evolution'">
      <card-modal title="Evoution Fresh" :active="modalActive" @MODAL_CLOSE="closeModal">
        <div>
          <app-img lazy-src="/img/sbux/EvolutionFresh_x2.jpg"
                   class="shadow"
                   alt="Evoution Fresh"
                   :width="573"
                   :height="332"/>
          <div class="">
            <h4 class="mt-4">EVOLUTION FRESH</h4>
            <h5>"Video Wall"</h5>
            <p>
              Displays promotional and nutritional information, as well as the store menu.
              <br>Each spigot is connected to a sensor and Arduino microcontroller board<br>Each spigot combination triggers different video and effects.
            </p>
            <p class="mt-4">
              I was mostly involved in developing the concept,<br>determined the ideal video compression for our custom OpenFrameworks/GStreamer video playback,<br>and created video content.
            </p>
          </div>

        </div>
      </card-modal>
    </template>

    <template v-if="modalTarget === 'midas'">
      <card-modal title="Midas Kiosk" :active="modalActive" @MODAL_CLOSE="closeModal">
        <div class="bg-darker flex justify-center rounded">
          <app-img lazy-src="/img/sbux/midas.jpg"
                   class="shadow"
                   alt="Midas"
                   :width="827"
                   :height="517"/>
        </div>
        <p class="mt-4">
          Built as a tool to help customers pick a packaged coffee that suits their tastes.<br>
          Stamp icons &mdash; representing the packaged coffees &mdash; flow onto the screen above a filter section.
          <br>
          The filters, used in combination, change the stamps displayed.
        </p>
        <p class="mt-4">
          Once chosen a stamp animates to display the coffee description, tasting combinations, region map, picture gallery, and related coffees.
        </p>

      </card-modal>
    </template>

    <template v-if="modalTarget === 'midasVid'">
      <card-modal title="Midas Kiosk" :active="modalActive" @MODAL_CLOSE="closeModal">
        <div>
          <div class="bg-darker flex justify-center">
            <video src="/video/midas.mp4" controls mute poster="/img/sbux/midas_selected.jpg" class="outline-none bg-black"/>
          </div>
          <p class="mt-4">
            Midas in action: this was filmed on my workstation, which is not a touchscreen.
            <br>
            If you look at the bottom of the video you can see me control the application via another touchscreen
          </p>
          <p class="mt-4">
            Built as a tool to help customers pick a packaged coffee that suits their tastes.<br>
            Stamp icons &mdash; representing the packaged coffees &mdash; flow onto the screen above a filter section.
            <br>
            The filters, used in combination, change the stamps displayed.
          </p>
          <p class="mt-4">
            Once chosen a stamp animates to display the coffee description, tasting combinations, region map, picture gallery, and related coffees.
          </p>
        </div>
      </card-modal>
    </template>

  </article>
</template>

<style>
  @import "./style/_styles.css";
  .ss-pic {
    width: 30rem;
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
</style>
