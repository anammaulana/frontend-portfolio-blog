<template>
    <form @submit.prevent="handleRegister" class="space-y-4">
        <div>
            <label>Full Name</label>
            <input v-model="name" class="border w-full p-2" required />
        </div>
        <div>
            <label>Email</label>
            <input type="email" v-model="email" class="border w-full p-2" required />
        </div>
        <div>
            <label>Password</label>
            <input type="password" v-model="password" class="border w-full p-2" required />
        </div>
        <button type="submit" class="bg-green-600 text-white px-4 py-2 rounded">Register</button>
        <p v-if="error" class="text-red-500 mt-2">{{ error }}</p>
    </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import api from '../services/api'

const name = ref('')
const email = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

const handleRegister = async () => {
    try {
        await api.post('/auth/register', {
            name: name.value,
            email: email.value,
            password: password.value,
        })
        router.push('/login')
    } catch (err: any) {
        error.value = err.response?.data?.message || 'Register failed'
    }
}
</script>
  
