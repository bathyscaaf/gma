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
      name="base-modal"
    >
      <div
        class="modal-mask fixed inset-0 bg-gray-600 z-40 overflow-y-auto h-full w-full flex items-center justify-items-center"
        :class="{'modal-active': show}"
        id="my-modal"
        @click="onMaskClick"
      >
        <div
          class="modal-container z-50 shadow"
          :style="customStyles"
          @click.stop
        >
          <header
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
