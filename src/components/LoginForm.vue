<template>
    <form @submit.prevent="handleLogin" class="space-y-4">
        <div>
            <label>Email</label>
            <input type="email" v-model="email" class="border w-full p-2" required />
        </div>
        <div>
            <label>Password</label>
            <input type="password" v-model="password" class="border w-full p-2" required />
        </div>
        <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded">Login</button>
        <p v-if="error" class="text-red-500 mt-2">{{ error }}</p>
    </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import api from '../services/api'

const email = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

const handleLogin = async () => {
    try {
        const response = await api.post('/auth/login', {
            email: email.value,
            password: password.value,
        })
        localStorage.setItem('token', response.data.access_token)
        router.push('/') // redirect to home or dashboard
    } catch (err: any) {
        error.value = err.response?.data?.message || 'Login failed'
    }
}
</script>
  
