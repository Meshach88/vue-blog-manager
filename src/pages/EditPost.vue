<template>
    <div class="p-6 min-h-screen bg-gray-50">
      <Navbar />
      <h1 class="text-2xl font-bold mb-4 text-gray-800">Edit Post</h1>
      <form @submit.prevent="submitForm" class="space-y-4 max-w-2xl">
        <input v-model="title" type="text" class="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500" />
        <textarea v-model="content" class="w-full p-3 border border-gray-300 rounded-xl h-40 focus:outline-none focus:ring-2 focus:ring-yellow-500"></textarea>
        <button class="bg-yellow-600 text-white px-6 py-2 rounded-xl hover:bg-yellow-700 transition">Update Post</button>
      </form>
      <Toast ref="toast" />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { usePostStore } from '../stores/postStore';
  import Navbar from '../components/Navbar.vue';
  import Toast from '../components/Toast.vue';
  
  const route = useRoute();
  const router = useRouter();
  const postStore = usePostStore();
  const post = ref(null);
  const title = ref('');
  const content = ref('');
  const toast = ref(null);
  
  onMounted(() => {
    post.value = postStore.getPostById(route.params.id);
    if (!post.value) return router.push('/');
    title.value = post.value.title;
    content.value = post.value.content;
  });
  
  function submitForm() {
    if (!title.value || !content.value) {
      toast.value.showToast('All fields are required.');
      return;
    }
    postStore.updatePost({ id: route.params.id, title: title.value.trim(), content: content.value.trim() });
    toast.value.showToast('Post updated.');
  }
  </script>
  