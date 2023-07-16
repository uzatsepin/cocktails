<script setup>
import axios from 'axios'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { computed, ref } from 'vue'
import AppLayout from '../components/AppLayout.vue'
import { COCKTAIL_RANDOM, INGREDIENT_IMAGE_URL } from '../constants'

const cocktail = ref(null)

const ingredients = computed(() => {
  const ingredients = []
  for (let i = 1; i <= 15; i++) {
    if (!cocktail.value[`strIngredient${i}`]) break

    const ingredient = cocktail.value[`strIngredient${i}`]

    ingredients.push(ingredient)
  }
  return ingredients
})

async function getCocktail() {
  const data = await axios.get(`${COCKTAIL_RANDOM}`)
  cocktail.value = data?.data?.drinks[0]
}

getCocktail()
</script>

<template>
  <div
    v-if="cocktail"
    class="wrap"
  >
    <AppLayout :imgUrl="`${cocktail.strDrinkThumb}`">
      <div class="wrapper">
        <div class="info">
          <div class="title">{{ cocktail.strDrink }}</div>
          <div class="line"></div>
          <div class="slider">
            <Swiper
              :slidesPerView="3"
              :spaceBetween="50"
              class="swiper"
            >
              <SwiperSlide
                v-for="(ingredient, key) in ingredients"
                :key="key"
              >
                <img
                  :src="`${INGREDIENT_IMAGE_URL}${ingredient}-Small.png`"
                  alt=""
                />
                <div class="name">
                  {{ ingredient }}
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div class="instructions">
            {{ cocktail.strInstructions }}
          </div>
        </div>
      </div>
    </AppLayout>
  </div>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main.sass'
.slider
    margin: 50px 0

.swiper
    max-width: 586px
    margin: 0 auto
.name
    margin-top: 20px
</style>
