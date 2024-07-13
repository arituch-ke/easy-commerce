<script setup>
import { onMounted, ref, computed, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useRoute } from 'vue-router'

import ProductCard from '@/components/ProductCard.vue'

import { useProductStore } from '@/stores/user/product'
import { useCartStore } from '@/stores/user/cart'

const cartStore = useCartStore()
const productStore = useProductStore()
const router = useRouter()
const route = useRoute()

const search = ref('')

watch(() => route.query.q, (newSearch) => {
  search.value = newSearch
}, { immediate: true })

const filterProducts = computed(() => {
  return productStore.filterProducts(search.value)
})

const addToCart = (product) => {
  cartStore.addToCart(product)
  router.push({ name: 'cart' })
}
</script>
<template>
  <div>
    <div class="text-3xl m-4">Search: <b>{{ search }}</b></div>

    <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-4">
      <ProductCard v-for="product in filterProducts" :key="product.name" :product="product" :add-to-cart="addToCart" />
    </section>
  </div>
</template>