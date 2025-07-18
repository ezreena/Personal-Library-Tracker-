<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { defineProps, ref, computed } from 'vue'

// interface is for props
interface Book {
  id: number
  title: string
  author: string
  description: string
  genre: string
  status: string
}

const props = defineProps<{
  book: Book
}>()

const showFullDescription = ref(false)

const toggleFullDescription = () => {
  showFullDescription.value = !showFullDescription.value
}

const truncatedDescription = computed(() => {
  let description = props.book.description
  if (!showFullDescription.value) {
    description = description.substring(0, 150) + '...'
  }
  return description
})
</script>

<template>
  <!-- Book Listings -->
  <v-card class="rounded-lg d-flex flex-column h-100" elevation="4">
    <v-card-text>
      <div class="mb-4">
        <div class="text-grey-darken-1 my-2 text-subtitle-2">
          by

          <span>{{ book.author }}</span>
        </div>
        <h3 class="text-h6 font-weight-bold text-pink-darken-3">{{ book.title }}</h3>
      </div>

      <!-- Book Description -->
      <div class="mb-5">
        <span>{{ truncatedDescription }}</span>
        <v-btn
          @click="toggleFullDescription"
          variant="plain"
          color="green-darken-1"
          class="text-capitalize mb-1 pa-0 text-subtitle-2"
          min-width="0"
          height="auto"
        >
          {{ showFullDescription ? 'Less' : 'More' }}
          <!-- is true show text as Less, if false then show More -->
        </v-btn>
      </div>

      <!-- Genre -->
      <h3 class="text-green text-subtitle-1 font-weight-bold mb-2">
        Genre :
        <span> {{ book.genre }}</span>
      </h3>

      <!-- Divider -->
      <v-divider class="mb-5"></v-divider>

      <!-- Progress and Button -->
      <v-row justify="space-between" no-gutters>
        <div class="text-amber text-body-2 d-flex align-center">
          <v-icon icon="mdi-star" class="mr-1"></v-icon>
          {{ book.status }}
        </div>
        <RouterLink :to="'/books/' + book.id">
          <v-btn color="green-accent-4" class="text-white" variant="elevated" height="36">
            Read More
          </v-btn>
        </RouterLink>
      </v-row>
    </v-card-text>
  </v-card>
</template>
