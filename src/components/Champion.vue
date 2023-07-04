<script setup>
import {computed, ref} from 'vue'
const props = defineProps({
    champion: Object
})

const bg_css = computed(()=>{
    return {
        background: `url(${props.champion.cover}) no-repeat center / cover`
    }
})
</script>
<template>
    <div class="champion_container">
        <div class="cover" :style="bg_css">
            <div class="text">
                <h3>{{ champion.name }}</h3>
                <h3>{{ champion.eng }}</h3>
            </div>
        </div>
        <!-- <div class="skins">
            <img :src="skin.cover" v-for="(skin, index) in props.champion.skins" :key="index">
        </div> -->
    </div>
</template>
<style scoped>
.champion_container{
    width: 120px;
    height: 120px;
    display: flex;
    cursor: pointer;
}
.cover{
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: 50%;
    display: flex;
    justify-content: center;
}
.cover .text{
    width: 80%;
    color: white;
    background-color: rgba(0,0,0,.5);
    position: absolute;
    bottom: -10px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
}
.text h3{
    font-size: 12px;
}
.skins{
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

/* For Small Device */
@media all and (min-width: 414px) and (max-width: 768px){
    
}
/* For Medium Device */  
@media all and (min-width: 768px) and (max-width: 992px){

}
/* For Large Device */  
@media all and (min-width: 992px){
    .champion_container{
        width: 150px;
        height: 150px;
        display: flex;
        cursor: pointer;
    }
    .cover{
        width: 100%;
        height: 100%;
        position: relative;
        border-radius: 50%;
        display: flex;
        justify-content: center;
    }
    .cover .text{
        width: 80%;
        color: white;
        background-color: rgba(0,0,0,.5);
        position: absolute;
        bottom: -10px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
    }
    .text h3{
        font-size: 16px;
    }
    .skins{
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
}
</style>