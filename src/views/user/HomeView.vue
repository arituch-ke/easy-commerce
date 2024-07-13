<script setup>
import { useRouter } from 'vue-router'

import ProductCard from '@/components/ProductCard.vue'
import HeroComponent from '@/components/HeroComponent.vue'

import { useProductStore } from '@/stores/user/product'
import { useCartStore } from '@/stores/user/cart'

const productStore = useProductStore()
const cartStore = useCartStore()
const router = useRouter()

const addToCart = (product) => {
  cartStore.addToCart(product)
  router.push({ name: 'cart' })
}
</script>
<template>
  <div>
    <!-- Hero Content -->
    <HeroComponent title="Hello to NC Shop" description="Trust your intuition." />

    <!-- Products shelf -->
    <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-4">
      <ProductCard v-for="product in productStore.list" :key="product.name" :product="product"
        :add-to-cart="addToCart" />
    </section>
  </div>
</template>
