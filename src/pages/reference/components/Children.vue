<script setup lang="ts">
import TagLink from './TagLink.vue'
const { el } = defineProps<{ el: string }>()

const { enumMap } = useReferences()

const type = computed(() => el.split(':').at(0) as ValueType)
const key = computed(() => el.split(':').at(1) as string)
</script>

<template>
  <template v-if="type === 'tag'">
    <TagLink class="use-link" :id="key" />
  </template>

  <template v-else-if="type === 'enum'">
    <li><TagLink id="li" /></li>
    <h4>
      <code>
        <span>type: </span>
        <RouterLink class="use-link" :to="`/reference/enum/${key}`">
          {{ key }}
        </RouterLink>
        <span> ({{ type }})</span>
      </code>
    </h4>
    <ul>
      <li v-for="value in enumMap.get(key)?.values">
        <code>{{ value }}</code>
      </li>
    </ul>
  </template>

  <template v-else>
    <li><TagLink id="li" /></li>
    <h4>
      <code>type: {{ key }} ({{ type }})</code>
    </h4>
  </template>
</template>
