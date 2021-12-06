const htmlEl = document.documentElement
export default {
  name: 'PortalModal',
  props: {
    name: {
      type: String,
      default: 'base-modal'
    },
    show: {
      type: Boolean,
      default: false
    },
    hasFooter: {
      type: Boolean,
      default: false
    },
    hasHeader: {
      type: Boolean,
      default: false
    },
    customStyles: {
      type: String,
      default: ''
    },
    modalId: {
      type: String,
      default: null
    },
    closeOnMaskClick: {
      type: Boolean,
      default: true
    }
  },
  data: function () {
    return {
      title: '',
      body: ''
    }
  },
  computed: {
    headerStyle () {
      return this.modalStyle.toLowerCase()
    }
  },
  watch: {
    show (val, oldVal) {
      if (val) {
        document.addEventListener('keydown', this.onEscapeKey)
        htmlEl.classList.add('modal-open')
      } else {
        this.$refs.modalBody.scrollTop = 0
        setTimeout(() => { htmlEl.classList.remove('modal-open') }, 300)
        document.removeEventListener('keydown', this.onEscapeKey)
      }
    }
  },
  methods: {
    onEscapeKey (e) {
      if (e.keyCode === 27) {
        this.close()
        document.removeEventListener('keydown', this.onEscapeKey)
      }
    },
    close: function () {
      this.$emit('CLOSE_MODAL')
      this.title = ''
      this.body = ''
    },
    onMaskClick () {
      if (this.closeOnMaskClick) this.close()
    }
  },
  beforeDestroy () {
    if (this.$refs.modalBody) this.$refs.modalBody.scrollTop = 0
    setTimeout(() => {
      htmlEl.classList.remove('modal-open')
    }, 300)
    document.removeEventListener('keydown', this.onEscapeKey)
  }
}
