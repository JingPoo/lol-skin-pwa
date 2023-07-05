import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import sourceData from '@/data.json'
// import Aatrox from '@/views/Aatrox.vue'
// import Ahri from '@/views/Ahri.vue'
// import Caitlyn from '@/views/Caitlyn.vue'

const routes = [
    {path: '/vue-lol-skins/', name: 'Home', component: Home, alias: '/home'},
    // {path: '/aatrox', name: 'aatrox', component: ()=>import('@/views/Aatrox.vue')},
    {
        path: '/vue-lol-skins/champion/:id/:slug', 
        name: 'champion.show', 
        component: ()=>import('@/views/ChampionShow.vue'), 
        props: route => ({id: parseInt(route.params.id)}),
        beforeEnter(to, from){
            const exists = sourceData.champions.find(
                champion => champion.id === parseInt(to.params.id)
            )
            if(!exists) return {
                name: 'NotFound',
                params: { pathMatch: to.path.split('/').slice(1)},
                query: to.query,
                hash: to.hash,
            }
        },
        children:[
            {
                path: ':skinSlug', 
                name: 'skin.show', 
                component: ()=>import('@/views/SkinShow.vue'), 
                props: route => ({id: parseInt(route.params.id), skinSlug: route.params.skinSlug}),
            }
        ]
    },
    {
        path: '/vue-lol-skins/:pathMatch(.*)*', name: 'NotFound', component: ()=>import('@/views/NotFound.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router