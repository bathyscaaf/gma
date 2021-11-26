// import LabBackground from '@/components/LabBackground/LabBackground'
export default {
  name: 'WorkSection',
  components: {
    // LabBackground
  },
  methods: {
    openModal () {
      this.$emit('MODAL_OPEN')
    }
  }
}
