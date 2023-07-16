<script setup>
import { storeToRefs } from 'pinia'
import AppLayout from '../components/AppLayout.vue'
import CocktailThumb from '../components/CocktailThumb.vue'
import { useRootStore } from '../stores/root'

const rootStore = useRootStore()
rootStore.getIngredients()

const { ingredients, cocktails, ingredient } = storeToRefs(rootStore)

function getCocktails() {
  rootStore.getCocktails(rootStore.ingredient)
}

function removeIngredient() {
  rootStore.setIngredient(null)
}
</script>

<template>
  <AppLayout imgUrl="/src/assets/img/cocktail.avif"
             :back-func="removeIngredient"
             :is-back-button-visible="!!ingredient">
    <div class="wrapper">
      <div v-if="!ingredient || !cocktails"
           class="info">
        <div class="title">Choose your drink</div>
        <div class="line"></div>
        <div class="select-wrapper">
          <el-select v-model="rootStore.ingredient"
                     placeholder="Choose main ingredient"
                     size="large"
                     class="select"
                     filterable
                     allow-create
                     @change="getCocktails">
            <el-option v-for="item in ingredients"
                       :key="item.strIngredient1"
                       :label="item.strIngredient1"
                       :value="item.strIngredient1" />
          </el-select>
        </div>
        <div class="text">
          Try our delicious cocktail recipes for every occasion. Find delicious
          cocktail recipes by ingredient through our cocktail generator.
        </div>
        <img src="/src/assets/img/cocktails.png"
             alt="cocktails"
             class="img" />
      </div>
      <div v-else
           class="info">
        <div class="title">Cocktails with {{ ingredient }}</div>
        <div class="line"></div>
        <div class="cocktails">
          <CocktailThumb v-for="cocktail in cocktails"
                         :key="cocktail.idDrink"
                         :cocktail="cocktail" />
        </div>
      </div>
    </div>
  </AppLayout>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main.sass'

.select-wrapper
  padding-top: 50px

.select
  width: 220px

.text
  line-height: 36px
  letter-spacing: 0.1em
  max-width: 516px
  color: $textMuted
  margin: 50px auto 0
.img
  margin-top: 60px

.cocktails
    display: flex
    align-items: center
    margin-top: 60px
    flex-wrap: wrap
    max-height: 400px
    overflow-y: auto
</style>
