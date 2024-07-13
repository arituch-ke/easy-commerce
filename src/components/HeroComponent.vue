<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  title: String,
  description: String,
})
</script>
<template>
  <div class="hero bg-base-200 h-96">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">{{ props.title }}</h1>
        <p class="py-6">
          {{ props.description }}
        </p>
      </div>
    </div>
  </div>
</template>