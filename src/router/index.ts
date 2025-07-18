// router is to set about page and to set it to view
// home page to home view

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import BooksView from '@/views/BooksView.vue'
import BookView from '@/views/BookView.vue'
import AddBookView from '@/views/AddBookView.vue'
import EditBookView from '@/views/EditBookView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/books',
      name: 'books',
      component: BooksView,
    },
    {
      path: '/books/:id',
      name: 'book',
      component: BookView,
    },
    {
      path: '/books/add',
      name: 'add-book',
      component: AddBookView,
    },
    {
      path: '/books/edit/:id',
      name: 'edit-book',
      component: EditBookView,
    },
  ],
})

export default router
