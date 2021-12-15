<script>
  import vue100vh from 'vue-100vh'
  import CityImage from '@/components/CityImage'
  export default {
    name: 'MonsterScape',
    components: {
      CityImage,
      vue100vh
    },
    methods: {
      visibilityChanged (e) {
        if (e) {
          this.$refs.monsta.classList.remove('inactive')
        } else {
          this.$refs.monsta.classList.add('inactive')
        }
      }
    }
  }
</script>

<template>
  <section
    class="monster-scape relative w-full bg-peach overflow-hidden"
    v-observe-visibility="visibilityChanged"
  >
    <vue100vh :css="{height: '80rvh'}"
              class="overflow-hidden"
    >
      <header
        class="site-titles relative p-4 md:mt-32 z-20 lg:ml-4 portrait-sm:bg-white-75 landscape-sm:inline-flex landscape-sm:bg-white-75"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xml:space="preserve"
          id="title-svg"
          x="0"
          y="0"
          viewBox="0 0 135.5 123.7"
        >
          <filter id="outline">
            <feMorphology in="SourceAlpha"
                          result="DILATED"
                          operator="dilate"
                          radius="0.1"
            />
            <feFlood
              flood-color="#FFFFFF"
              flood-opacity=".25"
              result="PINK"
            />
            <feComposite
              in="PINK"
              in2="DILATED"
              operator="in"
              result="OUTLINE"
            />
            <feMerge>
              <feMergeNode in="OUTLINE" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <g filter="url(#outline)">
            <path d="M37 17.6c0 9.4-6.9 18.5-18.6 18.5C8.2 36.1 0 28.1 0 17.9 0 7.4 8.5 0 18.6 0 26.5 0 34 5.3 36 12.3H26c-1.6-2.9-4.3-4.5-7.7-4.5-5.6 0-9.5 4.5-9.5 10.1 0 5.8 3.7 10.4 9.5 10.4 4.1 0 7.2-2 8.3-5.6H16.4v-7.1H37v2zM37.2 35.4V.7h8.9v27h10.3v7.8H37.2z" class="name-text"/>
            <path d="M55.1 35.4V.7h19.3v7.8H63.6v5.4h10.5v7.8H63.6v6h10.8v7.8H55.1zM96.9 35.4 83.5 14.2l.2 21.2h-8.5V.7h7.7l13.5 22-.4-22h8.5v34.8h-7.6zM127.8 35.4l-13.3-21.2.2 21.2h-8.5V.7h7.7l13.5 22-.4-22h8.5v34.8h-7.7zM1.5 71.4V36.7h11.1c2.5 0 4.3.1 5.5.4 3.9.9 7.2 3.9 7.2 8.6 0 3-1.4 5.6-4 7 3.8 1.3 5.7 4.1 5.7 8.1 0 3.3-1.4 6.4-4 8.2-2.7 1.9-4.5 2.3-10 2.3H1.5zm12-21.5c2.2 0 3.4-.9 3.4-2.8 0-1.8-1.1-2.6-3.3-2.6H10v5.4h3.5zm1.1 13.7c2.5 0 4-1.1 4-3.3 0-2-1.4-3-4-3H10v6.3h4.6zM27.2 71.4V36.7h19.3v7.8H35.7v5.4h10.5v7.8H35.7v6h10.8v7.8H27.2zM64 71.4l-8-11.2h-.1v11.2h-8.5V36.7h11.4c3.6 0 6.4.5 8.2 1.3 3.8 1.7 6.4 5.8 6.4 10.7 0 5.5-3.3 10-8.6 11l9.4 11.8H64zm-4.9-17.3c3.5 0 5.7-1.6 5.7-5 0-3-2.3-4.7-5.6-4.7h-3.4v9.7h3.3z" class="name-text"/>
            <path d="m90 71.4-8-11.2h-.1v11.2h-8.5V36.7h11.4c3.6 0 6.4.5 8.2 1.3 3.8 1.7 6.4 5.8 6.4 10.7 0 5.5-3.3 10-8.6 11l9.4 11.8H90zm-4.9-17.3c3.5 0 5.7-1.6 5.7-5 0-3-2.3-4.7-5.6-4.7h-3.4v9.7h3.3z" class="name-text"/>
            <path d="M106.1 71.4V58.8L95.7 36.7h9.6l5.2 14 5.2-14h9.5L115 58.8v12.6h-8.9z" class="name-text"/>
          </g>
          <g filter="url(#outline)">
            <path d="M1.6 89.4V73.8h7.9v2.1H3.8v4.7h5.6v2.1H3.8v6.7H1.6zM18.9 89.4l-5.1-7.2v7.2h-2.3V73.8h5c3.7 0 5.4 2 5.4 5.2 0 3-2.3 4.5-4.5 4.6l4.3 5.8h-2.8zm-3.5-7.5c2.6 0 4.2-1 4.2-3 0-1.8-1.4-2.9-3.4-2.9h-2.4v5.9h1.6zM31.2 89.7c-4.3 0-8-3.7-8-7.9 0-4.8 3.7-8.2 8-8.2 4.6 0 8.1 3.6 8.1 8 .2 4.6-3.5 8.1-8.1 8.1zm6-8.1c0-3.2-2.4-6-5.7-6-4.2 0-5.9 3.6-5.9 5.9 0 3.1 2.3 6 5.8 6 3.6.1 5.8-3 5.8-5.9zM51.8 89.4l-7.7-12v12h-2.3V73.8h2.5l7.6 11.8V73.8h2.3v15.5h-2.4zM58.8 89.4V75.9h-3v-2.1H64v2.1h-3v13.5h-2.2zM71.7 89.4V73.8h8.4v2.1H74v4.6h6.1v2.1H74v4.7h6.1v2.1h-8.4zM92.8 89.4l-7.7-12v12h-2.3V73.8h2.5l7.6 11.8V73.8h2.3v15.5h-2.4zM98.3 89.4V73.8h5.4c4.7 0 7.6 3.7 7.6 7.8 0 4.7-3 7.8-7.9 7.8h-5.1zm4.9-2.1c3.6 0 5.7-2.1 5.7-5.6 0-3.5-2.5-5.7-5.6-5.7h-2.8v11.4h2.7zM12.6 106.4 9.7 95.5l-2.8 10.9h-2L.6 90.8H3l3 11.7 3-11.7h1.7l3 11.6 3-11.6H19l-4.3 15.5h-2.1zM20.5 106.4V90.8h8.4v2.1h-6.1v4.6h6.1v2.1h-6.1v4.7h6.1v2.1h-8.4zM31.6 106.4V90.8h4.2c2.9 0 4.7 1.8 4.7 4.2 0 1.3-.4 2.2-1.4 3 1.5.8 2.3 2 2.3 3.8 0 2.8-2.1 4.5-4.9 4.5h-4.9zm4.1-9.1c1.5 0 2.5-.7 2.5-2.2 0-1.5-.9-2.2-2.6-2.2h-1.7v4.4h1.8zm.6 7c1.6 0 2.8-.9 2.8-2.4 0-1-.7-2.5-2.8-2.5h-2.5v4.9h2.5zM1.6 123.4v-15.5H7c4.7 0 7.6 3.7 7.6 7.8 0 4.7-3 7.8-7.9 7.8H1.6zm5-2.1c3.6 0 5.7-2.1 5.7-5.6 0-3.5-2.5-5.7-5.6-5.7H3.8v11.4h2.8zM17 123.4v-15.5h8.4v2.1h-6.1v4.6h6.1v2.1h-6.1v4.7h6.1v2.1H17zM33.1 123.4l-6.3-15.5h2.4l4.5 11.7 4.5-11.7h2.4l-6.2 15.5h-1.3zM42.2 123.4v-15.5h8.4v2.1h-6.1v4.6h6.1v2.1h-6.1v4.7h6.1v2.1h-8.4zM53.3 123.4v-15.5h2.3v13.5H61v2.1h-7.7zM69 123.7c-4.3 0-8-3.7-8-7.9 0-4.8 3.7-8.2 8-8.2 4.6 0 8.1 3.6 8.1 8 .1 4.6-3.5 8.1-8.1 8.1zm5.9-8.1c0-3.2-2.4-6-5.7-6-4.2 0-5.9 3.6-5.9 5.9 0 3.1 2.3 6 5.8 6 3.7.1 5.8-3 5.8-5.9zM79.5 123.4v-15.5H84c3.3 0 5.5 1.7 5.5 4.7s-2.1 4.7-5.4 4.7h-2.3v6.1h-2.3zm4.5-8.2c2 0 3.2-.9 3.2-2.6 0-1.7-1.2-2.6-3.2-2.6h-2.2v5.2H84zM91.1 123.4v-15.5h8.4v2.1h-6.1v4.6h6.1v2.1h-6.1v4.7h6.1v2.1h-8.4zM109.5 123.4l-5.1-7.2v7.2H102v-15.5h5c3.7 0 5.4 2 5.4 5.2 0 3-2.3 4.5-4.5 4.6l4.3 5.8h-2.7zm-3.5-7.5c2.6 0 4.2-1 4.2-3 0-1.8-1.4-2.9-3.4-2.9h-2.4v5.9h1.6z" class="career-text"/>
          </g>
        </svg>
      </header>
      <div
        class="monster-city-bg absolute z-3"
      >
        <city-image />
      </div>
      <div
        class="monster-video h-full w-full"
      >
        <img
          src="img/monster_5fr.png"
          ref="monsta"
          alt="giant monster"
          aria-hidden="true"
          class="z-4 monster-vid md:block md:mb-12 lg:mb-16 md:-px-40 lg:w-2/6 xl:w-1/4 absolute bottom-0 right-0"
        />
      </div>
      <div
        class="-ml-64 md:ml-auto monster-city-fg absolute bottom-0 z-5"
      >
        <city-image
          class="w-4/2 md:w-3/4 lg:w-3/4 xl:w-2/4"
          :filter-active="true"
        />
      </div>
    </vue100vh>
  </section>
</template>

<style>
  .name-text{
    fill: #f25146;
  }
  .career-text{
    @apply fill-graphite;
  }
  #title-svg {
    max-width: 30%;
  }
  .city-svg {
    margin-bottom: -1px;
  }
  .monster-scape {
    width: 100vw;
    overflow: hidden;
  }
  .monster-city-bg {
    min-width: 275%;
    filter: blur(6px) opacity(.3);
    bottom: -50px;
    transform: scaleX(-1);
    transform-origin: center center;
  }
  .monster-city-fg {
    min-width: 400vw;
  }
</style>
