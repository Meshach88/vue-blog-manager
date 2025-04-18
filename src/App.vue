<template>
  <div class="font-sans text-gray-800 bg-gray-100 min-h-screen">
    <router-view class="max-w-7xl mx-auto px-4 py-6" />
  </div>
</template>

<style>
.page-enter-active, .page-leave-active {
  transition: opacity 0.3s ease;
}
.page-enter-from, .page-leave-to {
  opacity: 0;
}
</style>
