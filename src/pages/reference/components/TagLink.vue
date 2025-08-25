<script setup lang="ts">
const { id } = defineProps<{ id: string }>()

const { tagMap } = useReferences()

const tag = computed(() => tagMap.get(id))
</script>

<template>
  <RouterLink v-if="tag" class="tag is-link" :to="`/reference/${tag.id}`">
    {{ tag.id }}
  </RouterLink>
  <span v-else class="tag">{{ id }}</span>
</template>

<style scoped>
.tag {
  font-family: var(--font-mono);

  &::before {
    content: '<';
  }

  &::after {
    content: '>';
  }

  &.is-link {
    color: var(--color-color);
  }
}
</style>
