<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  product: Object,
  addToCart: Function
})
</script>
<template>
  <div class="card bg-base-100 w-full shadow-xl">
    <figure>
      <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ props.product.name }}</h2>
      <p>{{ props.product.about }}</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary" @click="addToCart(product)">Buy Now</button>
      </div>
    </div>
  </div>
</template>