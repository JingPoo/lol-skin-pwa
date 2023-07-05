<script setup>
import TheNavigation from '@/components/TheNavigation.vue';
import { useRoute } from 'vue-router';
const route = useRoute()
</script>

<template>
  <TheNavigation></TheNavigation>
  <div class="view-container">
    <router-view></router-view>
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
}
.view-container{
  width: 100vw;
}
/* .fade-enter,
.fade-leave-to{
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active{
  transition: opacity .3s;
} */
</style>
