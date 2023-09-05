<template lang="">
  <nav class="bg-slate-100 w-full h-[140px] left-0 border-gray-200 flex items-center border-l-2 px-10">
    <div class="flex  justify-between w-full">
      <RouterLink to="/">
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-bold text-lg"
        >
          <i class="fa-regular fa-user mr-3 text-xl"></i> Admin o‘tish
        </button>
      </RouterLink>
      <div class="w-24 flex justify-between items-center">
        <i class="fa-solid fa-bell text-2xl"></i>
        <i class="fa-solid fa-circle-user text-5xl"></i>
      </div>
    </div>
  </nav>
</template>
<script>
import { RouterLink } from "vue-router";

export default {
  data() {
    return {
      name: "",
    };
  },
};
</script>
<style lang=""></style>
