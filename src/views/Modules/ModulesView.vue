<script setup lang="ts">
import { computed, ref } from 'vue'
import { useModuleDB } from './helpers'
import Module from './components/Module.vue'
import { parts } from '@/types/Defs'
const { moduleDB } = useModuleDB()

const partsFilter = ref(parts)
const filteredModules = computed(() =>
  moduleDB.value.filter(module =>
    partsFilter.value.includes(module.modExtensions.li[0].part)
  )
)
</script>

<template>
  <main>
    <!-- <h1>Modules</h1> -->

    <section class="part-filter">
      <label v-for="part in parts">
        <span>{{ part }}</span>
        <input
          v-model="partsFilter"
          :value="part"
          type="checkbox"
          name="parts"
        />
      </label>
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
  margin-block-end: 24px;

  label {
    display: flex;
    align-items: center;
  }
}

.module-list {
  display: flex;
  flex-direction: column;
  gap: 32px;
}
</style>
