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
    <!-- skin container -->
    <div class="w-48 md:w-72 h-36 md:h-48 flex group">
        <!-- cover -->
        <div class="w-full h-full relative rounded-lg" :style="bg_css">
            <!-- text -->
            <div class="w-full h-full md:text-xl text-white bg-[rgba(0,0,0,.5)] flex flex-col justify-center items-center rounded-lg p-2 opacity-0 group-hover:opacity-100 transition duration-500">
                <h2 class="text-center">{{ skin.name }}</h2>
                <h3 class="text-center">{{ skin.eng }}</h3>
            </div>
        </div>
    </div>
</template>
<style scoped>
</style>