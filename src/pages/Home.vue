<template>
    <div class="p-6 max-w-6xl mx-auto">
        <!-- Profile Section -->
        <div class="flex flex-col md:flex-row items-center md:items-start gap-6 mb-10">
            <img src="https://i.pravatar.cc/150?img=67" alt="Anam Maulana"
                class="w-36 h-36 rounded-full border-4 border-indigo-500 shadow-lg" />
            <div>
                <h1 class="text-3xl font-bold">Halo, saya Anam Maulana 👋</h1>
                <p class="text-lg text-gray-700 mt-2">
                    Saya seorang web developer yang fokus pada pengembangan aplikasi berbasis
                    <span class="font-semibold">Laravel</span>, <span class="font-semibold">Quarkus</span>,
                    dan <span class="font-semibold">Vue.js</span>.
                </p>
                <p class="mt-2 text-sm text-gray-500">
                    📍 Jakarta, Indonesia &nbsp;|&nbsp; 📧 anam@anam.com
                </p>
            </div>
        </div>

        <!-- Skills Section -->
        <div class="mb-10">
            <h2 class="text-2xl font-semibold mb-4">🧠 Keahlian</h2>
            <div class="flex flex-wrap gap-3">
                <span class="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm">Laravel</span>
                <span class="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm">Vue.js</span>
                <span class="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm">Quarkus</span>
                <span class="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm">NestJS</span>
                <span class="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm">MySQL</span>
                <span class="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm">REST API</span>
                <span class="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm">JWT Auth</span>
            </div>
        </div>

        <!-- Projects Section -->
        <div>
            <h2 class="text-2xl font-semibold mb-4">🚀 Proyek Terbaru</h2>
            <div class="grid md:grid-cols-3 gap-6">
                <div class="border p-4 rounded shadow hover:shadow-lg transition" v-for="project in projects"
                    :key="project.id">
                    <h3 class="text-xl font-semibold">{{ project.title }}</h3>
                    <p class="text-gray-700 mt-2">{{ project.description }}</p>
                </div>
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
  
