<script setup lang="ts">
import json from '@/assets/db/reference.json?raw'
const { references }: ReferenceSchema = JSON.parse(json)
</script>

<template>
  <ul>
    <li v-for="reference in references">
      <RouterLink :to="`/reference/${reference.id}`">
        {{ reference.id }}
      </RouterLink>
    </li>
  </ul>
</template>
