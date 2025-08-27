<script setup lang="ts">
const { data: tags } = await useFetch('/api/reference/tag')
</script>

<template>
  <aside>
    <h1>Reference</h1>

    <nav>
      <h2>Tags</h2>
      <ul>
        <li v-for="tag in tags">
          <nuxt-link :to="`/reference/tag/${tag.id}`">{{ tag.id }}</nuxt-link>
        </li>
      </ul>
    </nav>

    <nav>
      <h2>Enum</h2>
      <ul>
        <li v-for="tag in tags">
          <nuxt-link :to="`/reference/tag/${tag.id}`">{{ tag.id }}</nuxt-link>
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

  li {
    font-size: 1rem;
    font-family: monospace;
  }
}
</style>
