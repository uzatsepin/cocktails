<script setup>
const props = defineProps({
    imgUrl: {
        type: String,
        required: true,
    },
})
</script>

<template>
    <div class="root">
        <div class="img" :style="`background-image: url(${imgUrl})`"></div>
        <div class="main">
            <el-button class="btn">Get Random Cocktail</el-button>
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

</style>
