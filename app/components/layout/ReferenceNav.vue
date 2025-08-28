<script setup lang="ts">
const { data: reference } = await useFetch('/api/reference')

const tags = computed(() =>
  reference.value?.tags.toSorted((a, b) => a.id.localeCompare(b.id))
)
const enums = computed(() =>
  reference.value?.enums.toSorted((a, b) => a.id.localeCompare(b.id))
)
</script>

<template>
  <aside>
    <h1>Reference</h1>

    <nav>
      <h2>Tags</h2>
      <ul>
        <li v-for="tagEntry in tags">
          <nuxt-link :to="`/reference/tag/${tagEntry.id}`">{{
            tagEntry.id
          }}</nuxt-link>
        </li>
      </ul>
    </nav>

    <nav>
      <h2>Enum</h2>
      <ul>
        <li v-for="enumEntry in enums">
          <nuxt-link :to="`/reference/tag/${enumEntry.id}`">{{
            enumEntry.id
          }}</nuxt-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<style scoped>
aside {
  line-height: 1.5;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  opacity: 0.7;
  transition: 0.2s;

  &:hover {
    opacity: 1;
  }
}

h1 {
  font-size: 1.25rem;
  font-weight: bold;
}

nav {
  h2 {
    color: #666;
    font-weight: bold;
  }

  ul {
    list-style: none;
    padding-inline-start: unset;
  }

  li {
    font-size: 1rem;
    font-family: var(--font-mono);
  }
}
</style>
