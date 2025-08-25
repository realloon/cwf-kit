<script setup lang="ts">
const { tagMap, enumMap } = useReferences()
</script>

<template>
  <article>
    <h2>Tag</h2>
    <ul>
      <li v-for="tagEntry in tagMap.values()">
        <RouterLink :to="`/reference/tag/${tagEntry.id}`">
          <code class="use-link"><{{ tagEntry.id }}></code>
        </RouterLink>
      </li>
    </ul>

    <h2>Enum</h2>
    <ul>
      <li v-for="enumEntry in enumMap.values()">
        <RouterLink :to="`/reference/enum/${enumEntry.id}`">
          <code class="use-link">{{ enumEntry.id }}</code>
        </RouterLink>
      </li>
    </ul>
  </article>
</template>

<style scoped>
article {
  line-height: 1.5;
}
</style>
