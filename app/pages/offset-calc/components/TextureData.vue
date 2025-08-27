<script setup lang="ts">
import FileButton from './FileButton.vue'
import DisplayButton from './DisplayButton.vue'
import MaskButton from './MaskButton.vue'
import OffsetEditor from './OffsetEditor.vue'

const { hasEditor = true } = defineProps<{
  texture: Texture
  hasEditor?: boolean
}>()
</script>

<template>
  <div class="texture-data">
    <h2 class="part-name" :class="!texture.src && 'is-opacity'">
      {{ texture.name }}
    </h2>

    <div class="btns">
      <file-button v-model="texture.src" />
      <display-button v-model="texture.isDisplay" :disabled="!texture.src" />
      <mask-button v-model="texture.isMask" />
    </div>

    <div v-if="hasEditor" class="editor">
      <offset-editor v-model="texture.x">
        <icon name="mdi:format-horizontal-align-center" />
      </offset-editor>
      <offset-editor v-model="texture.y">
        <icon name="mdi:format-vertical-align-center" />
      </offset-editor>
    </div>
  </div>
</template>

<style scoped>
.texture-data {
  width: fit-content;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  gap: 8px;
}

.part-name {
  font-weight: bold;

  &.is-opacity {
    opacity: 0.5;
  }
}

.btns {
  display: flex;
  gap: 8px;
}

.editor {
  display: flex;
  flex-direction: column;
}
</style>
