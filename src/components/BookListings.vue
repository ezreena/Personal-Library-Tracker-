<script setup lang="ts">
import BookListing from './BookListing.vue'
import { useBooks } from '@/composables/useBooks'

import { ref, computed, defineProps, onMounted } from 'vue'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import { RouterLink } from 'vue-router'

const { books, isLoading, fetchBooks } = useBooks()

const props = defineProps<{
  limit: number
  showButton: {
    type: Boolean
    default: false
  }
}>()

const searchTerm = ref('')

// Computed property to filter books by title or status
const filteredBooks = computed(() => {
  if (!searchTerm.value) return books.value
  const term = searchTerm.value.toLowerCase()
  return books.value.filter(
    (book) => book.title.toLowerCase().includes(term) || book.status.toLowerCase().includes(term),
  )
})

//connect with books.json
onMounted(fetchBooks)
</script>

<template>
  <v-container fluid class="py-4 mt-14" style="background-color: #fce4ec">
    <!-- Search Field -->
    <v-row justify="center" class="mb-6">
      <v-col cols="12" md="6">
        <v-text-field
          v-model="searchTerm"
          label="Search by Title or Status"
          prepend-inner-icon="mdi-magnify"
          variant="outlined"
          color="pink-darken-3"
          hide-details
          density="compact"
          rounded="xl"
          class="px-4 py-2"
          bg-color="white"
        ></v-text-field>
      </v-col>

      <!-- Sort Menu Button
      <v-col cols="auto" class="d-flex align-center">
        <v-menu v-model="sortMenu" offset-y>
          <template #activator="{ props }">
            <v-icon v-bind="props" color="grey-darken-1" size="24">mdi-sort-variant</v-icon>
          </template>

          <v-list-item
            @click="
              () => {
                sortField = 'title'
                sortMenu = false
              }
            "
          >
            <v-list-item-title>Sort by Title</v-list-item-title>
          </v-list-item>

          <v-list-item
            @click="
              () => {
                sortField = 'author'
                sortMenu = false
              }
            "
          >
            <v-list-item-title>Sort by Author</v-list-item-title>
          </v-list-item>
        </v-menu>
      </v-col> -->
    </v-row>

    <v-row justify="center" class="mb-4">
      <p class="text-h5 font-weight-bold white--text">Browse Books</p>
    </v-row>

    <!-- Show Loading spinner while loading is true -->
    <div v-if="isLoading" class="text-center text-grey-darken-1">
      <PulseLoader />
    </div>

    <!-- Show 'No Books Found' when done loading and no filtered books -->
    <div v-else-if="filteredBooks.length === 0" class="text-center my-8">
      <v-icon color="pink-darken-3" size="100" class="mb-4">mdi-bookshelf</v-icon>
      <h3 class="text-h6 font-weight-bold text-pink-darken-3">No Books Found</h3>
    </div>

    <!-- Show Book listing when done loading -->
    <v-row v-else gutters>
      <v-col
        v-for="book in filteredBooks.slice(0, props.limit || filteredBooks.length)"
        :key="book.id"
        cols="12"
        md="4"
        class="mb-4"
      >
        <BookListing :book="book" class="flex-grow-1" />
      </v-col>
    </v-row>
  </v-container>

  <section v-if="showButton">
    <v-container fluid style="background-color: white" class="py-14">
      <v-row justify="center">
        <v-col cols="12" md="4" sm="6">
          <v-btn
            to="/books"
            variant="elevated"
            color="pink-darken-3"
            class="text-white text-subtitle-1 rounded-lg py-6 text-capitalize"
            block
            size="large"
          >
            View All Books
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
