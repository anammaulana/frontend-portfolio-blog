
<template>
    <div class="p-6">
        <h1 class="text-2xl font-bold mb-4">Blog Teknologi</h1>
        <ul class="space-y-3">
            <li v-for="post in posts" :key="post.id" class="border p-4 rounded shadow hover:bg-gray-100">
                <router-link :to="`/blog/${post.id}`" class="text-lg font-semibold text-blue-600">
                    {{ post.title }}
                </router-link>
                <p class="text-gray-600 text-sm">Ditulis oleh {{ post.author }}</p>
            </li>
        </ul>
    </div>
</template>

<script setup>
const posts = [
    { id: 1, title: 'Belajar Quarkus untuk Pemula', author: 'Anam' },
    { id: 2, title: 'Integrasi Vue dengan Laravel Sanctum', author: 'Anam' },
    { id: 3, title: 'Tips Deploy Laravel di VPS', author: 'Anam' },
]
</script>
  
