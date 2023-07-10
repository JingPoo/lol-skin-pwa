<script setup>
import { ref, computed} from "vue"
import sourceData from '@/data.json'
import Skin from '@/components/Skin.vue'
// import GoBack from '@/components/GoBack.vue'
// import axios from 'axios'
// const champion = ref(null)
// // 因為頁面共用此component，需要每次update後重新取api data
// onUpdated(()=>{
//     axios.get('http://localhost:8888/champions/' + props.id)
//     .then((res=>{
//         champion.value = res.data
//     })).catch((err)=>{
//         console.log(err)
//     })
// }) 

const props = defineProps({
    id: {
        type: Number,
        required: true
    }
})
const champions = sourceData.champions
const champion = computed(()=>{
    return champions.find(champion => champion.id === props.id)
})
const bg_css = computed(()=>{
    return {
        background: `url(${champion.value.cover}) repeat center / 7%`
    }
})
const idbackCount = ((id)=>{
    if(id === 1) return champions.length
    return id - 1
})
const slugbackCount = ((id)=>{
    if(id ===  1) return champions[champions.length-1].eng
    return champions[id-2].eng
})
const idnextCount = ((id)=>{
    if(id === champions.length) return 1
    return id + 1
})
const slugnextCount = ((id)=>{
    if(id === champions.length) return champions[0].eng
    return champions[id].eng
})
const leftName = ((id)=>{
    if(id ===  1) return champions[champions.length-1].name
    return champions[id-2].name
})
const rightName = ((id)=>{
    if(id === champions.length) return champions[0].name
    return champions[id].name
})
</script>
<template>
    <!-- champion page container -->
    <div class="w-full flex flex-col items-center">

        <!-- champion block -->
        <!-- 因為共用component，v-if防止轉換時抓不到champion -->
        <div class="w-full h-60 md:h-[50vh] md:border-t-8 border-primary flex md:flex-col justify-center items-center gap-2 md:gap-4 relative before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:bg-[rgba(255,255,255,.4)]" v-if="champion" :style="bg_css">
            <img :src="champion.cover" class="w-36 h-36 md:w-48 md:h-48 rounded-full z-10 shadow shadow-black hover:scale-110 transition duration-200">

            <!-- left button -->
            <router-link 
            class="absolute top-18 md:top-48 left-6 md:left-32 bg-[rgba(255,255,255,.2)] rounded-xl hover:opacity-80 hover:text-primary  hover:-translate-x-2 transition ease-out duration-300 group" :to="{name: 'champion.show', params: {id: idbackCount(champion.id), slug: slugbackCount(champion.id)}}">
                <svg class="w-10 md:w-12 h-12 md:h-20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>           
                <div class="w-max text-xs md:text-lg flex flex-col justify-center items-center pt-2 absolute left-0 invisible group-hover:visible">
                    <h5>{{ leftName(champion.id)}}</h5>
                    <h6>{{ slugbackCount(champion.id) }}</h6>
                </div>
            </router-link>

            <!-- right button -->
            <router-link 
            class="absolute top-18 md:top-48 right-6 md:right-32 bg-[rgba(255,255,255,.2)] rounded-xl hover:opacity-80 hover:text-primary hover:translate-x-2 transition ease-out duration-300 group" :to="{name: 'champion.show', params: {id: idnextCount(champion.id), slug: slugnextCount(champion.id)}}">
                <svg class="w-10 md:w-12 h-12 md:h-20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                <div class="w-max text-xs md:text-lg flex flex-col justify-center items-center pt-2  absolute right-0 invisible group-hover:visible">
                    <h5>{{ rightName(champion.id)}}</h5>
                    <h6>{{ slugnextCount(champion.id) }}</h6>
                </div>
            </router-link>

            <!-- champion info -->
            <div class="text-black font-bold md:text-xl flex flex-col justify-center items-center z-10">
                <h1 class="text-3xl md:text-5xl font-bold">{{ champion.name }}</h1>
                <h2 class="md:text-2xl">{{ champion.eng }}</h2>
                <h3 class="md:text-2xl">角色定位: {{ champion.role }}</h3>
                <!-- <GoBack></GoBack> -->
            </div>
        </div>

        <!-- skin block -->
        <div class="skins w-full flex flex-col justify-center items-center">
            <h2 class="w-full h-12 md:h-16 leading-[3rem] md:leading-[4rem] text-center text-lg md:text-2xl font-bold text-slate-200 bg-primary"> Skins of {{ champion.name }}</h2>
            <div class="cards w-full px-6 py-2 flex gap-2 overflow-x-auto">
                <router-link
                    v-for="(skin, index) in champion.skins"
                    :key="index"
                    :to="{name: 'skin.show', params:{skinSlug: skin.eng}}"
                >
                    <Skin :skin="skin"></Skin>
                </router-link>
            </div>
            <router-view></router-view>
        </div>
        
    </div>
</template>
<style scoped>
</style>