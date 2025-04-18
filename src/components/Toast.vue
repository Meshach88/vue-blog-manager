<template>
    <transition name="fade">
      <div v-if="visible" class="fixed bottom-6 right-6 bg-green-500 text-white px-4 py-2 rounded-xl shadow text-sm">
        {{ message }}
      </div>
    </transition>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  const visible = ref(false);
  const message = ref('');
  
  function showToast(msg) {
    message.value = msg;
    visible.value = true;
    setTimeout(() => visible.value = false, 3000);
  }
  
  defineExpose({ showToast });
  </script>
  
  <style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }
  </style>
  