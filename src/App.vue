<script setup>
import TheNavigation from '@/components/TheNavigation.vue';
</script>

<template>
  <TheNavigation></TheNavigation>
  <div class="view-container">
    <router-view></router-view>
  </div>
</template>

<style>
*{
  padding: 0;
  margin: 0;
}
html,body{
  height: 100vh;
}
.nav-container{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.nav-container a{
  text-decoration: none;
}

</style>
