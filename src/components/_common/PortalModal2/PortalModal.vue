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
          class="modal-container shadow bg-white"
          :style="customStyles"
          @click.stop
        >
          <header
            v-if="hasHeader"
            class="modal-header"
            :class="{'is-success': headerStyle === 'success', 'is-danger': headerStyle === 'danger'}"
          >
            <slot
              name="header"
            >
              header slot
            </slot>
          </header>
          <div
            ref="modalBody"
            class="modal-body"
          >
            <slot
              name="content"
            >
              content slot
            </slot>
          </div>
          <footer
            v-if="hasfooter"
            class="modal-footer"
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
