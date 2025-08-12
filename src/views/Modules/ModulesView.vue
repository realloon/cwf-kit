<script setup lang="ts">
import type { TraitModule } from '@/types/Defs'
import { computed, ref } from 'vue'
import { parts } from '@/types/Defs'
import { Checkbox, IconFilter } from '@/components'
import Module from './components/Module.vue'
import { useModules } from './hooks/useModules'

const { loadXmlFiles, isLoaded, traitModules } = useModules()

const filter = ref(parts)
const filteredModules = computed(() =>
  traitModules.value.filter(module =>
    filter.value.includes(module.modExtensions.li[0].part)
  )
)
</script>

<template>
  <main>
    <h1 hidden>Modules</h1>

    <button @click="loadXmlFiles">Click me</button>

    <section class="part-filter">
      <IconFilter />
      <Checkbox
        v-for="part in parts"
        v-model="filter"
        :label="part"
        :value="part"
      />
    </section>

    <section class="module-list">
      <Module v-for="module in filteredModules" :module="module" />
    </section>
  </main>
</template>

<style scoped>
main {
  width: 100%;
}

.part-filter {
  display: flex;
  gap: 8px;
  margin-block: 8px 16px;
}

.module-list {
  display: flex;
  flex-direction: column;
  gap: 32px;
}
</style>
