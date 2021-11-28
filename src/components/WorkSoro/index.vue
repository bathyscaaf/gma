<script>
  import script from './script/index'
  export default script
</script>

<template>
  <article class="container mx-auto text-white">
    <header class="mb-4 leading-tight">
      <img src="/img/soro/logo_byline.svg"
           alt="Soro Cannabis CRM and Analytics"
           aria-hidden="true"
           class="soro-logo mb-4"/>
      <span class="text-xl md:text-3xl font-heading">SORO SOFTWARE</span> <span class="text-xl ml-4 md:text-3xl font-heading text-peach">2016 - PRESENT</span>
      <br>
      <span class="font-extraLight">
        Senior Software Engineer, Co-Founder
      </span>
    </header>
    <div class="">
      <p class="py-2">
        Responsible for all aspects of the front-end technology decisions for an industry-specific SaaS platform. Duties included research, planning, component design and coding, library versioning, testing, and all other front-end paradigms & tasks necessary to deliver the platform to our customers. Also assisted heavily with UI/UX and design decisions.
      </p>

      <div class="ss-box flex flex-wrap pt-8">

        <figure class="soro-ss mb-8 md:mr-8 landscape-sm:mr-8">
          <a role="button"
             title="Soro User Homepage modal button"
             @click.prevent="openModal('soroHome')">
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
             @click.prevent="openModal('soroCL')">
            <app-img key="0"
                     lazy-src="/img/soro/CustomerDashboard2@0.25x.jpg"
                     alt="Customers landing page w/search"
                     class="button-image shadow"
                     :width="316"
                     :height="200"/>
          </a>
          <figcaption>Customers landing page w/search</figcaption>
        </figure>

        <template v-if="modalTarget === 'soroCL'">
          <card-modal title="Customers landing page" :active="modalActive" @MODAL_CLOSE="closeModal">
            <div>
              <app-img key="1"
                       lazy-src="/img/soro/CustomerDashboard2.jpg"
                       class="shadow"
                       alt="Customers landing page"
                       :width="1265"
                       :height="799"/>
            </div>
          </card-modal>
        </template>

        <figure class="soro-ss mb-8 md:mr-8 landscape-sm:mr-8">
          <a role="button"
             title="Customer Details modal button"
             @click.prevent="openModal('soroCD')">
            <app-img key="2"
                     lazy-src="/img/soro/CustomerDetail_summary@0.25x.jpg"
                     alt="Customer Details"
                     class="button-image shadow"
                     :width="400"
                     :height="268"/>
          </a>
          <figcaption>Customer Details</figcaption>
        </figure>

        <template v-if="modalTarget === 'soroCD'">
          <card-modal title="Customer Details" :active="modalActive" @MODAL_CLOSE="closeModal">
            <div>
              <app-img key="3"
                       lazy-src="/img/soro/CustomerDetail_summary.jpg"
                       class="shadow"
                       alt="Customer Details"
                       :width="1604"
                       :height="1066"/>
            </div>
          </card-modal>
        </template>

        <figure class="soro-ss mb-8 md:mr-8">
          <a role="button"
             title="Customer Details (mobile view)"
             @click.prevent="openModal('soroCdMobile')">
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

        <template v-if="modalTarget === 'soroCdMobile'">
          <card-modal title="Customer Details (Mobile)" :active="modalActive" @MODAL_CLOSE="closeModal">
            <div class="">
              <app-img key="5"
                       lazy-src="/img/soro/CD_mobile.jpg"
                       class="shadow"
                       alt="Customer Details (Mobile)"
                       :width="824/2"
                       :height="1477/2"/>
            </div>
          </card-modal>
        </template>

        <figure class="soro-ss mb-8 md:mr-8">
          <a role="button"
             title="Total Sales by Product report modal button"
             @click.prevent="openModal('soroReport')">
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

        <template v-if="modalTarget === 'soroReport'">
          <card-modal title="Total Sales by Product report" :active="modalActive" @MODAL_CLOSE="closeModal">
            <div class="">
              <app-img key="7"
                       lazy-src="/img/soro/TotalSalesByProducts.jpg"
                       class="shadow"
                       alt="Total Sales by Product report"
                       :width="1604"
                       :height="1064"/>
            </div>
          </card-modal>
        </template>
      </div>

      <p class="py-2">
        Soro is CRM and analytics software tailored for the cannabis industry. It provides all of a organization's customer data in one place &mdash; per customer sales tasks/contacts/metrics/info and granular reporting on sales accounts, product sales (category and individual), account health, salesperson activity, and more.
        <br>
        Soro imports data from the user organization's state traceability system and builds its sales history, customer list, and analytics from start of the organization's first sale.
      </p>
      <p class="py-2">
        Soro runs on a <a href="https://vuejs.org/" target="_blank" class="anchor" rel="noopener">Vue JS</a> front-end connected via a <a href="https://www.graphile.org/postgraphile/" target="_blank" rel="noopener">PostGraphile</a> GraphQL API server pointed at a PostgreSQL database.
      </p>
    </div>
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
</style>
