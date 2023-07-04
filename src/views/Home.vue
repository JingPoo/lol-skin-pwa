<script setup>
import { ref, computed } from 'vue'
import Champion from '/src/components/Champion.vue'
import sourceData from '@/data.json'

const champions = sourceData.champions
const roles = ref([
  {id: 1, text:'全部'},
  {id: 2, text:'刺客'},
  {id: 3, text:'鬥士'},
  {id: 4, text:'法師'},
  {id: 5, text:'射手'},
  {id: 6, text:'輔助'},
  {id: 7, text:'坦克'}
])
const selectRole = ref('全部')
const query = ref('')
const queryChampions = computed(()=>{
  return champions.filter((champion)=>{
    if(selectRole.value === '全部'){
      return (champion.eng.toLowerCase().includes(query.value.toLowerCase()) || champion.name.includes(query.value))
    }
    else{
      return (champion.role ===  selectRole.value) && 
    (champion.eng.toLowerCase().includes(query.value.toLowerCase()) || champion.name.includes(query.value))
    }
  })
})
</script>

<template>
  <!-- 造型價格、英雄排序搜尋、影片內嵌、擁有英雄及造型 -->
  <div class="container">
    <div class="top-bar">
      <div class="search-box" >
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="text" v-model="query" placeholder="英雄搜尋">
      </div>
      <div class="role-box">
        <button v-for="role in roles" 
          :key="role.id" 
          @click="selectRole = role.text"
          :class="{active: selectRole === role.text}">
          {{ role.text }}
        </button>
      </div>
    </div>
    <div class="champion-list">
      <router-link 
        v-for="champion in queryChampions" 
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
.top-bar{
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
}
.search-box{
  width: 100%;
  height: 40px;
  padding: 4px 8px;
  border: 2px solid #aaa;
  border-radius: 10px 10px 0px 0px;
}
.search-box:hover i{
  color: var(--second-color);
}
.search-box > i{
  width: 20px;
  font-size: 20px;
  color: #aaa;
  /* background-color: black; */
}
.search-box > input{
  width: calc(100% - 24px);
  font-size: 20px;
  font-weight: bolder;
  padding: 2px 4px;
  margin-left: 4px;
  /* background-color: red; */
  border: none;
  outline: none;
}
.role-box{
  width: 100%;
  height: 40px;
  background-color: #dee5ec;
  border: 2px solid #aaa;
  border-top: none;
  border-bottom: none;
  display: flex;
  justify-content: center;
  align-items: center;
}
.role-box button{
  width: calc(100% / 7);
  height: 100%;
  font-size: 16px;
  color: #aaa;
  background-color: rgba(255,255,255,0);
  border: none;
  cursor: pointer;
}
.role-box button:hover{
  color: rgb(105, 104, 104);
  font-weight: bolder;
}
.role-box button.active{
  position: relative;
  top: 1px;
  height: 41px;
  color: rgb(105, 104, 104);
  background-color: #fff;
  font-weight: bolder;
}
.champion-list{
  width: 100%;
  height: 100%;
  border: 2px solid #aaa;
  padding: 10px 20px 20px;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(2, 1fr);
}
.champion-list > a{
  margin: auto;
}

  /* For Small Device */
  @media all and (min-width: 414px) and (max-width: 768px){

  }
  /* For Medium Device */  
  @media all and (min-width: 768px) and (max-width: 992px){

  }
  /* For Large Device */  
  @media all and (min-width: 992px){
    .container{
      width: 100%;
      padding: 10px 20px;
    }
    .top-bar{
      width: 100%;
      height: 40px;
      display: flex;
      flex-direction: row;
    }
    .search-box{
      width: 250px;
      height: 40px;
      padding: 4px 8px;
      border: 2px solid #aaa;
      border-bottom: none;
      border-radius: 10px 0px 0px;
    }
    .search-box:hover i{
      color: var(--second-color);
    }
    .search-box > i{
      width: 20px;
      font-size: 20px;
      color: #aaa;
      /* background-color: black; */
    }
    .search-box > input{
      width: calc(100% - 24px);
      font-size: 20px;
      font-weight: bolder;
      padding: 2px 4px;
      margin-left: 4px;
      /* background-color: red; */
      border: none;
      outline: none;
    }
    .role-box{
      width: calc(100% - 250px);
      height: 40px;
      background-color: #dee5ec;
      border: 2px solid #aaa;
      border-left: none;
      border-bottom: none;
      border-radius: 0px 10px 0px 0px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .role-box button{
      width: 70px;
      height: 100%;
      font-size: 16px;
      color: #aaa;
      background-color: rgba(255,255,255,0);
      border: none;
      cursor: pointer;
    }
    .role-box button:hover{
      color: rgb(105, 104, 104);
      font-weight: bolder;
    }
    .role-box button.active{
      position: relative;
      top: 1px;
      height: 40px;
      color: rgb(105, 104, 104);
      background-color: #fff;
      font-weight: bolder;
    }
    .champion-list{
      width: 100%;
      height: 100%;
      border: 2px solid #aaa;
      padding: 10px 20px;
      display: grid;
      grid-template-columns: repeat(5, 1fr);
    }
  }
</style>
