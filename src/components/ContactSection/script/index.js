import EmailForm from '@/components/EmailForm'
import AppImg from '@/components/_common/AppImg'
export default {
  name: 'ContactSection',
  components: {
    EmailForm,
    AppImg
  },
  data () {
    return {
      notRobot: false
    }
  }
}
