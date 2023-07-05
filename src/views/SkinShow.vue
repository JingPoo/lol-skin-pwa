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
    <div class="skin-page">
        <!-- 因為共用component，v-if防止轉換時抓不到champion -->
        <div class="skins" v-if="skin">
            <div class="text">
                <h1>{{ skin.name }}</h1>
                <h2>{{ skin.eng }}</h2>
            </div>
            <div class="imgvid">
                <img class="skinImg" :src="skin.cover">
                <!-- youtube video --> 
                <div class="video-container">
                    <iframe :src="urlHandler(skin.url)" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </div>
    
</template>
<style scoped>
.skin-page{
    width: 100%;
    padding-top: 20px;
}
.skins{
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
}
.skins .text{
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.text h1{
    font-size: 26px;
}
.text h2{
    font-size: 22px;
}
.skins .imgvid{
    width: 100%;
    height: calc(100% - 60px);
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
}
.imgvid img,
.imgvid .video-container{
    width: 100%;
    height: 50%;
}
.video-container iframe{
    width: 100%;
    height: 100%;
    /* aspect-ratio: 16 / 9; */
} 
/* For Small Device */
@media all and (min-width: 414px) and (max-width: 768px){
    .skins{
        height: 700px;
    }
}
/* For Medium Device */  
@media all and (min-width: 768px) and (max-width: 992px){
    .skins{
        height: 1000px;
    }
}
/* For Large Device */  
@media all and (min-width: 992px){
    .skins{
        height: 500px;
    }
    .skins .text{
        flex-direction: row;
        gap: 20px;
    }
    .skins .imgvid{
        flex-direction: row;
    }
    .imgvid img,
    .imgvid .video-container{
        width: 50%;
        height: 100%;
    }
    .video-container iframe{
        width: 100%;
        height: 100%;
        /* aspect-ratio: 16 / 9; */
    } 
}
</style>