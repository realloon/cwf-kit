<script setup lang="ts">
const { enumMap } = useReferences()
</script>

<template>
  <ul>
    <li v-for="enumEntry in enumMap.values()">
      <RouterLink :to="`/reference/enum/${enumEntry.id}`">
        {{ enumEntry.id }}
      </RouterLink>
    </li>
  </ul>
</template>
