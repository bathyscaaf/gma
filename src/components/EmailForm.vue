<script>
  import { required, email } from 'vuelidate/lib/validators'
  export default {
    name: 'EmailForm',
    data () {
      return {
        emailAddress: null,
        emailBody: null,
        emailSubject: null,
        emailData: {
          email: null,
          subject: 'Contact from giantmonsterattack website',
          body: null
        }
      }
    },
    methods: {
      sendEmail () {
        this.$v.$touch()
        if (!this.$v.$error) {
          // eslint-disable-next-line
          Pageclip.send('nUneCQe2nTvkl13ZzvlRHwyyblvU7TnN', 'default', this.emailData, function (error, response) {
            console.log('saved?', !!error, '; response:', error || response)
          })
        }
      }
    },
    validations () {
      return {
        emailAddress: {
          required,
          email
        },
        emailBody: {
          required
        }
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
        <label class="label"
               :class="{ 'is-danger': $v.emailAddress.$error}"
               for="email"
        >
          From
        </label>
        <input class="input md:w-1/2"
               v-model="emailAddress"
               @input="$v.emailAddress.$touch()"
               :class="{ 'is-danger': $v.emailAddress.$error}"
               type="email"
               name="email"
               id="email"
               required>
        <input type="hidden" id="subject" name="subject" value="Contact from giantmonsterattack website">
        <template v-if="$v.emailAddress.$error">
          <div
            class="error-message"
          >
            <span
              v-if="!$v.emailAddress.required"
              class="help is-danger"
              role="alert"
              aria-live="assertive"
            >Email Address is required.</span>
            <span
              v-if="!$v.emailAddress.email"
              role="alert"
              aria-live="assertive"
            >Please enter a valid email address.</span>
          </div>
        </template>
      </div>
      <div class="flex flex-col">
        <label class="label"
               for="body"
        >
          Message
        </label>
        <textarea id="body"
                  rows="3"
                  name="body"
                  v-model="emailBody"
                  @input="$v.emailBody.$touch()"
                  :class="{ 'is-danger': $v.emailBody.$error}"
                  required
                  placeholder="Add your message here"
                  class="textarea"
                  style="resize: none;" />
        <template v-if="$v.emailBody.$error">
          <div
            class="error-message"
          >
            <span
              v-if="!$v.emailBody.required"
              role="alert"
              aria-live="assertive"
            >Please add a message.</span>
          </div>
        </template>
      </div>
    </div>
    <div class="flex justify-end mt-8">
      <button type="button"
              class="button bg-khaki text-graphite disabled:opacity-50 disabled:cursor-not-allowed"
              @click="sendEmail"
              :disabled="$v.$error"
      >
        SEND
      </button>
    </div>
  </form>
</template>
