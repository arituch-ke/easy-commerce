<script setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'

import UserLayout from '@/layouts/UserLayout.vue'

import { useCartStore } from '@/stores/user/cart'

const cartStore = useCartStore()

onMounted(() => {
  cartStore.loadCart()
})
</script>

<template>
  <UserLayout>
    <RouterView />
  </UserLayout>
</template>
