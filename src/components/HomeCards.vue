<script setup lang="ts">
import { RouterLink } from 'vue-router'
import Card from './Card.vue'
</script>

<template>
  <v-container fluid class="py-10" style="background-color: white">
    <v-row class="pa-2" dense s>
      <!-- reader cards -->
      <v-col cols="12" md="6">
        <Card>
          <v-card-title class="text-h5 font-weight-bold"> For Reader </v-card-title>
          <v-card-text>
            <p class="mb-2 text-subtitle-1">Browse your books</p>
            <RouterLink to="/books">
              <v-btn color="black" class="text-white" rounded> Browse Books </v-btn>
            </RouterLink>
          </v-card-text>
        </Card>
      </v-col>

      <!-- bookworm cards -->
      <v-col cols="12" md="6">
        <Card color="pink-lighten-5">
          <v-card-title class="text-h5 font-weight-bold"> For Bookworms </v-card-title>

          <v-card-text>
            <p class="mb-2 text-subtitle-1">Update your readings today</p>
            <RouterLink to="/books/add">
              <v-btn color="green-accent-4" class="text-white" rounded> Add Books </v-btn>
            </RouterLink>
          </v-card-text>
        </Card>
      </v-col>
    </v-row>
  </v-container>
</template>
