import PortalModal from '@/components/_common/PortalModal/PortalModal.vue'
import AppImg from '@/components/_common/AppImg'
import CardModal from '@/components/_common/CardModal2/CardModal'
export default {
  name: 'WorkSbux',
  components: {
    PortalModal,
    CardModal,
    AppImg
  },
  data () {
    return {
      showHomeModal: false,
      showBrewModal: false,
      showHouseModal: false,
      showMagicVideo: false,
      showMagicPicture: false,
      modalTarget: null,
      modalActive: false,
      imgList: [
        {
          index: 0,
          title: 'Starbucks Homepage (2015)',
          thumb: '/img/sbux/sbux_homepage@0.5x.png',
          src: '/img/sbux/sbux_homepage.png',
          style: null,
          width: '234px',
          height: '222px'
        },
        {
          index: 1,
          title: 'Mobile page with media player',
          thumb: '/img/sbux/sbux_ch_mbx2@0.25x.png',
          src: '/img/sbux/sbux_ch_mbx2.png',
          style: null,
          width: '116px',
          height: '113px'
        },
        {
          index: 2,
          title: 'How to Brew page',
          thumb: '/img/sbux/sbux_htb@0.5x.png',
          src: '/img/sbux/sbux_htb.png',
          style: null,
          width: '228px',
          height: '416px'
        }
      ],
      preloadImages: false
    }
  },
  computed: {
    modalTitle () {
      return this.modalIndex !== null ? this.slideList[this.modalIndex].title : null
    }
  },
  methods: {
    openModal (e) {
      console.log('openModal: ', e)
      this.modalActive = true
      this.modalTarget = e
    },
    closeModal () {
      console.log('closeModal')
      this.modalActive = false
    },
    visibilityChanged (e) {
      if (e) {
        console.log('sbux visible')
        this.preloadImages = true
      } else {
        console.log('sbux not visible')
        this.preloadImages = false
      }
    }
  }
}
