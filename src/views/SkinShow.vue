<script setup>
import { computed } from "vue"
import sourceData from '@/data.json'
import Youtube from 'vue3-youtube'

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
    <div class="skin-page">
        <!-- 因為共用component，v-if防止轉換時抓不到champion -->
        <div class="skins" v-if="skin">
            <div class="left-part">
                <h1>{{ skin.name }}</h1>
                <h2>{{ skin.eng }}</h2>
                <img :src="skin.cover" >
            </div>
            <div class="right-part">
                <!-- youtube video --> 
                <Youtube
                    :src="skin.url"
                    ref="youtube"
                ></Youtube>
            </div>
        </div>
    </div>
    
</template>
<style scoped>
.skin-page{
    width: 100%;
}
.skins{
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.left-part,
.right-part{
    width: 50%;
    height: 100%;
}
.left-part{
    background-color: #8d9a76;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.right-part{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(179, 134, 134);
}
.skins .name{
    width: 100%;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.skins img{
    width: 600px;
    height: 400px;
}

</style>