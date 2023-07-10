<script setup>
import { ref, watch } from 'vue'
import TheNavigation from '@/components/TheNavigation.vue';
import { useRoute } from 'vue-router';
const route = useRoute()
const showNav = ref(true)
const navShow = ((navShow)=>{
  showNav.value = navShow
})
</script>

<template>
  <div class="flex flex-col">
    <TheNavigation @nav-show="navShow"></TheNavigation>
    <div class="view-container w-screen md:w-[calc(100%-11rem)] md:ml-44" :class="{'md:!ml-0 md:!w-screen': !showNav}">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
:root{
  --main-color: #272d5b;
  --second-color: #7860D2;
  --complement-color: #D4BB9D;
}
*{
  padding: 0;
  margin: 0;
  list-style: none;
  box-sizing: border-box;
}
html,body{
  height: 100vh;
}
</style>
