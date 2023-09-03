<template lang="">
  <div class="">
    <NavbarAdmin />
    <Navigate />
    <HomeModel />
  </div>
</template>
<script>
import NavbarAdmin from "@/components/navbars/Navbar-admin.vue";
import HomeModel from "@/components/models/Home-model.vue";
import Navigate from "@/components/navigate/Navigate.vue";
export default {
  data() {
    return {
      name: "Home",
    };
  },
  components: {
    NavbarAdmin,
    HomeModel,
    Navigate,
  },
};
</script>

<style lang=""></style>
