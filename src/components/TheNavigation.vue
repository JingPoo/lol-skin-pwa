<script setup>
import { ref, computed } from 'vue'
import sourceData from '@/data.json'
const champions = sourceData.champions
const roles = ref([
  {id: 1, text:'刺客'},
  {id: 2, text:'鬥士'},
  {id: 3, text:'法師'},
  {id: 4, text:'射手'},
  {id: 5, text:'輔助'},
  {id: 6, text:'坦克'}
])
</script>
<template>
    <div class="nav-container">
        <router-link id="logo" to="/">Home</router-link>
        <ul class="outer-ul">
            <li v-for="role in roles" :key="role.id">
                <a href="javascript:;">{{ role.text }}</a>
                <ul class="inner-ul">
                    <router-link 
                    v-for="champion in champions.filter((champion)=>champion.role === role.text)" 
                    :key="champion.id"
                    :to="{name: 'champion.show', params: {id: champion.id, slug: champion.eng}}"
                    :champion="champion">
                        {{ champion.name }}
                    </router-link>
                </ul>
                
            </li>
                
        </ul>
        <!-- <router-link 
        v-for="champion in champions" 
        :key="champion.id"
        :to="{name: 'champion.show', params: {id: champion.id, slug: champion.eng}}"
        :champion="champion">
            {{ champion.name }}
        </router-link> -->
    </div>
</template>
<style scoped>
.nav-container{
  width: 100%;
  min-width: 300px;
  height: 50px;
  background-color: var(--main-color);
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 5px;
  box-shadow: 0px 0px 5px black;
  z-index: 999;
}
.outer-ul{ 
    width: 240px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    margin-left: 2px;
}
.outer-ul > li{
    width: 40px;
    height: 100%;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;
}
.outer-ul > li > a{
    width: 100%;
    height: 100%;
    line-height: 50px;
    text-align: center;
}
.outer-ul > li:hover .inner-ul > a{
    display: block;
}
.inner-ul{
    width: auto;
    height: auto;
    background-color: var(--second-color);
    position: absolute;
    top: 100%;
    left: -15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 0px 0px 5px 5px;
    box-shadow: 0px 0px 2px var(--main-color);
}
.inner-ul > a{
    width: 60px;
    height: 100%;
    padding: 0px 5px;
    line-height: 50px;
    text-align: center;
    display: none;
}

.nav-container a{
    text-decoration: none;
    color: #fff;
    font-size: 14px;
}
.nav-container a:hover{
    color: var(--complement-color);
}
.nav-container a.router-link-active,
.nav-container a.router-link-exact-active{
    font-weight: bolder;
    color: var(--complement-color);
}
#logo{
    font-size: 20px;
}

/* For Small Device */
@media all and (min-width: 414px) and (max-width: 768px){
    .nav-container{
        justify-content: center;
    }
    .nav-container a{
        font-size: 16px;
    }
    .outer-ul{ 
        width: 300px;
        margin-left: 10px;
    }
    .outer-ul > li{
        width: 50px;
    }
    .inner-ul > a{
        width: 80px;
    }
    #logo{
        font-size: 22px;
    }
}
/* For Medium Device */  
@media all and (min-width: 768px) and (max-width: 992px){
    .nav-container{
        justify-content: center;
    }
    .nav-container a{
        font-size: 18px;
    }
    .outer-ul{ 
        width: 360px;
        margin-left: 40px;
    }
    .outer-ul > li{
        width: 60px;
    }
    .inner-ul > a{
        width: 90px;
    }
    #logo{
        font-size: 26px;
    }
}
/* For Large Device */  
@media all and (min-width: 992px){
    .nav-container{
        justify-content: center;
    }
    .nav-container a{
        font-size: 18px;
    }
    .outer-ul{ 
        width: 360px;
        margin-left: 40px;
    }
    .outer-ul > li{
        width: 60px;
    }
    .inner-ul{
        flex-direction: row;
    }
    .inner-ul > a{
        width: 90px;
    }
    #logo{
        font-size: 26px;
    }
}
</style>