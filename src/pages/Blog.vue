<template>
    <div class="p-6">
        <h1 class="text-2xl font-bold mb-4">Blog Teknologi</h1>

        <div v-if="loading">Loading...</div>
        <div v-else>
            <ul v-if="posts.length" class="space-y-6">
                <li v-for="post in posts" :key="post.id" class="flex gap-4 border p-4 rounded shadow hover:bg-gray-50">
                    <img :src="post.coverImage" alt="cover" class="w-32 h-20 object-cover rounded" />
                    <div class="flex flex-col justify-between">
                        <router-link :to="`/blog/${post.id}`"
                            class="text-lg font-semibold text-blue-600 hover:underline">
                            {{ post.title }}
                        </router-link>
                        <p class="text-gray-600 text-sm">
                            Ditulis oleh {{ post.author.name }} • {{ formatDate(post.createdAt) }}
                        </p>
                    </div>
                </li>
            </ul>

            <p v-else class="text-gray-500">Belum ada postingan blog.</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import api from '../services/api'

interface BlogPost {
    id: number
    title: string
    content: string
    coverImage: string
    createdAt: string
    author: {
        id: number
        name: string
        email: string
    }
}

const posts = ref<BlogPost[]>([])
const loading = ref(true)

function formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('id-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
}

onMounted(async () => {
    try {
        const res = await api.get('/blogs')
        posts.value = res.data.data
    } catch (err: any) {
        console.error('Gagal mengambil blog:', err)
    } finally {
        loading.value = false
    }
})
</script>
  
