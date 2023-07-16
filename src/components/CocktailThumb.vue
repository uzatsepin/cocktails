<script setup>
const props = defineProps({
  cocktail: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="root">
    <RouterLink :to="`/cocktails/${cocktail.idDrink}`">
      <img
        :src="cocktail.strDrinkThumb"
        alt=""
        class="pic"
      />
    </RouterLink>
    <div class="name">{{ cocktail.strDrink }}</div>
  </div>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main.sass'

.root
    width: calc((100% - 76px)/3)
    margin-right: 38px
    padding-bottom: 20px
    &:nth-child(3n + 3)
        margin-right: 0

.name
    padding-top: 15px
    letter-spacing: 0.1em
    width: 100%
    white-space: nowrap
    overflow: hidden
    text-overflow: ellipsis

.pic
    width: 120px
    margin: 0 auto
    height: 120px
    background-repeat: no-repeat
    background-position: 50% 50%
    background-size: 100%
</style>
