import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import AddPost from '../pages/AddPost.vue';
import EditPost from '../pages/EditPost.vue';
import ViewPost from '../pages/ViewPost.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/add', component: AddPost },
  { path: '/edit/:id', component: EditPost, props: true },
  { path: '/post/:id', component: ViewPost, props: true },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});