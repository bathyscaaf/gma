import AppImg from '@/components/_common/AppImg'
import CardModal from '@/components/_common/CardModal2/CardModal'
import PortalModal from '@/components/_common/PortalModal/PortalModal.vue'

export default {
  name: 'WorkSbux',
  components: {
    PortalModal,
    CardModal,
    AppImg
  },
  data () {
    return {
      modalTarget: null,
      modalActive: false,
      preloadImages: false,
      // use list of modals so key can be incremented
      // to reset video component and prevent unnecessary loading
      modalList: {
        trieste: {
          active: false,
          key: 0
        },
        radiant: {
          active: false,
          key: 0
        },
        outpost: {
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
