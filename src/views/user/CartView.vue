<script setup>
import { useCartStore } from '@/stores/user/cart'

const cartStore = useCartStore()

const changeQuantity = (index, quantity) => {
  if (quantity <= 0) return

  cartStore.updateQuantity(index, quantity)
}
</script>
<template>
  <div>
    <h1 class="text-3xl m-4 font-bold">Shopping Cart</h1>

    <div class="flex my-4">
      <div class="flex-auto w-64 bg-base-200 p-4">
        <div v-if="cartStore.items.length <= 0">
          Cart is empty
        </div>
        <div v-else v-for="(item, index) in cartStore.items" :key="item" class="flex">
          <div class="flex-auto py-10">
            <img :src="item.imageUrl" alt="product" class="w-full">
          </div>
          <div class="flex-auto p-10">
            <div class="flex flex-col justify-between h-full">
              <div class="relative grid grid-cols-2">
                <div>
                  <div>
                    <b>{{ item.name }}</b>
                  </div>
                  <div>{{ item.about }}</div>
                  <div>฿{{ item.price }}</div>
                </div>

                <div>
                  <div class="join">
                    <button :disabled="item.quantity <= 0 ? true : false"
                      @click="changeQuantity(index, item.quantity - 1)" class="btn btn-warning rounded">
                      <span class="material-symbols-outlined text-sm text-white">
                        remove
                      </span>
                    </button>
                    <input class="join-item w-10 text-center" disabled v-model="item.quantity">
                    <button @click="changeQuantity(index, item.quantity + 1)" class="btn btn-warning rounded">
                      <span class="material-symbols-outlined text-sm text-white">
                        add
                      </span>
                    </button>
                  </div>
                </div>

                <button @click="cartStore.removeItemInCart(index)" class="absolute top-0 right-0">
                  <span class="material-symbols-outlined">
                    close
                  </span>
                </button>
              </div>

              <div>
                <b>In Stock</b>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-auto w-32 bg-slate-200 p-4">
        <div class="text-xl font-bold">Order Summary</div>
        <div class="my-4 divide-y divide-black">
          <div class="flex justify-between py-2">
            <div>ราคาสินค้าทั้งหมด</div>
            <div>฿{{ cartStore.summaryPrice }}</div>
          </div>
          <div class="flex justify-between py-2">
            <div>ค่าส่ง</div>
            <div>฿0</div>
          </div>
          <div class="flex justify-between py-2">
            <div>ราคารวมทั้งหมด</div>
            <div>฿{{ cartStore.summaryPrice }}</div>
          </div>
          <div>
            <RouterLink :to="{ name: 'checkout' }" class="rounded btn btn-neutral w-full mt-4"
              v-if="cartStore.items.length > 0">
              ชำระเงิน
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>