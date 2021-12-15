<script>
  import script from './script/index'
  export default script
</script>

<template>
  <article class="container mx-auto text-white">
    <header class="mb-4 leading-tight">
      <app-img lazy-src="/img/soro/logo_byline.svg"
               alt="Soro Cannabis CRM and Analytics"
               aria-hidden="true"
               background-color="transparent"
               class="soro-logo mb-4"
      />
      <span class="text-3xl md:text-3xl font-heading">SORO SOFTWARE</span> <span class="text-3xl ml-4 md:text-3xl font-heading text-peach">2016 - PRESENT</span>
      <br>
      <span class="font-extraLight">
        Senior Software Engineer, Co-Founder
      </span>
    </header>
    <div class="">
      <p class="py-2">
        Responsible for all aspects of the Front-End technology decisions for an industry-specific SaaS platform – a B2B
        CRM & Sales Analytics SaaS offering for cannabis growers in the legal Washington cannabis industry.
      </p>
      <p>
        Soro facilitates 20% of all sales between Growers to Dispensaries in WA State. We regularly delivered 15%
        improvement in sales for our customers within 90 days of onboarding.
      </p>

      <div class="ss-box flex flex-wrap pt-8">

        <figure class="soro-ss mb-8 md:mr-8 landscape-sm:mr-8">
          <a role="button"
             title="Soro User Homepage modal button"
             @click.prevent="showUserModal = true">
            <app-img lazy-src="/img/soro/home@0.25x.jpg"
                     alt="Soro User Homepage"
                     class="button-image shadow"
                     :width="401"
                     :height="267"/>
            <div class="play-button"></div>
          </a>
          <figcaption>User Homepage</figcaption>
        </figure>

        <template v-if="modalTarget === 'soroHome'">
          <card-modal title="Soro User Homepage" :active="modalActive" @MODAL_CLOSE="closeModal">
            <div>
              <app-img lazy-src="/img/soro/home.jpg"
                       class="shadow"
                       alt="Soro User Homepage"
                       :width="1603"
                       :height="1066"/>
            </div>
          </card-modal>
        </template>

        <figure class="soro-ss mb-8 md:mr-8">
          <a role="button"
             title="Customers landing page w/search modal button"
             @click.prevent="showCustModal = true">
            <app-img key="0"
                     lazy-src="/img/soro/CustomerDashboard2@0.25x.jpg"
                     alt="Customers landing page w/search"
                     class="button-image shadow"
                     :width="316"
                     :height="200"/>
          </a>
          <figcaption>Customers landing page w/search</figcaption>
        </figure>
        <figure class="soro-ss mb-8 md:mr-8 landscape-sm:mr-8">
          <a role="button"
             title="Customer Details modal button"
             @click.prevent="showCustDetModal = true">
            <app-img key="2"
                     lazy-src="/img/soro/CustomerDetail_summary@0.25x.jpg"
                     alt="Customer Details"
                     class="button-image shadow"
                     :width="400"
                     :height="268"/>
          </a>
          <figcaption>Customer Details</figcaption>
        </figure>
        <figure class="soro-ss mb-8 md:mr-8">
          <a role="button"
             title="Customer Details (mobile view)"
             @click.prevent="showMobileModal = true">
            <app-img key="4"
                     lazy-src="/img/soro/CD_mobile@0.25x.jpg"
                     alt="Customer Details (mobile view)"
                     class="button-image shadow"
                     style="max-width:15rem;"
                     :width="206"
                     :height="369"/>
            <div class="play-button"></div>
          </a>
          <figcaption>Mobile</figcaption>
        </figure>
        <figure class="soro-ss mb-8 md:mr-8">
          <a role="button"
             title="Total Sales by Product report modal button"
             @click.prevent="showReportModal = true">
            <app-img key="6"
                     lazy-src="/img/soro/TotalSalesByProducts@0.25x.jpg"
                     alt="Total Sales by Product report"
                     class="button-image shadow"
                     :width="401"
                     :height="266"/>
            <div class="play-button"></div>
          </a>
          <figcaption>Total Sales by Product report</figcaption>
        </figure>
      </div>
      <p>
        Duties included research, planning, component design and coding, library versioning, testing, and all other Front-
        End tasks necessary to deliver the platform to our customers.
      </p>
      <ul class="duty-list">
        <li>
          Primary decision-maker and engineer for Soro’s customer-facing CRM application.
        </li>
        <li>
          Implemented a mobile-first, responsive design, with a meticulous approach to providing user interfaces that are understandable at a glance and tailored to the cannabis industry’s unique workflows and requirements.
        </li>
        <li>
          Created an organized, modular codebase to avoid technical debt and be flexible for future needs.
        </li>
        <li>
          Crafted and executed a decision-making process to evaluate 3rd party services and libraries for
          features/benefits/cost and technical savings.
        </li>
        <li>
          Integrated multiple 3rd party services such as Google Maps, HighCharts, Filestack, and Auth0 into a seamless
          customer experience.
        </li>
        <li>
          Key resource for UI/UX and design decisions.
        </li>
        <li>
          Collaborated and strategized with Product Manager on new features, user workflows, and product roadmap.
        </li>
      </ul>
    </div>
    <portal-modal
      :show="showUserModal"
      :has-header="true"
      :has-footer="true"
      @CLOSE_MODAL="showUserModal = false"
    >
      <template v-slot:header>
        Customers landing page
      </template>
      <template v-slot:content>
        <app-img lazy-src="/img/soro/home.jpg"
                 class="shadow"
                 alt="Soro User Homepage"
                 :width="1603"
                 :height="1066"/>
      </template>
      <template v-slot:footer>
        <div class="footer-row flex justify-end">
          <button
            @click="showUserModal = !showUserModal"
            class="button bg-paprika text-white"
          >
            Close
          </button>
        </div>
      </template>
    </portal-modal>
    <portal-modal
      :show="showCustModal"
      :has-header="true"
      :has-footer="true"
      @CLOSE_MODAL="showCustModal = false"
    >
      <template v-slot:header>
        Customers landing page
      </template>
      <template v-slot:content>
        <app-img key="1"
                 lazy-src="/img/soro/CustomerDashboard2.jpg"
                 class="shadow"
                 alt="Customers landing page"
                 :width="1265"
                 :height="799"/>
      </template>
      <template v-slot:footer>
        <div class="footer-row flex justify-end">
          <button
            @click="showCustModal = !showCustModal"
            class="button bg-paprika text-white"
          >
            Close
          </button>
        </div>
      </template>
    </portal-modal>
    <portal-modal
      :show="showCustDetModal"
      :has-header="true"
      :has-footer="true"
      @CLOSE_MODAL="showCustDetModal = false"
    >
      <template v-slot:header>
        Customer Details
      </template>
      <template v-slot:content>
        <app-img key="3"
                 lazy-src="/img/soro/CustomerDetail_summary.jpg"
                 class="shadow"
                 alt="Customer Details"
                 :width="1604"
                 :height="1066"/>
      </template>
      <template v-slot:footer>
        <div class="footer-row flex justify-end">
          <button
            @click="showCustDetModal = !showCustDetModal"
            class="button bg-paprika text-white"
          >
            Close
          </button>
        </div>
      </template>
    </portal-modal>
    <portal-modal
      :show="showMobileModal"
      :has-header="true"
      :has-footer="true"
      @CLOSE_MODAL="showMobileModal = false"
    >
      <template v-slot:header>
        Customer Details (Mobile)
      </template>
      <template v-slot:content>
        <app-img key="5"
                 lazy-src="/img/soro/CD_mobile.jpg"
                 class="shadow"
                 alt="Customer Details (Mobile)"
                 :width="824/2"
                 :height="1477/2"/>
      </template>
      <template v-slot:footer>
        <div class="footer-row flex justify-end">
          <button
            @click="showMobileModal = !showMobileModal"
            class="button bg-paprika text-white"
          >
            Close
          </button>
        </div>
      </template>
    </portal-modal>
    <portal-modal
      :show="showReportModal"
      :has-header="true"
      :has-footer="true"
      @CLOSE_MODAL="showReportModal = false"
    >
      <template v-slot:header>
        Total Sales by Product report
      </template>
      <template v-slot:content>
        <app-img key="7"
                 lazy-src="/img/soro/TotalSalesByProducts.jpg"
                 class="shadow"
                 alt="Total Sales by Product report"
                 :width="1604"
                 :height="1064"/>
      </template>
      <template v-slot:footer>
        <div class="footer-row flex justify-end">
          <button
            @click="showReportModal = !showReportModal"
            class="button bg-paprika text-white"
          >
            Close
          </button>
        </div>
      </template>
    </portal-modal>
  </article>
</template>

<style>
  @import "./style/_styles.css";
  .ss-pic {
    width: 30rem;
  }
  .soro-ss {
    /*border: 1px solid red;*/
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    max-width: 28rem;
    /*background: lightsalmon;*/
  }
  .soro-ss:not(:last-child) {
    /*margin-right: 100px;*/
  }
  .soro-logo {
    max-width: 15rem;
  }
  .ss-preload {
    width: 1px;
    height: 1px;
    overflow: hidden;
    position: absolute;
    left: -200px;
  }
  figure {
    /*background: red;*/
  }
  .duty-list {
    list-style-type: disc;
    list-style-position: inside;
    text-indent: -1em;
    padding-left: 1em;
  }
  .duty-list li {
    margin-top: 0.5rem;
  }
</style>
