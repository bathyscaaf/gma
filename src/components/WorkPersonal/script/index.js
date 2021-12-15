import AppImg from '@/components/_common/AppImg'
import PortalModal from '@/components/_common/PortalModal/PortalModal.vue'

export default {
  name: 'WorkPersonal',
  components: {
    PortalModal,
    AppImg
  },
  data () {
    return {
      // use list of modals so key can be incremented
      // to reset video component and prevent unnecessary loading
      modalList: {
        trieste: {
          active: false,
          key: 0,
          visible: false
        },
        radiant: {
          active: false,
          key: 0,
          visible: false
        },
        outpost: {
          active: false,
          key: 0,
          visible: false
        }
      }
    }
  },
  methods: {
    openModal (e) {
      this.modalList[e].active = true
    },
    closeModal (e) {
      this.modalList[e].active = false
      this.modalList[e].key++
    },
    visibilityChanged (isVisible, entry, location) {
      // use visibility to prevent instantiation of Vimeo players unless button is visible
      this.isVisible = isVisible
      this.modalList[location].visible = isVisible
    }
  }
}
