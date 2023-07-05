<script setup>
import {computed} from 'vue'
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
    </div>
</template>
<style scoped>
.champion_container{
    width: 120px;
    height: 120px;
    display: flex;
    cursor: pointer;
    border-radius: 50%;
    box-shadow: 0px 0px 5px var(--main-color);
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
    width: 50%;
    color: white;
    background-color: rgba(0,0,0,.7);
    position: absolute;
    bottom: 10%;
    display: flex;
    flex-direction: column;
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
    .champion_container{
        width: 100px;
        height: 100px;
    }
}
/* For Medium Device */  
@media all and (min-width: 768px) and (max-width: 992px){
    
}
/* For Large Device */  
@media all and (min-width: 992px){
    .champion_container{
        width: 150px;
        height: 150px;
    }
    .text h3{
        font-size: 16px;
    }
}
</style>