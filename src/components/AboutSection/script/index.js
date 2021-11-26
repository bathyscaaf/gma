import AppImg from '@/components/_common/AppImg'
export default {
  name: 'AboutSection',
  components: {
    AppImg
  },
  methods: {
    openModal () {
      this.$emit('MODAL_OPEN')
    }
  }
}
