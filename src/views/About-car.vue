<template lang="">
  <div class="">
    <NavbarAdmin />
    <Navigate />
    <h1 class="text-5xl font-semibold mb-5">Modellari</h1>
    <div class="flex">
        <div class="w-3/12">
        <AboutCarDetails />
      </div>
      <div class="w-9/12"><AboutCarImgVue /></div>
    </div>
  </div>
</template>
<script>
import NavbarAdmin from "@/components/navbars/Navbar-admin.vue";
import Navigate from "@/components/navigate/Navigate.vue";
import AboutCarDetails from "@/components/models/About-car-details.vue";
import AboutCarImgVue from "../components/models/About-car-img.vue";

export default {
  data() {
    return {
      name: "AboutCar",
    };
  },
  components: {
    NavbarAdmin,
    Navigate,
    AboutCarDetails,
    AboutCarImgVue,
  },
};
</script>

<style lang=""></style>
