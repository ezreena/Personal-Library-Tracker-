<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'

const isActiveLink = (routePath: string) => {
  const route = useRoute()
  return route.path === routePath
}
</script>

<template>
  <v-toolbar
    flat
    app
    style="position: fixed; top: 0; left: 0; right: 0; z-index: 100; border-bottom: 1px solid white"
    color="pink-darken-3"
  >
    <v-toolbar-title class="headline">
      <!-- Logo -->
      <span class="hidden md:block font-weight-bold text-h6"> Library Tracker </span>
    </v-toolbar-title>

    <!-- align to the left -->
    <v-spacer></v-spacer>

    <div class="d-flex ml-auto">
      <v-btn
        flat
        :to="'/'"
        :class="[
          isActiveLink('/') ? 'bg-pink-darken-3' : 'hover:bg-white hover:text-white',
          'text-white',
        ]"
        class="text-white me-2"
      >
        <span class="text-capitalize">Home</span>
      </v-btn>

      <v-btn
        flat
        :to="'/books'"
        :class="[
          isActiveLink('/books') ? 'bg-pink-darken-3' : 'hover:bg-white hover:text-white',
          'text-white',
        ]"
        class="text-white me-2"
      >
        <span class="text-capitalize">Books</span>
      </v-btn>

      <v-btn
        flat
        :to="'/books/add'"
        :class="[
          isActiveLink('/books/add') ? 'bg-pink-darken-3' : 'hover:bg-white hover:text-white',
          'text-white',
        ]"
        class="text-white me-2"
      >
        <span class="text-capitalize">Add Books</span>
      </v-btn>
    </div>
  </v-toolbar>
</template>
