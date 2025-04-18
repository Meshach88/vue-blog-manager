<template>
    <div class="p-6 min-h-screen bg-gray-100">
      <Navbar />
      <h1 class="text-3xl font-bold mb-6 text-gray-800">All Posts</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <PostCard v-for="post in posts" :key="post.id" :post="post" @delete="deletePost" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { usePostStore } from '../stores/postStore';
  import PostCard from '../components/PostCard.vue';
  import Navbar from '../components/Navbar.vue';
  
  const postStore = usePostStore();
  const posts = postStore.posts;
  
  function deletePost(id) {
    postStore.deletePost(id);
  }
  </script>
  