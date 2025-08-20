<script setup lang="ts">
import StatDisplay from './StatDisplay.vue'
defineProps<{ module: TraitModule }>()
</script>

<template>
  <section>
    <h2>
      <span class="italic">{{ module.modExtensions.li[0].part }}</span>
      {{ module.defName }}
    </h2>

    <div class="main-view">
      <p>
        <span class="key">Label</span>:
        <code class="value">{{ module.label }}</code>
      </p>
      <p style="line-height: 1.2">
        <span class="key">Description</span>:
        <code class="value">{{ module.description }}</code>
      </p>
      <p>
        <span class="key">WorkToMake</span>:
        <code class="value">{{ module.statBases.WorkToMake }}</code>
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
  font-family: var(--font-mono);
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
  font-family: var(--font-mono);

  .key {
    font-weight: bold;
  }
}
</style>
