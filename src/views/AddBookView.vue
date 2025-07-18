<script setup lang="ts">
import { useBooks } from '@/composables/useBooks'

const { books, handleSubmit, handleImageUpload, form } = useBooks()
</script>

<template>
  <v-container fluid style="background-color: #fce4ec; min-height: 100vh; padding-top: 80px">
    <v-row justify="center" style="min-height: 100vh">
      <v-col cols="12" md="8" lg="6">
        <v-card class="pa-6 mt-6 rounded-lg" elevation="5">
          <v-card-title class="text-h5 text-center font-weight-bold mb-4">Add Book</v-card-title>

          <v-form @submit.prevent="handleSubmit">
            <v-text-field
              v-model="form.title"
              label="Book Title"
              placeholder="Queen of Tears"
              required
              class="mb-2"
              prepend-icon="mdi-bookshelf"
            ></v-text-field>

            <v-text-field
              v-model="form.author"
              label="Book Author"
              placeholder="Colleen Hoover"
              required
              class="mb-2"
              prepend-icon="mdi-account-outline"
            ></v-text-field>

            <v-select
              label="Genre"
              v-model="form.genre"
              :items="[
                'Romance',
                'Fantasy',
                'Horror',
                'Crime & Thriller',
                'Science Fiction',
                'Comic',
                'Action & Adventure',
                'Historical Fiction',
                'Non-Fiction',
              ]"
              required
              class="mb-2"
              prepend-icon="mdi-thought-bubble-outline"
            ></v-select>

            <v-textarea
              v-model="form.description"
              label="Description"
              placeholder="Add book descriptions"
              rows="3"
              class="mb-2"
              prepend-icon="mdi-text-long"
            ></v-textarea>

            <v-select
              v-model="form.status"
              label="Book Status"
              :items="['Ongoing', 'Want to Read', 'Completed']"
              required
              class="mb-2"
              prepend-icon="mdi-thought-bubble-outline"
            ></v-select>

            <v-textarea
              v-model="form.review"
              label="Review"
              placeholder="Add book review"
              rows="2"
              class="mb-2"
              prepend-icon="mdi-text-long"
            ></v-textarea>

            <v-file-input
              accept="image/png, image/jpeg, image/png"
              label="Upload Book Cover"
              placeholder="Upload Book Cover"
              prepend-icon="mdi-camera"
              @update:modelValue="handleImageUpload"
            ></v-file-input>

            <v-btn
              color="green-accent-4"
              block
              rounded
              size="large"
              elevation="2"
              class="text-white text-capitalize"
              type="submit"
            >
              Add Book
            </v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
