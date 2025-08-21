<script setup lang="ts">
import { useDefDatabase } from '@/hooks/useDefDatabase'

const { defDatabase } = useDefDatabase()

const weaponDefs = computed(() =>
  defDatabase.value.ThingDef.filter(t =>
    t.comps?.li.some(
      (c: { [x: string]: string }) =>
        c['@_Class'] === 'CWF.CompProperties_DynamicTraits'
    )
  )
)
</script>

<template>
  <h1>TODO</h1>
  <!-- <div v-for="weaponDef in weaponDefs">
  </div> -->
</template>

<style scoped></style>
