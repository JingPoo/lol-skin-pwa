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
    <div class="view-container md:ml-24" :class="{'md:ml-0': !showNav}">
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
body{
  background: linear-gradient(50deg, rgba(239, 230, 208, 0.756), rgba(224, 203, 155, 0.779));
  overflow-x: hidden;
}
.view-container{
  width: 100vw;
  min-width: 300px;
}
</style>
