<template lang="">
  <div class="">
    <NavbarAdmin />
    <Navigate />
    <ModelTyps />
</div>
<Pagination />
</template>
<script>
import NavbarAdmin from "@/components/navbars/Navbar-admin.vue";
import ModelTyps from "@/components/models/Models-types.vue";
import Navigate from "@/components/navigate/Navigate.vue";
import Pagination from "../components/pagination/Pagination.vue";

export default {
  data() {
    return {
      name: "ModelTyps",
    };
  },
  components: {
    NavbarAdmin,
    ModelTyps,
    Navigate,
    Pagination,
  },
};
</script>

<style lang=""></style>
