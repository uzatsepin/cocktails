import { createRouter, createWebHistory } from 'vue-router'
import Cocktail from '../pages/Cocktail.vue'
import CocktailRandom from '../pages/CocktailRandom.vue'
import Home from '../pages/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/cocktails/:rid',
      name: 'cocktail',
      component: Cocktail,
    },
    {
      path: '/random',
      name: 'home',
      component: CocktailRandom,
    },
  ],
})

export default router
