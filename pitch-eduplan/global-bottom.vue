<script setup>
import { brand } from './config/brand'
import { useNav } from '@slidev/client'
const { currentPage, total } = useNav()
</script>

<template>
  <footer class="deck-footer" :class="{ 'footer-dark': currentPage === 1 || currentPage === total }">
    <span>{{ brand.name.toUpperCase() }} <span class="footer-divider">/</span> {{ brand.promise.toUpperCase() }}</span>
  </footer>
</template>

