<script setup lang="ts">
defineProps<{ handle: () => void }>()
</script>

<template>
  <button @click="handle" class="uplode-btn">
    <IconUpload class="icon" />
  </button>
</template>

<style scoped>
.uplode-btn {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  aspect-ratio: 1.618 / 1;
  padding: 0;
  border: 3px dashed gray;
  border-radius: 8px;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    background-color: hsl(220, 8%, 98%);
  }
}

.icon {
  font-size: 6rem;
}
</style>
