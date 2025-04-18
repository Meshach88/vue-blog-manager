import { defineStore } from 'pinia';

export const usePostStore = defineStore('post', {
  state: () => ({
    posts: JSON.parse(localStorage.getItem('posts')) || [],
  }),
  actions: {
    addPost(post) {
      post.id = Date.now().toString();
      post.createdAt = new Date().toISOString();
      this.posts.unshift(post);
      this.saveToLocalStorage();
    },
    updatePost(updatedPost) {
      const index = this.posts.findIndex(p => p.id === updatedPost.id);
      if (index !== -1) {
        updatedPost.createdAt = this.posts[index].createdAt;
        this.posts[index] = updatedPost;
        this.saveToLocalStorage();
      }
    },
    deletePost(id) {
      this.posts = this.posts.filter(p => p.id !== id);
      this.saveToLocalStorage();
    },
    getPostById(id) {
      return this.posts.find(p => p.id === id);
    },
    saveToLocalStorage() {
      localStorage.setItem('posts', JSON.stringify(this.posts));
    },
  },
});
