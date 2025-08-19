<script setup lang="ts">
import { parts, type Part } from '@/types'
import { Checkbox } from '@/components'
import { IconFilterOutline } from '@/components/icons'

const model = defineModel<readonly Part[]>({ required: true })

function toggleFilter() {
  model.value = model.value.length === 0 ? parts : []
}
</script>

<template>
  <form class="filter">
    <IconFilterOutline @click="toggleFilter" />
    <Checkbox
      v-for="part in parts"
      v-model="model"
      :label="part"
      :value="part"
      name="filter"
    />
  </form>
</template>

<style scoped>
.filter {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;

  margin-block-end: 16px;
}
</style>
