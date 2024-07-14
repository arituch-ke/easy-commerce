<script setup>
import FooterComponent from '@/components/FooterComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
</script>
<template>
  <div class="container mx-auto h-screen p-4 flex items-center">
    <!-- Main content -->
    <slot />
  </div>
</template>