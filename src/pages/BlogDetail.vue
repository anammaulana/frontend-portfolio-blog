<template>
    <div class="max-w-4xl mx-auto p-6">
        <div v-if="loading">Loading...</div>

        <div v-else-if="post">
            <img :src="post.coverImage" class="w-full h-64 object-cover rounded mb-6" alt="cover image" />
            <h1 class="text-3xl font-bold mb-2">{{ post.title }}</h1>
            <p class="text-gray-600 mb-4">
                Ditulis oleh <strong>{{ post.author.name }}</strong> • {{ formatDate(post.createdAt) }}
            </p>
            <div class="prose max-w-none" v-html="post.content"></div>
        </div>

        <p v-else class="text-gray-500">Postingan tidak ditemukan.</p>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
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

const route = useRoute()
const post = ref<BlogPost | null>(null)
const loading = ref(true)

function formatDate(date: string): string {
    return new Date(date).toLocaleDateString('id-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
}

onMounted(async () => {
    try {
        const id = route.params.id
        const res = await api.get(`/blogs/${id}`)
        post.value = res.data.data
    } catch (err) {
        console.error('Gagal memuat detail blog:', err)
    } finally {
        loading.value = false
    }
})
</script>

<style scoped>
.prose {
    white-space: pre-line;
}
</style>
