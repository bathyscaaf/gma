<script>
  export default {
    name: 'EmailForm',
    data () {
      return {
        emailData: {
          email: null,
          subject: 'Contact from giantmonsterattack website',
          body: null
        }
      }
    },
    methods: {
      sendEmail () {
        // eslint-disable-next-line
        Pageclip.send('nUneCQe2nTvkl13ZzvlRHwyyblvU7TnN', 'default', this.emailData, function (error, response) {
          console.log('saved?', !!error, '; response:', error || response)
        })
      }
    }
  }
</script>

<template>
  <form
    id="emailForm"
    @click.prevent>
    <div class="">
      <div class="flex flex-col mb-4">
        <label class="label" for="email">From</label>
        <input class="input md:w-1/2"
               v-model="emailData.email"
               type="email"
               name="email"
               id="email"
               required>
        <input type="hidden" id="subject" name="subject" value="Contact from giantmonsterattack website">
      </div>
      <div class="flex flex-col">
        <label class="label" for="body">Message</label>
        <textarea id="body"
                  rows="3"
                  name="body"
                  v-model="emailData.body"
                  required
                  placeholder="Add your message here"
                  class="textarea"
                  style="resize: none;" />
      </div>
    </div>
    <div class="flex justify-end mt-8">
      <button type="button" class="button bg-khaki text-graphite" @click="sendEmail">SEND</button>
    </div>
  </form>
</template>
