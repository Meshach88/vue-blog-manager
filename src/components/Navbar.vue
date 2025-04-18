<template>
    <nav class="bg-blue-950 text-white px-6 py-4 flex justify-between items-center shadow sticky top-0 z-50 rounded-lg mb-10">
      <h1 class="text-xl font-bold">📝 Blog Manager</h1>
      <div class="space-x-4">
        <router-link to="/" class="hover:underline font-semibold">Home</router-link>
        <router-link to="/add" class="hover:underline font-semibold">Add Post</router-link>
      </div>
    </nav>
  </template>
  
  <script setup></script>
  
  <style scoped></style>