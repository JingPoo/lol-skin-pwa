<script setup>
import TheNavigation from '@/components/TheNavigation.vue';
import { useRoute } from 'vue-router';
const route = useRoute()
</script>

<template>
  <div class="flex flex-col md:grid md:grid-cols-12 absolute top-0 bottom-0 ">
    <TheNavigation class="col-span-1"></TheNavigation>
    <div class="view-container col-span-11">
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
