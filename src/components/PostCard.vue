<template>
    <div class="bg-white rounded-2xl shadow p-4 flex flex-col gap-2 border hover:shadow-xl transition-all">
        <h2 class="text-xl font-semibold text-gray-800">{{ post.title }}</h2>
        <p class="text-gray-600">{{ post.content.substring(0, 120) }}...</p>
        <p class="text-xs text-gray-400">Posted on {{ new Date(post.createdAt).toLocaleString() }}</p>
        <div class="mt-2 flex justify-between text-sm text-blue-600">
            <router-link :to="`/post/${post.id}`" class="hover:underline">Read More</router-link>
            <router-link :to="`/edit/${post.id}`" class="hover:underline">Edit</router-link>
        </div>
        <button @click="$emit('delete', post.id)" class="text-red-500 hover:underline self-end mt-2">Delete</button>
    </div>
</template>

<script setup>
defineProps(['post']);
defineEmits(['delete']);
</script>

<style scoped></style>