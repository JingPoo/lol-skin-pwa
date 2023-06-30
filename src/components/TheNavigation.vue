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
        :to="{name: 'champion.show', params: {id: champion.id, slug: champion.slug}}"
        :champion="champion">
            {{ champion.name }}
        </router-link>
    </div>
</template>
<style>
.nav-container a{
    color: #aaa;
}
.nav-container a.router-link-exact-active{
    color: black;
    border-bottom: 2px solid black;
}
#logo{
    font-size: 22px;
}
</style>