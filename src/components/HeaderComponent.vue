<script setup>
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

import { useCartStore } from '@/stores/user/cart'

const cartStore = useCartStore()
const router = useRouter();

const isLogged = ref(false);
const search = ref('');

const login = () => {
  isLogged.value = true;
  localStorage.setItem('isLoggedIn', true);
}

const logout = () => {
  isLogged.value = false;
  localStorage.removeItem('isLoggedIn');
  localStorage.removeItem('cart-data');
  localStorage.removeItem('order-data');
  localStorage.removeItem('profile-data');
  window.location.reload();
}

const handleSearch = (event) => {
  if (event.key === 'Enter') {
    router.push({ name: 'search', query: { q: search.value } });
  }
}
</script>
<template>
  <div class="navbar bg-base-100 sticky top-0 z-50">
    <div class="flex-1">
      <RouterLink :to="{ name: 'home' }" class="btn btn-ghost text-xl font-bold">
        <span class="material-symbols-outlined text-4xl text-orange-500">
          shopping_bag
        </span>
        NC Shop
      </RouterLink>
    </div>
    <div class="flex-none">
      <div class="form-control">
        <input type="text" placeholder="Search" class="input input-bordered input-sm w-24 md:w-auto" v-model="search"
          @keyup="handleSearch" />
      </div>
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle mx-2">
          <div class="indicator">
            <span class="material-symbols-outlined">
              shopping_cart
            </span>
            <span class="badge badge-sm badge-error text-white indicator-item">{{ cartStore.summaryQuantity }}</span>
          </div>
        </div>
        <div tabindex="0" class="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
          <div class="card-body">
            <span class="text-lg font-bold">{{ cartStore.summaryQuantity }} Items</span>
            <span class="text-info">Total: ฿{{ cartStore.summaryPrice }}</span>
            <div class="card-actions">
              <RouterLink :to="{ name: 'cart' }" class="btn btn-primary btn-block">View cart</RouterLink>
            </div>
          </div>
        </div>
      </div>
      <button v-if="!isLogged" @click="login" class="btn btn-ghost">Login</button>
      <div v-else class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li>
            <RouterLink :to="{ name: 'profile' }" class="justify-between">
              Profile
            </RouterLink>
          </li>
          <li><a @click="logout">Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>