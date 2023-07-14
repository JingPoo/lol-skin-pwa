<script setup>
import { computed } from "vue"
import sourceData from '@/data.json'

const props = defineProps({
    id: {
        type: Number,
        required: true
    },
    skinSlug: {
        type: String,
        required: true
    }
})
const champions = sourceData.champions
const champion = computed(()=>{
    return champions.find(champion => champion.id === props.id)
})
const skin = computed(()=>{
    return champion.value.skins.find(skin => skin.eng === props.skinSlug)
})
const urlHandler = ((url)=>{
    return url.replace(".be/", "be.com/embed/")
})
</script>
<template>
    <div class="skin-page w-full px-8 pt-4 pb-16">
        <!-- 因為共用component，v-if防止轉換時抓不到skin -->
        <div class="skins w-full h-max" v-if="skin">
            <!-- text -->
            <div class="w-full flex flex-col justify-center items-center mb-4">
                <h1 class="text-2xl md:text-4xl font-bold">{{ skin.name }}</h1>
                <h2 class="text-xl md:text-2xl">{{ skin.eng }}</h2>
            </div>
            <div class=" w-full h-max flex flex-col md:flex-row items-center justify-center gap-2">
                <!-- img -->
                <img class="w-full md:w-1/2 aspect-video border-4 border-primary shadow shadow-primary" :src="skin.cover">
                <!-- youtube video --> 
                <div class="w-full md:w-1/2 aspect-video border-4 border-primary shadow shadow-primary">
                    <iframe class="w-full h-full" :src="urlHandler(skin.url)" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
</style>