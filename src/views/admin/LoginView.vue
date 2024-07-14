<script setup>
import { ref, reactive } from 'vue'

const formData = [
  {
    name: 'Email Address',
    icon: 'person',
    field: 'email',
    type: 'email',
  },
  {
    name: 'Password',
    icon: 'lock',
    field: 'password',
    type: 'password',
  },
]

const credentialFormData = reactive({
  email: '',
  password: '',
})

const login = () => {
  console.log(credentialFormData)
}

</script>
<template>
  <div class="max-w-3xl shadow-xl mx-auto p-8 w-1/3">
    <div class="font-bold text-2xl flex justify-center">
      <span class="material-symbols-outlined text-4xl text-orange-500">
        shopping_bag
      </span>
      <div class="flex items-center">
        NC Shop
      </div>
    </div>

    <div class="flex flex-col items-center">
      <label v-for="form in formData" :key="form.name"
        class="input rounded input-bordered flex items-center gap-2 w-full my-3">
        <span class="material-symbols-outlined">
          {{ form.icon }}
        </span>
        <input :type="form.type" v-model="credentialFormData[form.field]" :placeholder="form.name" />
      </label>
      <button @click="login" class="btn btn-neutral w-full rounded">Login</button>
    </div>
  </div>
</template>