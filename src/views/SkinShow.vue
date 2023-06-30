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
</script>
<template>
    <!-- 因為共用component，v-if防止轉換時抓不到champion -->
    <section class="skins" v-if="skin">
        <h1>{{ skin.name }}</h1>
        <h2>{{ skin.eng }}</h2>
        <img :src="skin.cover" >
    </section>
</template>
<style>
.skins{
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.skins img{
    width: 800px;
    height: 500px;
}
</style>