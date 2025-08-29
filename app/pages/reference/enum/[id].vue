<script setup lang="ts">
definePageMeta({ layout: 'reference' })
const route = useRoute()
const { data: enumDetail } = await useFetch(
  `/api/reference/enum/${route.params.id}`
)
</script>

<template>
  <article>
    <h1>{{ enumDetail?.id }}</h1>

    <section class="members">
      <h2>Members</h2>
      <ul>
        <li v-for="value in enumDetail?.values">
          <code>{{ value }}</code>
        </li>
      </ul>
    </section>
  </article>
</template>

<style scoped>
article {
  line-height: 1.5;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

h1 {
  font-family: var(--font-mono);
  font-weight: bold;
  font-size: 1.25rem;
}
</style>
