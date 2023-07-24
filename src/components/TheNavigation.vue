<script setup>
import { ref } from 'vue'
import sourceData from '@/data.json'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
const champions = sourceData.champions
const roles = ref([
  {id: 1, text:'刺客'},
  {id: 2, text:'鬥士'},
  {id: 3, text:'法師'},
  {id: 4, text:'射手'},
  {id: 5, text:'輔助'},
  {id: 6, text:'坦克'}
])
const navShow = ref(true)
const emit = defineEmits(['navShow'])
const clickHandler = (()=>{
    navShow.value = !navShow.value
    emit('navShow', navShow.value)
})
const navclickHandler = (text)=>{
    localStorage.setItem('role', JSON.stringify(text))
    if(route.name === 'Home') router.go(0)
}
</script>
<template>
    <div class="nav-container min-w-fit bg-primary text-white sticky top-0 z-40 md:fixed transition ease-in duration-150" :class="{'md:-translate-x-full': !navShow}">
        <nav class="h-16 w-full md:h-screen md:w-44 text-md flex flex-row md:flex-col justify-start items-center shadow relative">
            <!-- toggle button -->
            <button class="w-10 h-24 bg-complementary text-black border-y-2 border-r-2 border-primary rounded-r-xl flex justify-center items-center absolute left-full top-8 opacity-80 hover:opacity-70 invisible md:visible" @click="clickHandler">
                <svg class="w-10 h-10" :class="{'-rotate-180': !navShow}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" ><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
            </button>

            <!-- home -->
            <div class="w-2rem h-max md:w-full md:h-max md:mt-14 px-4 text-center md:flex md:justify-center">
                <h1 class="h-full text-2xl md:text-4xl leading-8">
                    <router-link to="/" @click="navclickHandler('全部')" class="flex w-full h-full hover:text-complementary">
                        <span>Home</span>
                        <svg class="w-5 md:w-8 ml-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" ><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>
                    </router-link>
                </h1>
            </div>

            <!-- first nav -->
            <ul class="w-[calc(100%-2rem)] h-full md:w-full mr-8 md:mr-0 md:mt-12 flex flex-row justify-center items-center md:flex-col md:justify-start text-xl">
                <li v-for="role in roles" :key="role.id" class="w-full h-full md:h-max leading-8 group relative text-center">
                    <router-link :to="{name: 'Home'}" @click="navclickHandler(role.text)" class="w-full h-full !text-white flex justify-center items-center px-2 md:py-4 sm-h:py-1 hover:!text-complementary hover:font-bold after:content-[''] after:border-b-2 after:border-complementary after:w-0 aftre:h-1 after:absolute after:bottom-2 hover:after:w-full after:block after:transition-width after:duration-300">
                        <span class="md:hidden">{{ role.text[0] }}</span>
                        <span class="text-2xl hidden md:block">{{ role.text }}</span>
                    </router-link>
                    <!-- <div class="flex justify-center items-center h-full px-2 md:py-4 sm-h:py-1 cursor-default hover:text-complementary hover:font-bold after:content-[''] after:border-b-2 after:border-complementary after:w-0 aftre:h-1 after:absolute after:bottom-2 hover:after:w-full after:block after:transition-width after:duration-300">
                        <span class="md:hidden">{{ role.text[0] }}</span>
                        <span class="text-2xl hidden md:block">{{ role.text }}</span>
                    </div> -->

                    <!-- second nav -->
                    <ul  class="hidden md:block bg-secondary z-40 w-max absolute top-full md:top-0 md:left-full rounded shadow md:shadow-2xl">
                        <li class="h-max md:h-14 sm-h:h-12 p-2 border-2 rounded border-primary hidden group-hover:flex group-hover:flex-col group-hover:items-center group-hover:md:flex-row">
                            <router-link 
                            class="w-max p-2 hover:text-complementary hover:font-bold hover:before:content-['']"
                            v-for="champion in champions.filter((champion)=>champion.role === role.text)" 
                            :key="champion.id"
                            :to="{name: 'champion.show', params: {id: champion.id, slug: champion.eng}}"
                            :champion="champion"
                            >
                                {{ champion.name }}
                            </router-link>
                        </li>
                    </ul>
                </li>
                <li class="w-full h-full md:h-max leading-8 group relative text-center">
                    <router-link :to="{name: 'Home'}" @click="navclickHandler('收藏')" class="w-full h-full !text-white flex justify-center items-center px-2 md:py-4 sm-h:py-1 hover:!text-complementary hover:font-bold after:content-[''] after:border-b-2 after:border-complementary after:w-0 aftre:h-1 after:absolute after:bottom-2 hover:after:w-full after:block after:transition-width after:duration-300">
                        <span class="hidden text-2xl" :class="'md:!block'">收藏</span>
                        <svg class="w-6 h-6 md:absolute md:right-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" ><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
                    </router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>
<style scoped>
</style>