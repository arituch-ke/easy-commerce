<script setup>
import { ref, onMounted } from 'vue'
import { useCartStore } from '@/stores/user/cart'

const cartStore = useCartStore()

const order = ref({})

onMounted(() => {
  cartStore.loadCheckout()
  if (cartStore.checkout.orderNumber) {
    order.value = cartStore.checkout
  }
})
</script>
<template>
  <div class="max-w-2xl mx-auto border border-base-200 shadow-xl p-8 my-4">
    <div>
      <div class="text-2xl font-bold">Your order is successful!</div>
      <div>Hi {{ order.name }}</div>
      <div>เตรียมรอรับสินค้าได้เลย</div>
    </div>
    <div class="divider"></div>
    <div class="grid grid-cols-4 gap-2">
      <div>
        <div class="font-bold">Order date</div>
        <div>{{ order.createdDate }}</div>
      </div>
      <div>
        <div class="font-bold">Order number</div>
        <div>{{ order.orderNumber }}</div>
      </div>
      <div>
        <div class="font-bold">Payment method</div>
        <div>{{ order.paymentMethod }}</div>
      </div>
      <div>
        <div class="font-bold">Address</div>
        <div>{{ order.address }}</div>
      </div>
    </div>
    <div class="divider"></div>
    <div v-for="product in order.products" :key="product.name" class="grid grid-cols-4 gap-2 items-center py-4">
      <div>
        <img :src="product.imageUrl" class="w-full object-cover" />
      </div>
      <div>
        <div class="font-bold">{{ product.name }}</div>
      </div>
      <div>
        จำนวน: {{ product.quantity }}
      </div>
      <div>
        ราคารวม: {{ product.price * product.quantity }}
      </div>
    </div>
    <div class="divider"></div>
    <div class="flex justify-between">
      <div class="font-bold">ราคาสินค้าทั้งหมด</div>
      <div>{{ order.totalPrice }}</div>
    </div>
    <div class="flex justify-between mt-4">
      <div class="font-bold">ค่าส่ง</div>
      <div>0</div>
    </div>
    <div class="divider"></div>
    <div class="flex justify-between">
      <div class="font-bold">ราคาทั้งสิ้น</div>
      <div>{{ order.totalPrice }}</div>
    </div>
    <div class="divider"></div>
    <div>ขอบคุณที่มาซื้อของเรา</div>
  </div>
</template>