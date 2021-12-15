import PortalModal from '@/components/_common/PortalModal/PortalModal.vue'
import AppImg from '@/components/_common/AppImg'
export default {
  name: 'WorkSbux',
  components: {
    PortalModal,
    AppImg
  },
  data () {
    return {
      modalList: {
        'sbux-home': {
          active: false,
          key: 0
        },
        'sbux-brew': {
          active: false,
          key: 0
        },
        'sbux-house': {
          active: false,
          key: 0
        },
        'sbux-chalkboard-video': {
          active: false,
          key: 0,
          visible: false
        },
        'sbux-chalkboard-image': {
          active: false,
          key: 0
        },
        'sbux-passion-video': {
          active: false,
          key: 0,
          visible: false
        },
        'sbux-passion-image-one': {
          active: false,
          key: 0
        },
        'sbux-passion-image-two': {
          active: false,
          key: 0
        },
        'sbux-evolution': {
          active: false,
          key: 0
        },
        'sbux-midas-video': {
          active: false,
          key: 0,
          visible: false
        },
        'sbux-midas-image': {
          active: false,
          key: 0
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
