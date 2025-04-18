<template>
    <div class="p-6 min-h-screen bg-gray-100">
      <Navbar />
      <h1 class="text-2xl font-bold mb-6 text-gray-800 ml-5">All Posts</h1>
      <div class="ml-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <PostCard v-for="post in posts" :key="post.id" :post="post" @delete="deletePost" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { usePostStore } from '../stores/postStore';
  import { storeToRefs } from 'pinia';
  import PostCard from '../components/PostCard.vue';
  import Navbar from '../components/Navbar.vue';
  
  const postStore = usePostStore();
  const posts = postStore.posts;
  // const { allPosts } = storeToRefs(postStore);
  
  function deletePost(id) {
    postStore.deletePost(id);
  }
  </script>
  