<script setup>
import { Back } from '@element-plus/icons-vue'
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ROUTES_PATH } from '../constants'
const props = defineProps({
  imgUrl: {
    type: String,
    required: true,
  },
  backFunc: {
    type: Function,
  },
  isBackButtonVisible: {
    type: Boolean,
    default: true,
  },
})
const route = useRoute()
const router = useRouter()

const routeName = computed(() => route.name)

function goForCocktailRandom() {
  router.push(ROUTES_PATH.COCKTAIL_RANDOM)
  if (routeName.value === ROUTES_PATH.COCKTAIL_RANDOM) {
    router.go()
  }
}

function goBack() {
  props.backFunc ? props.backFunc() : router.go(-1)
}
</script>

<template>
  <div class="root">
    <div
      class="img"
      :style="`background-image: url(${imgUrl})`"
    ></div>
    <div class="main">
      <div class="btns">
        <el-button
          v-if="isBackButtonVisible"
          type="primary"
          :icon="Back"
          circle
          class="back"
          @click="goBack"
        />
        <el-button
          class="btn"
          @click="goForCocktailRandom"
          >Get Random Cocktail</el-button
        >
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main.sass'
.root
    display: flex
    background-color: $background
    min-height: 100vh

.img
  width: 50%
  background-repeat: no-repeat
  background-position: 50% 50%
  background-size: cover

.main
    position: relative
    width: 50%
    padding: 32px 40px
.btn
    position: absolute
    top: 32px
    right: 40px
    background: $accent
    border-color: $accent
    color: $text
    font-size: 16px
    &:hover
        background-color: darken($accent, 10%)
    &:active
        background-color: darken($accent, 10%)
.btns
    display: flex
    align-items: center
    justify-content: space-between

.back
    background-color: transparent
    border-color: #fff
    transition: all 250ms ease-out
    &:hover
        border-color: $accent
</style>
