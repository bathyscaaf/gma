const htmlEl = document.documentElement

export default {
  name: 'CardModal',
  props: {
    active: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: null
    }
  },
  watch: {
    active (val) {
      if (val) {
        htmlEl.classList.add('modal-open')
      } else {
        htmlEl.classList.remove('modal-open')
      }
    }
  },
  methods: {
    closeModal () {
      this.$emit('MODAL_CLOSE')
    }
  }
}
