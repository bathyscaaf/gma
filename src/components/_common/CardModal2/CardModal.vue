<script>
  import script from './script/index'
  export default script
</script>

<template>
<!--  <Transition name="fade" mode="out-in">-->
  <div v-if="active"
       @click.self="closeModal"
       class="fixed top-0 bottom-0 left-0 right-0 z-50 bg-darken-75 flex portrait-sm:items-end justify-center md:items-center landscape-sm:items-center">
    <aside class="modal-card overflow-hidden bg-battleship portrait-sm:mb-8">
      <header class="modal-header flex p-4 justify-between align-center">
        <div class="modal-title text-xl font-semi-bold">{{ title }}</div>
        <div class="w-12">
          <svg xmlns="http://www.w3.org/2000/svg" height="100%" width="100%" viewBox="0 0 20 20" @click="closeModal" class="cursor-pointer">
            <title>close-modal</title>
            <g>
              <circle cx="10" cy="10" r="10" style="fill:#fff"/>
            </g>
            <g>
              <path d="M10,0A10,10,0,1,1,0,10,9.9909,9.9909,0,0,1,10,0m3.59,5L10,8.59,6.41,5,5,6.41,8.59,10,5,13.59,6.41,15,10,11.41,13.59,15,15,13.59,11.41,10,15,6.41Z" style="fill:red"/>
            </g>
          </svg>
        </div>
      </header>
      <div class="modal-body overflow-auto pl-4 pr-4 landscape-sm:max-w-90vw landscape-sm:max-h-60vh portrait-sm:max-w-90vw portrait-sm:max-h-60vh md:max-w-90vw md:max-h-70vh">
        <slot />
      </div>
      <div class="modal-footer p-4 text-right">
        <button class="cursor-pointer shadow bg-about pt-2 pb-2 pl-8 pr-8 font-heading text-base" @click="closeModal">Close</button>
      </div>
    </aside>
  </div>
<!--  </Transition>-->
</template>

<style scoped>
  @import "./style/_styles.scss";
  .modal-body {
    /*max-height: 70vh;*/
    /*max-width: 70vw;*/
    width: auto;
  }
</style>
