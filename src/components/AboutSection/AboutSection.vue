<script>
import PortalModal from '@/components/_common/PortalModal2/PortalModal.vue'
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
      :has-header="true"
      :has-footer="true"
      modal-type="image"
      @CLOSE_MODAL="showTestModal = false"
    >
      <template v-slot:header>
        MOOOO I AM HEADER
      </template>
      <template v-slot:content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt aliquam maximus. In pulvinar lacus id dapibus ultricies. In nec sem pretium, sodales dolor vel, euismod neque. Fusce euismod ipsum sit amet dolor tincidunt feugiat. Etiam id odio ut nunc eleifend sollicitudin. Fusce molestie consectetur nisi, sed luctus augue. Vivamus lorem dolor, facilisis quis elit sit amet, interdum pulvinar ante. Cras ultrices, orci vel tincidunt gravida, erat massa aliquam nulla, id elementum nisl leo ut odio. Maecenas id enim dictum, dapibus lectus ac, interdum tellus. Nullam et ex volutpat ex sagittis mollis at in justo. Etiam quis volutpat dolor. Etiam nisi lectus, varius eu dictum non, dapibus id mauris. Nunc a eros sodales, cursus dolor at, lacinia augue.

        Morbi a elit a massa commodo porta quis fermentum metus. Pellentesque ullamcorper dui sit amet lorem scelerisque, ac iaculis justo viverra. Morbi pulvinar, quam eu viverra aliquet, lorem sapien pretium enim, in faucibus risus velit quis sem. Aenean rutrum arcu nibh, in condimentum est ultricies quis. Mauris lobortis efficitur leo, eget bibendum tortor rhoncus nec. Praesent dui lacus, cursus nec pulvinar a, feugiat sed tellus. Pellentesque sit amet leo sit amet ante tincidunt auctor at sed nunc. Phasellus a tincidunt dui, ut hendrerit est. Nulla diam leo, hendrerit in tellus a, gravida ultrices nulla.

        Nullam mauris odio, faucibus vitae faucibus et, egestas nec nulla. Nam id odio eu diam sagittis interdum. Mauris consequat nulla eu sapien porta, ac tempor velit congue. Nullam dignissim vulputate consequat. Integer posuere mi ac purus ultrices ullamcorper. Aliquam ultrices velit vitae enim lobortis ultrices. Cras non placerat nibh, ut ultricies metus. Vivamus aliquam ante eget velit ullamcorper ultricies. Vestibulum ipsum mi, volutpat in aliquam non, elementum ac est. Vivamus tincidunt est odio, at rutrum sem egestas eget. Donec sollicitudin tempor sem, eu tincidunt leo commodo non. Suspendisse tristique tempor ligula, eget hendrerit neque facilisis ac. Donec vitae nisi vel felis hendrerit dapibus. Nam facilisis leo eu neque fringilla, vel cursus ligula tristique.

        Cras et nisi fringilla mi sodales iaculis nec eu nisl. Aliquam erat volutpat. Cras volutpat sapien diam, sit amet accumsan mi varius ac. Praesent lectus ante, pellentesque vel vehicula sollicitudin, vehicula eu orci. Mauris luctus nisl sit amet dolor volutpat, id aliquam metus lacinia. Pellentesque efficitur neque scelerisque ligula venenatis rutrum vel ac ipsum. Duis gravida vehicula ex a placerat. Suspendisse congue tempus dui, nec consequat metus tempus in. Aliquam erat volutpat. Vivamus vitae urna lacinia, sollicitudin magna mollis, varius sapien. Donec in tempor arcu. Aliquam rhoncus, enim at ultrices porttitor, nisl dui laoreet eros, elementum pulvinar eros nisi at risus. Ut sagittis est a mi congue viverra.

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt aliquam maximus. In pulvinar lacus id dapibus ultricies. In nec sem pretium, sodales dolor vel, euismod neque. Fusce euismod ipsum sit amet dolor tincidunt feugiat. Etiam id odio ut nunc eleifend sollicitudin. Fusce molestie consectetur nisi, sed luctus augue. Vivamus lorem dolor, facilisis quis elit sit amet, interdum pulvinar ante. Cras ultrices, orci vel tincidunt gravida, erat massa aliquam nulla, id elementum nisl leo ut odio. Maecenas id enim dictum, dapibus lectus ac, interdum tellus. Nullam et ex volutpat ex sagittis mollis at in justo. Etiam quis volutpat dolor. Etiam nisi lectus, varius eu dictum non, dapibus id mauris. Nunc a eros sodales, cursus dolor at, lacinia augue.

        Morbi a elit a massa commodo porta quis fermentum metus. Pellentesque ullamcorper dui sit amet lorem scelerisque, ac iaculis justo viverra. Morbi pulvinar, quam eu viverra aliquet, lorem sapien pretium enim, in faucibus risus velit quis sem. Aenean rutrum arcu nibh, in condimentum est ultricies quis. Mauris lobortis efficitur leo, eget bibendum tortor rhoncus nec. Praesent dui lacus, cursus nec pulvinar a, feugiat sed tellus. Pellentesque sit amet leo sit amet ante tincidunt auctor at sed nunc. Phasellus a tincidunt dui, ut hendrerit est. Nulla diam leo, hendrerit in tellus a, gravida ultrices nulla.

        Nullam mauris odio, faucibus vitae faucibus et, egestas nec nulla. Nam id odio eu diam sagittis interdum. Mauris consequat nulla eu sapien porta, ac tempor velit congue. Nullam dignissim vulputate consequat. Integer posuere mi ac purus ultrices ullamcorper. Aliquam ultrices velit vitae enim lobortis ultrices. Cras non placerat nibh, ut ultricies metus. Vivamus aliquam ante eget velit ullamcorper ultricies. Vestibulum ipsum mi, volutpat in aliquam non, elementum ac est. Vivamus tincidunt est odio, at rutrum sem egestas eget. Donec sollicitudin tempor sem, eu tincidunt leo commodo non. Suspendisse tristique tempor ligula, eget hendrerit neque facilisis ac. Donec vitae nisi vel felis hendrerit dapibus. Nam facilisis leo eu neque fringilla, vel cursus ligula tristique.

        Cras et nisi fringilla mi sodales iaculis nec eu nisl. Aliquam erat volutpat. Cras volutpat sapien diam, sit amet accumsan mi varius ac. Praesent lectus ante, pellentesque vel vehicula sollicitudin, vehicula eu orci. Mauris luctus nisl sit amet dolor volutpat, id aliquam metus lacinia. Pellentesque efficitur neque scelerisque ligula venenatis rutrum vel ac ipsum. Duis gravida vehicula ex a placerat. Suspendisse congue tempus dui, nec consequat metus tempus in. Aliquam erat volutpat. Vivamus vitae urna lacinia, sollicitudin magna mollis, varius sapien. Donec in tempor arcu. Aliquam rhoncus, enim at ultrices porttitor, nisl dui laoreet eros, elementum pulvinar eros nisi at risus. Ut sagittis est a mi congue viverra.
      </template>
      <template v-slot:footer>
        <button class="button bg-paprika text-white">Close</button>
      </template>
    </portal-modal>
  </section>
</template>

<style>
  @import "./style/_styles.scss";
  .svg-download {
    height: 2rem;
  }
</style>
