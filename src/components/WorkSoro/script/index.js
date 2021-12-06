import AppImg from '@/components/_common/AppImg'
import PortalModal from '@/components/_common/PortalModal/PortalModal.vue'

export default {
  name: 'WorkSoro',
  components: {
    AppImg,
    PortalModal
  },
  data () {
    return {
      showUserModal: false,
      showCustModal: false,
      showReportModal: false,
      showMobileModal: false,
      showCustDetModal: false,
      modalTarget: null,
      modalActive: false
    }
  },
  methods: {
    openModal (e) {
      // console.log('openModal: ', e)
      this.modalActive = true
      this.modalTarget = e
    },
    closeModal () {
      // console.log('closeModal')
      this.modalActive = false
    }
  }
}
