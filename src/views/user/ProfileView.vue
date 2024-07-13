<script setup>
import { ref, reactive, onMounted } from 'vue'

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
]

const imageUrl = ref('https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg')
const userFormData = reactive({
  email: '',
  name: '',
})

const handleFileUpload = (event) => {
  const [file] = event.target.files;

  if (file) {
    const reader = new FileReader();
    reader.onload = ({ target }) => {
      imageUrl.value = target.result;
    }
    reader.readAsDataURL(file);
  }
}

const updateProfile = () => {
  const profile = {
    ...userFormData,
    imageUrl: imageUrl.value,
  }
  localStorage.setItem('profile-data', JSON.stringify(profile))
}

onMounted(() => {
  const profileData = JSON.parse(localStorage.getItem('profile-data'))
  if (profileData) {
    imageUrl.value = profileData.imageUrl
    userFormData.email = profileData.email
    userFormData.name = profileData.name
  }
})
</script>
<template>
  <div class="max-w-2xl mx-auto border border-base-200 shadow-xl p-8 my-4">
    <div class="font-bold text-2xl">Your Profile</div>

    <div class="flex flex-col items-center">
      <div class="flex flex-col items-center">
        <div class="avatar">
          <div class="w-24 rounded-full">
            <img :src="imageUrl" />
          </div>
        </div>
        <div class="mt-4">
          <input type="file" @change="handleFileUpload"
            class="file-input file-input-bordered file-input-xs w-full max-w-xs" />
        </div>
      </div>
      <div v-for="form in formData" :key="form.name" class="form-control w-full">
        <div class="label">
          <span class="label-text">{{ form.name }}</span>
        </div>
        <input :type="form.type" v-model="userFormData[form.field]" :placeholder="form.name"
          class="input input-bordered" />
      </div>

      <button @click="updateProfile" class="btn btn-neutral w-full mt-4">Update Profile</button>
    </div>
  </div>
</template>