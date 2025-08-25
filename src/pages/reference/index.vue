<script setup lang="ts">
const { tagMap } = useReferences()
</script>

<template>
  <ul>
    <li v-for="tag in tagMap.values()">
      <RouterLink :to="`/reference/${tag.id}`">
        {{ tag.id }}
      </RouterLink>
    </li>
  </ul>
</template>
