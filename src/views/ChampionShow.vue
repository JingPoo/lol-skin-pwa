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
    <div class="champion-page">
        <!-- 因為共用component，v-if防止轉換時抓不到champion -->
        <div class="champion" v-if="champion" :style="bg_css">
            <img :src="champion.cover">
            <router-link 
            class="left" :to="{name: 'champion.show', params: {id: idbackCount(champion.id), slug: slugbackCount(champion.id)}}">
                <i class="fa-solid fa-chevron-left"></i>
                <div class="left-text">
                    <h5>{{ leftName(champion.id)}}</h5>
                    <h6>{{ slugbackCount(champion.id) }}</h6>
                </div>
            </router-link>
            <router-link 
            class="right" :to="{name: 'champion.show', params: {id: idnextCount(champion.id), slug: slugnextCount(champion.id)}}">
                <i class="fa-solid fa-chevron-right"></i>
                <div class="right-text">
                    <h5>{{ rightName(champion.id)}}</h5>
                    <h6>{{ slugnextCount(champion.id) }}</h6>
                </div>
            </router-link>
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
.champion > a{
    font-size: 26px;
    text-decoration: none;
    color: black;
    cursor: pointer;
    position: absolute;
    top: 35%;
    transition: .3s;
}
.champion > a:hover{
    color: var(--main-color);
    opacity: .6;
}
.champion > .left{
    left: 20px;
}
.champion > .right{
    right: 20px;
}
.left .left-text,
.right .right-text{
    font-size: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    display: none;
    position: absolute;
}
.left .left-text{
    left: 0
}
.right .right-text{
    right: 0;
}
.champion > .left:hover{
    transform: translateX(-5px);
}
.champion > .left:hover .left-text{
    display: block;
}
.champion > .right:hover{
    transform: translateX(5px);
}
.champion > .right:hover .right-text{
    display: block;
}
.skins{
    width: 100%;
    max-width: 1440px;
    margin: auto;
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
    .champion > a{
        font-size: 28px;
    }
    .champion > .left{
        left: 30px;
    }
    .champion > .right{
        right: 30px;
    }
    .left .left-text,
    .right .right-text{
        width: 40px;
        top: 0;
    }
    .left .left-text{
        left: 20px;
    }
    .right .right-text{
        right: 20px;
    }
}
/* For Medium Device */  
@media all and (min-width: 768px) and (max-width: 992px){
    .champion > a{
        font-size: 32px;
    }
    .champion > .left{
        left: 80px;
    }
    .champion > .right{
        right: 80px;
    }
    .left .left-text{
        font-size: 18px;
    }
    .right .right-text{
        font-size: 18px;
    }
    .left .left-text,
    .right .right-text{
        width: 40px;
        top: 0;
    }
    .left .left-text{
        left: 30px;
    }
    .right .right-text{
        right: 30px;
    }
}
/* For Large Device */  
@media all and (min-width: 992px){
    .champion{
        height: 300px;
        flex-direction: column;
    }
    .champion > a{
        font-size: 38px;
    }
    .champion > .left{
        left: 100px;
    }
    .left .left-text{
        font-size: 24px;
    }
    .champion > .right{
        right: 100px;
    }
    .right .right-text{
        font-size: 24px;
    }
    .left .left-text,
    .right .right-text{
        width: 80px;
        top: 0;
    }
    .left .left-text{
        left: 30px;
    }
    .right .right-text{
        right: 30px;
    }
}
</style>