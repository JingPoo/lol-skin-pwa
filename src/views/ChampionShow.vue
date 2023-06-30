<script setup>
import { computed } from "vue"
import sourceData from '@/data.json'
import Skin from '@/components/Skin.vue'

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
</script>
<template>
    <!-- 因為共用component，v-if防止轉換時抓不到champion -->
    <section class="champions" v-if="champion">
        <h1>{{ champion.name }}</h1>
        <h2>{{ champion.eng }}</h2>
        <h3>{{ champion.role }}</h3>
    </section>
    <section class="skins">
        <h2> Skins of {{ champion.eng }}</h2>
        <div class="cards">
            <router-link
                v-for="(skin, index) in champion.skins"
                :key="index"
                :to="{name: 'skin.show', params:{skinSlug: skin.eng}}"
            >
                <Skin :skin="skin"></Skin>
            </router-link>
        </div>
        <router-view></router-view>
    </section>
</template>
<style>
.champions{
    width: 100%;
    height: 200px;
}
.skins{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
}
.skins .cards{
    width: 100%;
    display: flex;
    gap: 10px;
    overflow-y: scroll;
}
</style>