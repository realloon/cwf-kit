<script setup lang="ts" generic="T">
defineOptions({ inheritAttrs: false })
defineProps<{ label: string; value: T }>()
const model = defineModel<readonly T[]>({ required: true })
</script>

<template>
  <label>
    <span>{{ label }}</span>
    <input v-bind="$attrs" v-model="model" :value="value" type="checkbox" />
  </label>
</template>

<style scoped>
label {
  display: flex;
  align-items: center;
}
</style>
