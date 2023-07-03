<script setup>
// import { ref } from 'vue'
import Champion from '/src/components/Champion.vue'
import sourceData from '@/data.json'

const champions = sourceData.champions
</script>

<template>
  <!-- 造型價格、英雄排序搜尋、影片內嵌、擁有英雄及造型 -->
  <div class="container">
    <div class="champion_list">
      <router-link 
        v-for="champion in champions" 
        :key="champion.id"
        :to="{name: 'champion.show', params: {id: champion.id, slug: champion.eng}}">
        <Champion :champion="champion" :child="champion.skins"></Champion>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
*{
  padding: 0;
  margin: 0;
}
.container{
  width: 100%;
  padding: 10px 20px;
}
.champion_list{
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  padding: 10px 20px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}
</style>
