<script setup>
import { reactive } from 'vue'
import { RouterLink } from 'vue-router'
import { useCartStore } from '@/stores/user/cart'

const formData = [
  {
    name: 'Email Address',
    field: 'email',
    type: 'email',
  },
  {
    name: 'Name',
    field: 'name',
    type: 'text',
  },
  {
    name: "Address",
    field: 'address',
    type: 'textarea',
  },
  {
    name: 'Note',
    field: 'note',
    type: 'text',
  }
]

const cartStore = useCartStore()

const userFormData = reactive({
  email: '',
  name: '',
  address: '',
  note: '',
})

const payment = () => {
  console.log(userFormData)
}

</script>
<template>
  <div>
    <h1 class="text-3xl m-4 font-bold">Checkout</h1>

    <div class="flex">
      <section class="flex-auto w-64 bg-base-200 p-8">
        <label v-for="form in formData" :key="form.name" class="form-control w-full">
          <div class="label">
            <span class="label-text">{{ form.name }}</span>
          </div>
          <input v-if="form.type !== 'textarea'" :type="form.type" v-model="userFormData[form.field]"
            placeholder="Type here" class="input input-bordered w-full" />
          <textarea v-else class="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
        </label>
        <button @click="payment" class="btn btn-neutral w-full mt-4">ชำระเงิน</button>
      </section>
      <section class="flex-auto w-32 bg-slate-200 px-2">
        <div v-for="item in cartStore.items" :key="item.name" class="flex bg-white m-8 py-4">
          <div class="flex-1">
            <img :src="item.imageUrl" alt="product" class="w-full p-8">
          </div>
          <div class="flex-1">
            <div class="flex flex-col justify-between h-full">
              <div>
                <div class="font-bold">{{ item.name }}</div>
                <div>จำนวน {{ item.quantity }}</div>
              </div>
              <RouterLink :to="{ name: 'cart' }">Edit</RouterLink>
            </div>
          </div>
        </div>
        <div class="divider"></div>
        <div class="p-4">
          <div class="font-bold">Order Summary</div>
          <div class="flex justify-between">
            <div>ค่าส่ง</div>
            <div>฿0</div>
          </div>
          <div class="flex justify-between">
            <div>ราคาทั้งหมด</div>
            <div>฿{{ cartStore.summaryPrice }}</div>
          </div>
        </div>
        <div class="divider"></div>
      </section>
    </div>
  </div>
</template>