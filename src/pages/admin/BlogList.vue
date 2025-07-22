<template>
    <div>
        <h2>Daftar Blog</h2>
        <router-link to="/admin/blogs/create">+ Tambah Blog</router-link>
        <ul>
            <li v-for="blog in blogs" :key="blog.id">
                <img :src="blog.coverImage" alt="cover" width="100" />
                <strong>{{ blog.title }}</strong> oleh {{ blog.author.name }}
                <router-link :to="`/admin/blogs/edit/${blog.id}`">Edit</router-link>
                <button @click="deleteBlog(blog.id)">Hapus</button>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import api from '@/services/api'
import { useRouter } from 'vue-router'

const blogs = ref([])
const router = useRouter()

const fetchBlogs = async () => {
    const { data } = await api.get('/blogs')
    blogs.value = data.data
}

const deleteBlog = async (id) => {
    if (confirm('Yakin hapus blog ini?')) {
        await api.delete(`/blogs/${id}`)
        fetchBlogs()
    }
}

onMounted(fetchBlogs)
</script>
  
