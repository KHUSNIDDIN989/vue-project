<template lang="">
  <h1 class="text-6xl font-bold ml-4">Modellar turlari</h1>
  <div class="flex w-full  justify-between items-center flex-wrap">
    <div class="w-3/12 p-8 cursor-pointer">
     <RouterLink to="/aboutcar">
       <img
        class="object-cover w-96 rounded-lg"
        src="@img/chevrolet.png"
        alt=""
      />
      <h1 class="text-3xl text-center mt-8 font-bold">Chevrolet</h1>
      <p class="text-center font-bold text-[24px]">Narxi: <span class="font-extralight">200 000 000</span></p>
     </RouterLink>
    </div>
    <div class="w-3/12 p-8 cursor-pointer">
      <RouterLink to="/aboutcar">
        <img
          class="object-cover w-96 rounded-lg"
          src="@img/lada.png"
          alt=""
        />

        <h1 class="text-3xl text-center mt-8 font-bold">Lada</h1>
      </RouterLink>
    </div>
    <div class="w-3/12 p-8 cursor-pointer">
     <RouterLink to="/aboutcar">
       <img
        class="object-cover w-96 rounded-lg"
        src="@img/lam.png"
        alt=""
      />

      <h1 class="text-3xl text-center mt-8 font-bold">lamborghini</h1>
     </RouterLink>
    </div>
    <div class="w-3/12 p-8 cursor-pointer">
     <RouterLink to="/aboutcar">
       <img
        class="object-cover w-96 rounded-lg"
        src="@/assets/images/frari.png"
        alt=""
      />

      <h1 class="text-3xl text-center mt-8 font-bold">ferrari</h1>
     </RouterLink>
    </div>
    <div class="w-3/12 p-8 cursor-pointer">
     <RouterLink to="/aboutcar">
       <img
        class="object-cover w-96 rounded-lg"
        src="@/assets/images/frari.png"
        alt=""
      />

      <h1 class="text-3xl text-center mt-8 font-bold">ferrari</h1>
     </RouterLink>
    </div>
    <div class="w-3/12 p-8 cursor-pointer">
     <RouterLink to="/aboutcar">
       <img
        class="object-cover w-96 rounded-lg"
        src="@/assets/images/frari.png"
        alt=""
      />

      <h1 class="text-3xl text-center mt-8 font-bold">ferrari</h1>
     </RouterLink>
    </div>
    <div class="w-3/12 p-8 cursor-pointer">
     <RouterLink to="/aboutcar">
       <img
        class="object-cover w-96 rounded-lg"
        src="@/assets/images/frari.png"
        alt=""
      />

      <h1 class="text-3xl text-center mt-8 font-bold">ferrari</h1>
     </RouterLink>
    </div>
    <div class="w-3/12 p-8 cursor-pointer">
     <RouterLink to="/aboutcar">
       <img
        class="object-cover w-96 rounded-lg"
        src="@/assets/images/frari.png"
        alt=""
      />

      <h1 class="text-3xl text-center mt-8 font-bold">ferrari</h1>
     </RouterLink>
    </div>
  </div>
  
</template>
<script>
import { RouterLink } from "vue-router";
export default {
  data() {
    return {
      link: "",
    };
  },
};
</script>
<style lang=""></style>
