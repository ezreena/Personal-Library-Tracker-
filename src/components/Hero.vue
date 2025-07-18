<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  title: {
    type: String,
    default: 'Welcome',
  },

  subtitle: {
    type: String,
    default: 'Organize, discover, and cherish your book collection with ease.',
  },
})
</script>

<template>
  <div style="background-color: #ad1457; padding-bottom: 40px">
    <v-container fluid class="py-16 mt-16">
      <v-row justify="center">
        <v-col cols="12" md="10" class="text-center">
          <h1 class="text-h2 font-weight-bold text-white">
            {{ title }}
          </h1>
          <p class="text-subtitle-1 mt-4 text-white">
            {{ subtitle }}
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
