import { createRouter, createWebHistory } from 'vue-router'
import { ROUTES_PATH } from '../constants'
import Cocktail from '../pages/Cocktail.vue'
import CocktailRandom from '../pages/CocktailRandom.vue'
import Home from '../pages/Home.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTES_PATH.HOME,
      name: ROUTES_PATH.HOME,
      component: Home,
    },
    {
      path: ROUTES_PATH.COCKTAIL,
      name: ROUTES_PATH.COCKTAIL,
      name: 'cocktail',
      component: Cocktail,
    },
    {
      path: ROUTES_PATH.COCKTAIL_RANDOM,
      name: ROUTES_PATH.COCKTAIL_RANDOM,
      name: 'home',
      component: CocktailRandom,
    },
  ],
})

export default router
