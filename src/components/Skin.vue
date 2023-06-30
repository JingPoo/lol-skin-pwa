<script setup>
import {computed} from 'vue'
const props = defineProps({
    skin: {
        type: Object,
        required: true
    }
})

const bg_css = computed(()=>{
    return {
        background: `url(${props.skin.cover}) no-repeat center / cover`
    }
})
</script>
<template>
    <div class="skin_container">
        <div class="cover" :style="bg_css">
            <div class="text">
                <h2>{{ skin.name }}</h2>
                <h3>{{ skin.eng }}</h3>
            </div>
        </div>
    </div>
</template>
<style scoped>
.skin_container{
    width: 200px;
    height: 250px;
    display: flex;
}
.cover{
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: 10px;
}
.cover .text{
    width: 100%;
    font-size: 12px;
    color: white;
    background-color: rgba(0,0,0,.5);
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0px 0px 10px 10px ;
}
</style>