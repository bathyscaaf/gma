import EmailForm from '@/components/EmailForm'
export default {
  name: 'ContactSection',
  components: {
    EmailForm
  },
  data () {
    return {
      email: null,
      message: null
    }
  },
  methods: {
    openModal () {
      this.$emit('MODAL_OPEN')
    }
  }
}
