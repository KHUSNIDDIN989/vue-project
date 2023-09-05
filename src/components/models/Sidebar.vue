<template lang="">
  <div>
    <aside
      id="default-sidebar"
      class="fixed w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div class="h-full px-3 py-4 overflow-y-auto">
        <ul class="space-y-2 font-medium">
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-slate-700 hover:text-white dark:hover:bg-gray-700 group"
            >
              <i class="fa-sharp fa-solid fa-house"></i>
              <span class="ml-3">Asosiy</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-slate-700 hover:text-white dark:hover:bg-gray-700 group"
            >
              <i class="fa-sharp fa-solid fa-scroll"></i>
              <span class="flex-1 ml-3 whitespace-nowrap">E’lonlar</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-slate-700 hover:text-white dark:hover:bg-gray-700 group"
            >
              <i class="fa-solid fa-file-circle-question"></i>
              <span class="flex-1 ml-3 whitespace-nowrap">Savollar</span>
              <span
                class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300"
                >3</span
              >
            </a>
          </li>
        </ul>
      </div>
    </aside>
  </div>
</template>
<script>
export default {};
</script>
<style lang=""></style>
