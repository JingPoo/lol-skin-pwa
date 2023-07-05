<script setup>
import { ref, computed} from "vue"
import sourceData from '@/data.json'
import Skin from '@/components/Skin.vue'
import GoBack from '@/components/GoBack.vue'
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
</script>
<template>
    <div class="champion-page">
        <!-- 因為共用component，v-if防止轉換時抓不到champion -->
        <div class="champion" v-if="champion" :style="bg_css">
            <img :src="champion.cover">
            <div class="info">
                <h1>{{ champion.name }}</h1>
                <h2>{{ champion.eng }}</h2>
                <h3>角色定位: {{ champion.role }}</h3>
                <!-- <GoBack></GoBack> -->
            </div>
        </div>
        <div class="skins">
            <h2> Skins of {{ champion.name }}</h2>
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
        </div>
        
    </div>
</template>
<style scoped>
.champion-page{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.champion{
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: center;
    gap: 20px;
    align-items: center;
    position: relative;
}
.champion::before{
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(255,255,255,.4);
}
.champion > img{
    width: 120px;
    height: 120px;
    border-radius: 50%;
    z-index: 1;
    box-shadow: 0px 0px 10px black;
}
.champion .info{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
}
.skins{
    width: 100%;
    background-color: transparent;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
}
.skins > h2{
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: white;
    background-color: #272d5b;
}
.skins .cards{
    width: 100%;
    height: 180px;
    display: flex;
    align-items: center;
    gap: 10px;
    overflow-x: auto;
}
/* For Small Device */
@media all and (min-width: 414px) and (max-width: 768px){
    
}
/* For Medium Device */  
@media all and (min-width: 768px) and (max-width: 992px){

}
/* For Large Device */  
@media all and (min-width: 992px){
    .champion{
        height: 300px;
        flex-direction: column;
    }
}
</style>