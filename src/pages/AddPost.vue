<template>
    <div class="p-6 min-h-screen bg-gray-50">
      <Navbar />
      <h1 class="text-2xl font-bold mb-4 text-gray-800">Add New Post</h1>
      <form @submit.prevent="submitForm" class="space-y-4 max-w-2xl">
        <input v-model="title" type="text" placeholder="Title" class="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <textarea v-model="content" placeholder="Content" class="w-full p-3 border border-gray-300 rounded-xl h-40 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
        <button class="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition">Add Post</button>
      </form>
      <Toast ref="toast" />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { usePostStore } from '../stores/postStore';
  import Navbar from '../components/Navbar.vue';
  import Toast from '../components/Toast.vue';
  
  const title = ref('');
  const content = ref('');
  const toast = ref(null);
  const postStore = usePostStore();
  
  function submitForm() {
    if (!title.value || !content.value) {
      toast.value.showToast('All fields are required.');
      return;
    }
    postStore.addPost({ title: title.value.trim(), content: content.value.trim() });
    title.value = '';
    content.value = '';
    toast.value.showToast('Post added successfully.');
  }
  </script>
  