<script setup>
import { ref, computed,onBeforeMount} from 'vue'
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
  {id: 7, text:'坦克'},
  {id: 8, text:'收藏'},
])
const selectRole = ref('全部')
const search = ref('')
const refreshkey = ref(0)
const msgId = ref(0)
const msgName = ref('')
const favorIds = ref([])
onBeforeMount(()=>{
  favorIds.value = JSON.parse(localStorage.getItem('favorId')) || []
})
const searchChampions = computed(()=>{
  // force searchChampions to recompute
  refreshkey.value
  return champions.filter((champion)=>{
    if(selectRole.value === '全部'){
      return (champion.eng.toLowerCase().includes(search.value.toLowerCase()) || champion.name.includes(search.value))
    }
    else if(selectRole.value === '收藏'){
      let favorIds = JSON.parse(localStorage.getItem('favorId')) || []
      return favorIds.includes(champion.id) &&
      (champion.eng.toLowerCase().includes(search.value.toLowerCase()) || champion.name.includes(search.value))
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

let timer
const favorHandler = ((id)=>{
  if(msgId.value !== 0) clearTimeout(timer)
  timer = setTimeout(()=>{
    msgId.value = 0
  },3000)
  msgName.value = champions.find((champion) => champion.id === id).name
  msgId.value = id
  const favorIndex = favorIds.value.findIndex((favorId) => favorId === id)
  if(favorIndex === -1) {
    favorIds.value.push(id)
    localStorage.setItem('favorId', JSON.stringify(favorIds.value))
  }else {
    favorIds.value.splice(favorIndex, 1)
    localStorage.setItem('favorId', JSON.stringify(favorIds.value))
    refreshkey.value += 1
  }
})
</script>

<template>
  <div class="container w-full min-w-fit px-6 py-8 m-auto">
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
        class="w-[12.5%] min-w-fit h-full text-xl hover:text-gray-800 hover:font-extrabold border-r-2 border-gray-500 first:border-l-0 last:border-r-0 last:md:rounded-tr-lg flex justify-center items-center group"
        :class="{'!text-2xl text-gray-800 bg-white font-extrabold transition-all duration-150 ease-out': selectRole === role.text}">
          <svg class="w-6 h-6 hidden group-hover:text-yellow-600" :class="{'lg:!block': role.text === '收藏'}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" ><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
          {{ role.text }}
        </button>
      </div>
    </div>

    <!-- champion list container -->
    <TransitionGroup appear
    enter-from-class="opacity-0 scale-50" 
    enter-to-class="opacity-1 scale-100"
    enter-active-class="duration-500 ease-out delay-75"
    tag="div" class="champion-list w-full h-full bg-white border-2 rounded-b-lg border-gray-500 p-8 flex flex-wrap gap-4">
      <div v-for="champion in searchChampions" :key="champion.id" class="relative group hover:animate-shake m-auto">
        <router-link 
          :to="{name: 'champion.show', params: {id: champion.id, slug: champion.eng}}"
          class=" group-hover:opacity-80">
          <Champion class="group-hover:border-4 border-secondary" :champion="champion" :child="champion.skins"></Champion>
        </router-link>

        <!-- favor button -->
        <div @click="favorHandler(champion.id)" 
        class="w-8 h-8 absolute -top-3 -right-3 md:-top-2 md:-right-2 rounded-full hidden justify-center items-center cursor-pointer hover:opacity-80 group-hover:flex" 
        :class="[favorIds.includes(champion.id) ? 'bg-yellow-600' : 'bg-gray-600']">
          <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" ><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
        </div>
      </div>
    </TransitionGroup>
    <Teleport to="body">
      <Transition 
      appear
      enter-from-class="opacity-0 scale-50" 
      enter-active-class="duration-300 ease-out">
        <div class="w-max h-max z-50 text-xl text-white bg-orange-600 px-6 py-3 rounded-lg absolute top-0 right-0" v-show="msgId !== 0">{{favorIds.includes(msgId) ? '加入' : '取消'}}收藏: {{ msgName }} </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
</style>
