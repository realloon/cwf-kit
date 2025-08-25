<script setup lang="ts">
const { id } = defineProps<{ id: string }>()

const { tagMap } = useReferences()

const tag = computed(() => tagMap.get(id))
</script>

<template>
  <RouterLink v-if="tag" class="use-link" :to="`/reference/tag/${tag.id}`">
    <code>{{ tag.id }}</code>
  </RouterLink>

  <span v-else>
    <code>{{ id }}</code>
  </span>
</template>

<style scoped>
.tag {
  &::before {
    content: '<';
  }

  &::after {
    content: '>';
  }
}
</style>
