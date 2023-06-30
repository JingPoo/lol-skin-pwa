<script setup>
const props = defineProps({
    champion: Object
})
</script>
<template>
    <h1>Aatrox</h1>
    <h2>{{ champion }}</h2>
    <!-- <img :src="skin.cover" v-for="(skin, index) in champion.name" :key="index"> -->
</template>