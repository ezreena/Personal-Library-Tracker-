<script setup>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import BackButton from '@/components/BackButton.vue'
import axios from 'axios'
import { reactive, onMounted } from 'vue'
import { useRoute, RouterLink, useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'

const route = useRoute()
const bookId = route.params.id
const toast = useToast()
const router = useRouter()

const state = reactive({
  book: {},
  isLoading: true,
})

// if axios then use async
const deleteBook = async () => {
  try {
    await axios.delete(`/api/books/${bookId}`)
    toast.success('Book Deleted Successfully')
    router.push('/books')
  } catch {
    console.error('Error deleting book', error)
    toast.error('Book Not Deleted')
  }
}
//connect with books.json
onMounted(async () => {
  try {
    const response = await axios.get(`/api/books/${bookId}`)
    state.book = response.data
  } catch (error) {
    console.error('Error fetching books', error)
  } finally {
    state.isLoading = false
  }
})
</script>

<template>
  <BackButton />
  <section v-if="!state.isLoading" class="py-8 px-6" style="background-color: #fce4ec">
    <v-row dense>
      <!-- Main Content -->
      <v-col cols="12" md="8">
        <v-card class="pa-8 mb-6" elevation="3">
          <div class="d-flex align-start" style="gap: 24px; flex-wrap: nowrap">
            <!-- Image stays fixed width -->
            <v-card flat class="pa-0" style="flex: 0 0 auto">
              <v-img
                :src="
                  state.book.image.startsWith('data:')
                    ? state.book.image
                    : `/img/${state.book.image}`
                "
                :width="200"
              ></v-img>
            </v-card>

            <!-- All text stacked vertically -->
            <div style="flex: 1">
              <h1 class="text-h6 font-weight-bold">{{ state.book.title }}</h1>
              <div class="text-grey-darken-1 text-subtitle-2 mb-4">by {{ state.book.author }}</div>

              <div class="text-pink-darken-3 text-h7 font-weight-bold mb-2">Book Description</div>
              <p class="mb-4">
                {{ state.book.description }}
              </p>

              <div class="text-pink-darken-3 text-h7 font-weight-bold mb-2">
                Genre :
                <span class="mb-4">{{ state.book.genre }}</span>
              </div>

              <div class="text-amber d-flex align-center">
                <v-icon icon="mdi-star" class="mr-1"></v-icon>
                <span class="text-subtitle-3">{{ state.book.status }}</span>
              </div>
            </div>
          </div>
        </v-card>
      </v-col>

      <!-- Sidebar -->
      <v-col cols="12" md="4">
        <!-- Company Info -->
        <v-card class="pa-6 mb-6" elevation="3">
          <h3 class="text-h6 font-weight-bold mb-3">Book Review</h3>
          <p class="mb-4">{{ state.book.review }}</p>
          <v-divider class="my-4" />

          <!-- Manage Book -->
          <h3 class="text-h6 font-weight-bold mb-6">Manage Book</h3>

          <v-btn
            :to="`/books/edit/${state.book.id}`"
            color="green"
            class="mb-4"
            block
            rounded
            elevation="2"
          >
            Edit Book
          </v-btn>

          <v-btn @click="deleteBook" color="red" block rounded elevation="2">Delete Book</v-btn>
        </v-card>
      </v-col>
    </v-row>
  </section>

  <!-- Show Loading spinner while loading is true -->
  <div v-else class="text-center text-grey-darken-1">
    <PulseLoader />
  </div>
</template>
