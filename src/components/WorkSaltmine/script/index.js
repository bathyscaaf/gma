import AppImg from '@/components/_common/AppImg'
import CardModal from '@/components/_common/CardModal2/CardModal'
export default {
  name: 'WorkSoro',
  components: {
    CardModal,
    AppImg
  },
  data () {
    return {
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
