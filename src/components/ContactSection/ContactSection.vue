<script>
  import script from './script/index'
  export default script
</script>

<template>
  <section class="w-full bg-contact px-8 pb-64 text-white">
    <article class="container mx-auto">
      <header class="py-4">
        <h2 class="section-header text-outline-dark text-5xl md:text-4xl text-white">
          CONTACT
        </h2>
      </header>
      <div>
        <div
          class="toggle-message-box"
        >
          <div
            class="toggle-message"
          >
            <app-img
              lazy-src="/img/robot.svg"
              aria-hidden="true"
              alt="No bots allowed image"
              :width="100"
              :height="100"
              background-color="transparent"
              class="mr-4"
            />
            <div
              class="text-white"
            >
              <p
                class="text-2xl font-semi-bold"
              >
                Confirm your humanity!
              </p>
              <p
                class="mb-2"
              >
                Use the toggle below to reveal contact methods
              </p>
              <label
                for="toggleB"
                class="flex items-center cursor-pointer"
              >
                <div
                  class="relative"
                >
                  <input
                    type="checkbox"
                    id="toggleB"
                    class="sr-only"
                    v-model="notRobot"
                  >
                  <div
                    class="block bg-gray-600 w-14 h-8 rounded-full"
                  />
                  <div
                    class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"
                  />
                </div>
                <div
                  class="anti-robot"
                >
                  <div
                    class="mx-3 text-xl font-semibold"
                  >
                    I am not a robot!
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
      <template
        v-if="!notRobot"
      >
        <div
          class="robot-message-box"
        >
          <div
            class="robot-message"
          >
            <div
              class="font-semi-bold text-white"
            >
              <p
                class="text-xl"
              >
                Contact methods hidden to prevent spambot address harvesting.
              </p>
              <p>Use the toggle above to reveal contact methods</p>
            </div>
          </div>
        </div>
      </template>
      <template
        v-else
      >
        <div>
          <p
            class="text-xl font-semi-bold"
          >
            Reach me via:
          </p>
          <div
            class="mt-2"
          >
            <a href="https://www.linkedin.com/in/glenn-berry-5b59673"
               target="_blank"
               rel="noopener"
               class="inline-flex text-xl"
            >
              <app-img
                lazy-src="/img/linkedin.svg"
                aria-hidden="true"
                alt="Linked In logo"
                :width="34"
                :height="34"
                background-color="transparent"
                class="mr-2"
              />
              Linkedin
            </a>
          </div>
          <div
            class="mt-1"
          >
            <a
              class="inline-flex text-xl"
              href="mailto:glenn@giantmonsterattack.com?subject=Contact%20from%20Giantmonsterattack%20site"
            >
              <app-img
                lazy-src="/img/email.svg"
                aria-hidden="true"
                alt="email icon"
                :width="34"
                :height="34"
                background-color="transparent"
                class="mr-2"
              />
              glenn@giantmonsterattack.com
            </a>
          </div>
          <div class="mb-8 text-xl mt-4">
            or use the form below:
          </div>
          <div class="email-form md:w-1/2">
            <email-form />
          </div>
        </div>
      </template>
    </article>
  </section>
</template>

<style lang="css" scoped src="./style/_styles.css" />
