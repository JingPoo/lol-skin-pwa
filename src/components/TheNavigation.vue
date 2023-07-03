<script setup>
import sourceData from '@/data.json'
const champions = sourceData.champions
</script>
<template>
    <div class="nav-container">
        <router-link id="logo" to="/">Home</router-link>
        <router-link 
        v-for="champion in champions" 
        :key="champion.id"
        :to="{name: 'champion.show', params: {id: champion.id, slug: champion.eng}}"
        :champion="champion">
            {{ champion.name }}
        </router-link>
    </div>
</template>
<style scoped>
.nav-container{
  width: 100%;
  height: 50px;
  background-color: #272d5b;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  z-index: 999;
}
.nav-container a{
    text-decoration: none;
    color: #ffffff;
}
.nav-container a:hover{
    color: #ecd0a2;
}
.nav-container a.router-link-active,
.nav-container a.router-link-exact-active{
    font-weight: bolder;
    color: #ecd0a2;
}
#logo{
    font-size: 22px;
}
</style>