<script setup lang="ts">
import { parts, type Part } from '@/types/Defs'
import { computed, ref } from 'vue'
import PartFilter from './components/PartFilter.vue'
import Module from './components/Module.vue'
import LoadupButton from './components/LoadupButton.vue'
import { useModules } from './hooks/useModules'

const { loadXmlFiles, isLoaded, traitModules } = useModules()

const filter = ref<readonly Part[]>(parts)
const filteredModules = computed(() =>
  traitModules.value.filter(module =>
    filter.value.includes(module.modExtensions.li[0].part)
  )
)
</script>

<template>
  <main>
    <h1 hidden>Modules</h1>

    <section class="part-filter">
      <IconFilter />
      <Checkbox
        v-for="part in parts"
        v-model="filter"
        :label="part"
        :value="part"
        :disabled="!isLoaded"
      />
    </section>
    <PartFilter v-model="filter" />

    <section class="module-list">
      <Module v-for="module in filteredModules" :module="module" />
    </section>

    <LoadupButton :handle="loadXmlFiles" />
  </main>
</template>

<style scoped>
main {
  width: 100%;
}

.module-list {
  display: flex;
  flex-direction: column;
  gap: 32px;
}
</style>
