<script setup lang="ts">
definePageMeta({ layout: 'reference' })
const route = useRoute()
const { data: tag } = await useFetch(`/api/reference/tag/${route.params.id}`)
</script>

<template>
  <pre>{{}}</pre>
</template>

<style></style>
