import AppImg from '@/components/_common/AppImg'
import PortalModal from '@/components/_common/PortalModal/PortalModal.vue'
export default {
  name: 'WorkSoro',
  components: {
    PortalModal,
    AppImg
  },
  data () {
    return {
      showZumiezModal: false,
      showMsoftModal: false
    }
  }
}
