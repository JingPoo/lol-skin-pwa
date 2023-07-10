<script setup>
import { ref, computed } from 'vue'
import Champion from '/src/components/Champion.vue'
import sourceData from '@/data.json'

const champions = sourceData.champions
const roles = ref([
  {id: 1, text:'全部'},
  {id: 2, text:'刺客'},
  {id: 3, text:'鬥士'},
  {id: 4, text:'法師'},
  {id: 5, text:'射手'},
  {id: 6, text:'輔助'},
  {id: 7, text:'坦克'}
])
const selectRole = ref('全部')
const search = ref('')
const searchChampions = computed(()=>{
  return champions.filter((champion)=>{
    if(selectRole.value === '全部'){
      return (champion.eng.toLowerCase().includes(search.value.toLowerCase()) || champion.name.includes(search.value))
    }
    else{
      return (champion.role ===  selectRole.value) && 
    (champion.eng.toLowerCase().includes(search.value.toLowerCase()) || champion.name.includes(search.value))
    }
  })
})
const inputHandler = ((event)=>{
  search.value = event.target.value
})
</script>

<template>
  <!-- 造型價格、英雄排序搜尋、影片內嵌、擁有英雄及造型 -->
  <div class="container w-full px-6 py-8 m-auto">

    <!-- top bar -->
    <div class="top-bar w-full h-24 md:h-12 flex flex-col md:flex-row bg-white rounded-t-lg md:rounded-tr-lg">

      <!-- search box -->
      <div class="search-box w-full md:w-72 h-12 px-2 py-1 border-2 md:border-b-0 md:border-r-0 border-gray-500 rounded-t-lg  md:rounded-tr-none flex items-center relative group">
        <svg class="w-6 h-6 group-hover:w-7 group-hover:h-7 text-gray-600 group-hover:text-secondary transition-all duration-100" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" ><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
        <input type="text" class="w-full text-xl text-gray-700 ml-2 outline-0 placeholder:italic placeholder:text-gray-600" :value="search" @input="inputHandler" placeholder="英雄搜尋">
        <!-- clear input text button -->
        <svg class="w-6 h-6 text-gray-600 hover:text-red-400 cursor-pointer absolute right-2" v-show="search" @click="search = ''"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      </div>

      <!-- role box -->
      <div class="role-box w-full h-12 text-gray-500 font-semibold bg-gray-200 border-x-2 md:border-t-2 border-gray-500 md:rounded-tr-lg flex justify-center items-center">
        <button v-for="role in roles" 
          :key="role.id" 
          @click="selectRole = role.text"
          class="w-1/7 h-full text-xl hover:text-gray-800 hover:font-extrabold border-r-2 border-gray-500 first:border-l-0 last:border-r-0"
          :class="{'!text-2xl text-gray-800 bg-white font-extrabold transition-all duration-150': selectRole === role.text}">
          {{ role.text }}
        </button>
      </div>
    </div>

    <!-- champion list container -->
    <div class="champion-list w-full h-full bg-white border-2 rounded-b-lg border-gray-500 p-8 flex flex-wrap gap-4">
      <router-link 
        v-for="champion in searchChampions" 
        :key="champion.id"
        :to="{name: 'champion.show', params: {id: champion.id, slug: champion.eng}}"
        class="m-auto hover:opacity-80 hover:animate-shake">
        <Champion class="hover:border-4 border-secondary" :champion="champion" :child="champion.skins"></Champion>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
</style>
