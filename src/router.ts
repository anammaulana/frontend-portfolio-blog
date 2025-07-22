import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Blog from './pages/Blog.vue'
import BlogDetail from './pages/BlogDetail.vue'
import Login from './pages/Login.vue'
import Register from './pages/Register.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/blog', name: 'Blog', component: Blog },
    { path: '/blog/:id', name: 'BlogDetail', component: BlogDetail, props: true },
    // Tambahkan ke array `routes`
    { path: '/login', name: 'Login', component: Login },
    { path: '/register', name: 'Register', component: Register},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
