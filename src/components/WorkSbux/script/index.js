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
      preloadImages: false,
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
          key: 0
        },
        'sbux-chalkboard-image': {
          active: false,
          key: 0
        },
        'sbux-passion-video': {
          active: false,
          key: 0
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
          key: 0
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
      console.log('openModal: ', e)
      this.modalList[e].active = true
    },
    closeModal (e) {
      console.log('closeModal', e)
      this.modalList[e].active = false
      this.modalList[e].key++
    },
    visibilityChanged (e) {
      this.preloadImages = e
    }
  }
}
