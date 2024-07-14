<script setup>
import { onMounted, computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'

import { useCartStore } from '@/stores/user/cart'

const cartStore = useCartStore()
const route = useRoute();

const layout = computed(() => route.meta.layout);

onMounted(() => {
  cartStore.loadCart()
})
</script>

<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>
