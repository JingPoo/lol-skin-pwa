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
    height: 150px;
    display: flex;
}
.skin_container:hover .cover .text{
    opacity: 1;
}
.cover{
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: 10px;
}
.cover .text{
    opacity: 0;
    width: 100%;
    height: 100%;
    font-size: 12px;
    color: white;
    background-color: rgba(0,0,0,.5);
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    padding: 0px 10px;
}
.text h2,
.text h3{
    text-align: center;
}

/* For Small Device */
@media all and (min-width: 414px) and (max-width: 768px){
    
}
/* For Medium Device */  
@media all and (min-width: 768px) and (max-width: 992px){

}
/* For Large Device */  
@media all and (min-width: 992px){
    .skin_container{
        width: 200px;
        height: 150px;
        display: flex;
    }
    .skin_container:hover .cover .text{
        opacity: 1;
    }
    .cover{
        width: 100%;
        height: 100%;
        position: relative;
        border-radius: 10px;
    }
    .cover .text{
        opacity: 0;
        width: 100%;
        height: 100%;
        font-size: 12px;
        color: white;
        background-color: rgba(0,0,0,.5);
        position: absolute;
        top: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        padding: 0px 10px;
    }
    .text h2,
    .text h3{
        text-align: center;
    }
}
</style>