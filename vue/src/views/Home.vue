<template>
    <header class="bg-white shadow">
        <div class="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 class="text-3xl font-bold tracking-tight text-gray-900">Home</h1>
        </div>
    </header>
    <main>
    <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <!-- Replace with your content -->
        <div v-if="authStore.user">
            <h1>{{ authStore.user.name }}</h1>
            <p>{{ authStore.user.email }}</p>
        </div>
        <div v-else>Go Login In</div>
        <!-- /End replace -->
    </div>
    </main>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import {useAuthStore} from '../store'
const authStore  = useAuthStore();
onMounted(async () => {
    await authStore.getAuthUser()
})

</script>