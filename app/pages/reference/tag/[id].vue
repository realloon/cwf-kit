<script setup lang="ts">
definePageMeta({ layout: 'reference' })
const route = useRoute()
const { data: tag } = await useFetch(`/api/reference/tag/${route.params.id}`)
</script>

<template>
  <article>
    <h1>{{ tag?.id }}</h1>
    <p class="path">{{ tag?.paths.join(' > ') }}</p>

    <section class="children"></section>

    <pre style="font-size: 12px; line-height: 1.2">{{ tag }}</pre>
  </article>
</template>

<style scoped>
article {
  line-height: 1.5;
}

h1 {
  font-family: monospace;

  &::before {
    content: '<';
  }

  &::after {
    content: '>';
  }
}

.path {
  font-family: monospace;
}
</style>
