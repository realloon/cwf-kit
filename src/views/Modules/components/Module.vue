<script setup lang="ts">
import type { TraitModule } from '@/types/Defs'
import StatDisplay from './StatDisplay.vue'
defineProps<{ module: TraitModule }>()
</script>

<template>
  <section>
    <h2>
      <span class="italic">{{ module.modExtensions.li[0].part }}</span> {{ module.defName }}
    </h2>

    <div class="main-view">
      <p>
        Label: <code>{{ module.label }}</code>
      </p>
      <p>
        Description: <code>{{ module.description }}</code>
      </p>
      <p>
        WorkToMake: <code>{{ module.statBases.WorkToMake }}</code>
      </p>

      <StatDisplay label="CostList" :code="module.costList" />
      <StatDisplay label="StatOffsets" :code="module.statOffsets" />
      <StatDisplay label="StatFactors" :code="module.statFactors" />
      <!-- <pre>{{ module }}</pre> -->
    </div>
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

h2 {
  font-weight: bold;
  font-family: monospace;
  color: #333;
}

.main-view {
  display: flex;
  flex-direction: column;
  gap: 8px;

  background-color: #efefef;
  padding: 16px;
  border-radius: 4px;
}

p {
  font-family: monospace;
  font-weight: bold;

  code {
    font-weight: initial;
  }
}
</style>
