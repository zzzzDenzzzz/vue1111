import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import News from '../views/News.vue'
import Post from '../views/Post.vue'
import Albums from '../views/Albums.vue'
import Photos from '../views/Photos.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/news/:id',
      name: 'post',
      component: Post
    },
    {
      path: '/albums',
      name: 'albums',
      component: Albums
    },
    {
      path: '/photos',
      name: 'photos',
      component: Photos
    },
  ]
})

export default router
