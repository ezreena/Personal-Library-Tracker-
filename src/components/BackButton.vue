<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="py-3 px-3" style="background-color: #fce4ec">
    <v-row justify="start">
      <v-col cols="auto">
        <v-btn :to="'/books'" color="pink-darken-3" variant="plain" class="text-capitalize">
          <v-icon start>mdi-arrow-left-circle</v-icon>
          Back to Book Listings
        </v-btn>
      </v-col>
    </v-row>
  </section>
</template>
