<script setup lang="ts">
import { brand } from '../config/brand'
defineProps<{ variant?: 'full' | 'horizontal' | 'icon' }>()
</script>

<template>
  <span class="brand-mark" :class="'brand-mark--' + (variant || 'full')">
    <span class="brand-mark-image">
      <img :src="brand.logo" :alt="variant === 'horizontal' ? '' : brand.name">
    </span>
    <strong v-if="variant === 'horizontal'">{{ brand.name }}</strong>
  </span>
</template>
