<script setup>
import Hero from '@/components/Hero.vue'
import HomeCards from '@/components/HomeCards.vue'
import BookListings from '@/components/BookListings.vue'
</script>

<template>
  <Hero />
  <HomeCards />
  <BookListings :limit="3" :showButton="true" />
</template>
