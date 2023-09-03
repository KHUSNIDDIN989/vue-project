<template>
  <div class="pl-10 bg-auto bg-no-repeat bg-center w-full">
    <h1 class="text-2xl font-medium">Chevrolet Malibu</h1>
    <img src="@img/malibu.png" alt="" class="ml-8" v-if="picked" />
    <img src="@img/ichki.png" alt="" class="ml-8" v-else />
    <p class="text-center mt-10">
      Tasvir tanlangan konfiguratsiyaga mos kelmasligi mumkin. Mashinaning rangi
      ushbu saytda taqdim etilganidan farq qilishi mumkin.
    </p>
    <div class="flex justify-center mt-14">
      <div class="flex items-center">
        <input
           v-model="picked" 
          id="default-radio-1"
          type="radio"
          value="1"
          checked
          name="default-radio"
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          for="default-radio-1"
          class="ml-2 text-sm font-medium text-gray-900 mr-16"
          >Tashqi{{ picked }}</label
        >
      </div>
      <div class="flex items-center">
        <input
         v-model="picked"
          id="default-radio-2"
          type="radio"
          value="2"
          name="default-radio"
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          for="default-radio-2"
          class="ml-2 text-sm font-medium text-gray-900"
          >Ichki makon</label
        >
      </div>
      
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      name: "about",
    };
  },
  methods: {
      check(e) {
        console.log(e);
      return e ;
    },
  },
};
</script>

<style></style>
