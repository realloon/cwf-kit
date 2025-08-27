<script setup lang="ts">
definePageMeta({ layout: 'reference' })

const route = useRoute()
const { data: tag } = await useFetch(
  `/api/reference/tag/${route.params.id}`,
  {}
)
</script>

<template>
  <article>
    <pre style="font-size: 12px; line-height: 1">{{ tag }}</pre>

    <h1>{{ tag?.id }}</h1>
    <p class="path">{{ tag?.paths.join(' > ') }}</p>

    <section class="children">
      <ul>
        <li v-for="item in tag?.children">
          <pre>{{ item }}</pre>
        </li>
      </ul>
    </section>
  </article>
</template>

<style scoped>
article {
  line-height: 1.5;
}

.path {
  font-family: monospace;
}
</style>
