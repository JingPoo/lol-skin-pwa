<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
</script>
<template>
    <span class="go-back">
        <button @click="router.back()"><i class="fa-solid fa-rotate-left"></i></button>
    </span>
</template>
<style scoped>
button{
    width: 40px;
    font-size: 24px;
    border: none;
    color: #aaa;
    background-color: rgba(255,255,255,0);
    cursor: pointer;
}
button:hover{
    color: rgb(215, 109, 109);
}
</style>