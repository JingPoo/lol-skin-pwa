import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import ChampionShow from '@/views/ChampionShow.vue'
import SkinShow from '@/views/SkinShow.vue'
import NotFound from '@/views/NotFound.vue'
import sourceData from '@/data.json'

const routes = [
    {
        path: '/', 
        redirect: { name: 'Home' },
    },
    {
        path: '/vue-lol-skins/', 
        name: 'Home', 
        component: Home, 
        alias: '/home',
    },
    {
        path: '/vue-lol-skins/champion/:id/:slug', 
        name: 'champion.show', 
        component: ChampionShow, 
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
                component: SkinShow, 
                props: route => ({id: parseInt(route.params.id), skinSlug: route.params.skinSlug}),
            }
        ]
    },
    {
        path: '/vue-lol-skins/:pathMatch(.*)*', name: 'NotFound', component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router