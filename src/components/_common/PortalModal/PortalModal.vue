<script>
  import script from './script/index'
  export default script
</script>

<template>
  <MountingPortal
    mount-to="#modal-portal"
    append
    name="modal"
  >
    <transition
      name="portal-modal"
    >
      <div
        class="modal-mask"
        v-show="show"
        id="my-modal"
        @click="onMaskClick"
      >
        <div
          class="modal-container min-w-1/4 max-w-3/4"
          :class="{'no-header': !hasHeader, 'no-footer': !hasFooter}"
          :style="customStyles"
          @click.stop
        >
          <header
            v-if="hasHeader"
            class="modal-header rounded-t-lg bg-peach pl-12 pr-4 py-4 flex justify-between"
          >
            <div class="modal-title font-semibold text-xl">
              <slot
                name="header"
              >
                header slot
              </slot>
            </div>
            <div class="w-12">
              <svg xmlns="http://www.w3.org/2000/svg"
                   height="100%"
                   width="100%"
                   viewBox="0 0 20 20"
                   @click="onMaskClick"
                   class="close-btn"
              >
                <title>close-modal</title>
                <g>
                  <circle cx="10" cy="10" r="10" style="fill:#fff"/>
                </g>
                <g>
                  <path class="close-btn-bg"
                        d="M10,0A10,10,0,1,1,0,10,9.9909,9.9909,0,0,1,10,0m3.59,5L10,8.59,6.41,5,5,6.41,8.59,10,5,13.59,6.41,15,10,11.41,13.59,15,15,13.59,11.41,10,15,6.41Z"
                  />
                </g>
              </svg>
            </div>
          </header>
          <div
            ref="modalBody"
            class="modal-body overflow-y-auto max-h-70vh overflow-hidden px-12 py-6 bg-white"
          >
            <slot
              name="content"
            >
              content slot
            </slot>
          </div>
          <footer
            v-if="hasFooter"
            class="modal-footer rounded-b-lg bg-peach pl-12 pr-4 py-4 font-semibold text-xl"
          >
            <slot
              name="footer"
            >
              footer slot
            </slot>
          </footer>
        </div>
      </div>
    </transition>
  </MountingPortal>
</template>
<style lang="css" src="./style/_styles.css" scoped />
