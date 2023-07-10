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
    <!-- champion container -->
    <div class="w-32 h-32 md:w-40 md:h-40 rounded-full shadow shadow-primary">
        <!-- cover -->
        <div class="w-full h-full rounded-full flex justify-center relative" :style="bg_css">
            <div class="w-max text-sm md:text-lg text-white  px-2 rounded bg-[rgba(0,0,0,.7)] absolute bottom-4 flex flex-col justify-center items-center">
                <h3>{{ champion.name }}</h3>
                <h3>{{ champion.eng }}</h3>
            </div>
        </div>
    </div>
</template>
<style scoped>
</style>