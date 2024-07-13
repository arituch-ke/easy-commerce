<script setup>
import FooterComponent from '@/components/FooterComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
</script>
<template>
  <div class="container mx-auto">
    <!-- Navbar content -->
    <HeaderComponent />
    <!-- Main content -->
    <slot />
    <!-- Footer content -->
    <FooterComponent />
  </div>
</template>