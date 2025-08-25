<script setup lang="ts">
import { parts } from '@/types'
import PartFilter from './components/PartFilter.vue'
import Module from './components/Module.vue'

const { defDatabase } = useDefDatabase()

const traitModules = computed(() => {
  const { ThingDef, WeaponTraitDef } = defDatabase.value

  const thingDefs = ThingDef.filter(t => t['@_ParentName'] === 'CWF_Module')
  const weaponTraitDefs = WeaponTraitDef.filter(w => w.defName)

  return buildTraitModules(thingDefs, weaponTraitDefs)
})

const filter = ref<readonly Part[]>(parts)
const filteredModules = computed(() =>
  traitModules.value.filter(module =>
    filter.value.includes(module.modExtensions.li[0].part)
  )
)
</script>

<template>
  <h1 hidden>Modules</h1>

  <PartFilter v-model="filter" />

  <section class="module-list">
    <Module v-for="module in filteredModules" :module="module" />
  </section>
</template>

<style scoped>
.module-list {
  display: flex;
  flex-direction: column;
  gap: 32px;
}
</style>
