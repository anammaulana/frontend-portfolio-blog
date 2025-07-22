<template>
    <div class="p-6">
        <h1 class="text-3xl font-bold mb-4">{{ post.title }}</h1>
        <p class="mb-2 text-gray-600">Ditulis oleh {{ post.author }}</p>
        <div class="text-gray-800 leading-relaxed">{{ post.content }}</div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const post = ref({ title: '', author: '', content: '' })

// Simulasi fetch data
const allPosts = [
    { id: 1, title: 'Belajar Quarkus untuk Pemula', author: 'Anam', content: 'Quarkus adalah framework Java yang sangat cepat...' },
    { id: 2, title: 'Integrasi Vue dengan Laravel Sanctum', author: 'Anam', content: 'Laravel Sanctum adalah solusi otentikasi ringan...' },
    { id: 3, title: 'Tips Deploy Laravel di VPS', author: 'Anam', content: 'Untuk deploy Laravel ke VPS, kamu bisa mulai dengan...' },
]

const found = allPosts.find(p => p.id == route.params.id)
if (found) post.value = found
</script>
  
