<script setup lang="ts">
import type { TraitModule } from '@/types/Defs'
import { computed, ref, onMounted } from 'vue'
import { parts } from '@/types/Defs'
import { Checkbox, IconFilter } from '@/components'
import Module from './components/Module.vue'
import { useModuleDB } from './helpers'

const modules = ref<TraitModule[]>([])
onMounted(async () => {
  const { moduleDB } = await useModuleDB()
  modules.value = moduleDB.value
})

const partsFilter = ref(parts)
const filteredModules = computed(() =>
  modules.value.filter(module =>
    partsFilter.value.includes(module.modExtensions.li[0].part)
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
        v-model="partsFilter"
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
