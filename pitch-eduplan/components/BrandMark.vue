<script setup lang="ts">
import { brand } from '../config/brand'

withDefaults(defineProps<{ variant?: 'full' | 'horizontal' | 'icon' }>(), { variant: 'full' })
</script>

<template>
  <span class="brand-mark" :class="'brand-mark--' + variant">
    <img :src="brand.logo" :alt="variant === 'icon' ? brand.name : ''">
    <strong v-if="variant !== 'icon'" class="brand-wordmark">Stu<span>Plan</span></strong>
    <span v-if="variant === 'full'" class="brand-tagline">Tu plan, tu educación</span>
  </span>
</template>
