<template>
    <div class="p-6 min-h-screen bg-gray-50">
      <Navbar />
      <div v-if="post" class="bg-white p-6 rounded-2xl shadow max-w-3xl">
        <h1 class="text-3xl font-bold mb-2 text-gray-800">{{ post.title }}</h1>
        <p class="text-gray-600 whitespace-pre-wrap">{{ post.content }}</p>
        <p class="text-xs text-gray-400 mt-4">Posted on {{ new Date(post.createdAt).toLocaleString() }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router';
  import { usePostStore } from '../stores/postStore';
  import Navbar from '../components/Navbar.vue';
  
  const route = useRoute();
  const postStore = usePostStore();
  const post = postStore.getPostById(route.params.id);
  </script>
  