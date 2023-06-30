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
                <h2>{{ champion.name }}</h2>
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
    width: 200px;
    height: 300px;
    display: flex;
}
.cover{
    width: 100%;
    height: 100%;
    position: relative;
}
.cover .text{
    width: 100%;
    color: white;
    background-color: rgba(0,0,0,.5);
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
.skins{
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
</style>