<script setup lang="ts">
//props communication between parent and child components
import { defineProps } from 'vue'

defineProps({
  bg: {
    type: String,
    default: 'grey-lighten-4',
  },
})
</script>

<template>
  <v-card :color="bg" class="pa-4" elevation="2" rounded="lg">
    <slot></slot>
  </v-card>
</template>
