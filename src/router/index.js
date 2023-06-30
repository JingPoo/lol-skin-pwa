import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
// import Aatrox from '@/views/Aatrox.vue'
// import Ahri from '@/views/Ahri.vue'
// import Caitlyn from '@/views/Caitlyn.vue'

const routes = [
    {path: '/', name: 'Home', component: Home},
    // {path: '/aatrox', name: 'aatrox', component: ()=>import('@/views/Aatrox.vue')},
    {
        path: '/champion/:id/:slug', 
        name: 'champion.show', 
        component: ()=>import('@/views/ChampionShow.vue'), 
        props: route => ({id: parseInt(route.params.id)}),
        children:[
            {
                path: ':skinSlug', 
                name: 'skin.show', 
                component: ()=>import('@/views/SkinShow.vue'), 
                props: route => ({id: parseInt(route.params.id), skinSlug: route.params.skinSlug}),
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router