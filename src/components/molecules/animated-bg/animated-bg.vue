<template>
  <div class="background">
    <div class="background__stars"></div>
    <div class="background__stars2"></div>
    <div class="background__stars3"></div>
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>
<style scoped>
@import './animated-bg.css';
</style>
