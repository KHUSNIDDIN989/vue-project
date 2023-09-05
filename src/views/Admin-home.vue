<template>
  <div class="flex">
    <Sidebar class="w-2/12 pt-40 h-screen bg-slate-100" />
    <div class="w-10/12">
      <NavbarAdminDashboarVue />
      <AdminPanelVue />
      <PaginationVue/>
      <ModalCotegoryVue/>
    </div>
  </div>
</template>
<script>
import AdminPanelVue from "../components/models/Admin-panel.vue";
import ModalCotegoryVue from '../components/models/Modal-cotegory.vue';
import Sidebar from "../components/models/Sidebar.vue";
import NavbarAdminDashboarVue from "../components/navbars/Navbar-admin-dashboar.vue";
import PaginationVue from '../components/pagination/Pagination.vue';

export default {
  data() {
    return {
      name: "Admin",
    };
  },
  components: {
    Sidebar,
    NavbarAdminDashboarVue,
    AdminPanelVue,
    PaginationVue,
    ModalCotegoryVue
  },
};
</script>
<style></style>
