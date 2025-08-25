<script setup lang="ts">
const { tags } = useReferences()
</script>

<template>
  <ul>
    <li v-for="tag in tags">
      <RouterLink :to="`/reference/${tag.id}`">
        {{ tag.id }}
      </RouterLink>
    </li>
  </ul>
</template>
