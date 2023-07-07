<script setup>
import { ref } from 'vue'
import sourceData from '@/data.json'
const champions = sourceData.champions
const roles = ref([
  {id: 1, text:'刺客'},
  {id: 2, text:'鬥士'},
  {id: 3, text:'法師'},
  {id: 4, text:'射手'},
  {id: 5, text:'輔助'},
  {id: 6, text:'坦克'}
])
</script>
<template>
    <div class="nav-container bg-primary text-white sticky top-0 z-50">
        <nav class="h-8 w-full text-md flex flex-row md:flex-col justify-start items-center shadow"> 
            <div class="w-2rem md:w-full md:mt-8 h-full px-4 text-center">
                <h1 class=" h-full text-lg md:text-xl  leading-8">
                    <router-link id="logo" to="/" class="flex w-full h-full hover:text-complementary hover:font-bold">
                        <span>Home</span>
                        <svg class="w-5 ml-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" ><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>
                    </router-link>
                </h1>
            </div>
            <ul class="w-[calc(100%-2rem)] md:w-full md:mt-12 flex flex-row justify-center items-center md:flex-col text-md">
                <li v-for="role in roles" :key="role.id" class="w-full h-full leading-8 group relative text-center">
                    <a href="javascript:;" class="block h-full px-2 hover:text-complementary hover:font-bold">{{ role.text }}</a>
                    <ul class="bg-secondary z-max w-max absolute top-full left-2 md:-top-1 md:left-full rounded-b md:rounded shadow md:shadow-2xl">
                        <li class="h-max md:h-10 px-2 hidden group-hover:flex group-hover:flex-col group-hover:items-center group-hover:md:flex-row ">
                            <router-link 
                            class="px-2 hover:text-complementary hover:font-bold"
                            v-for="champion in champions.filter((champion)=>champion.role === role.text)" 
                            :key="champion.id"
                            :to="{name: 'champion.show', params: {id: champion.id, slug: champion.eng}}"
                            :champion="champion">
                                {{ champion.name }}
                            </router-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    </div>
</template>
<style scoped>
</style>