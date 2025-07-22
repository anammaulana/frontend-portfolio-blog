<template>
    <div class="p-6">
        <h1 class="text-3xl font-bold mb-4">Halo, saya Anam Maulana 👋</h1>
        <p class="text-lg">Saya seorang web developer yang fokus pada pengembangan aplikasi berbasis Laravel dan
            Quarkus.</p>
        <div class="mt-6 grid md:grid-cols-3 gap-4">
            <div class="border p-4 rounded shadow" v-for="project in projects" :key="project.id">
                <h2 class="text-xl font-semibold">{{ project.title }}</h2>
                <p class="text-gray-700">{{ project.description }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
const projects = [
    { id: 1, title: 'Aplikasi Helpdesk', description: 'Sistem pengelolaan tiket berbasis Laravel & Quarkus' },
    { id: 2, title: 'Sistem Informasi Sekolah', description: 'Frontend + Backend dengan Inertia.js dan Vue' },
    { id: 3, title: 'E-Commerce Fashion', description: 'Menggunakan Laravel, Vue, dan Midtrans' },
]
</script>
  
