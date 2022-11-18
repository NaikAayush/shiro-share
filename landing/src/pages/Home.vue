<template>
  <div className="flex flex-col min-h-screen overflow-hidden">
    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">
      <Hero />
      <PressLogos />
      <Providers />
      <Features />
      <Pricing />
      <Resources />
      <Cta />
    </main>

    <!-- Site footer -->
    <div class="pb-10"></div>
  </div>
</template>

<script>
import Header from "../partials/Header.vue";
import Hero from "../partials/Hero.vue";
import PressLogos from "../partials/PressLogos.vue";
import Providers from "../partials/Providers.vue";
import Features from "../partials/Features.vue";
import Pricing from "../partials/Pricing.vue";
import Resources from "../partials/Resources.vue";
import Cta from "../partials/Cta.vue";

export default {
  name: "Home",
  components: {
    Header,
    Hero,
    PressLogos,
    Providers,
    Features,
    Pricing,
    Resources,
    Cta,
  },
};
</script>
