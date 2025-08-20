<script setup lang="ts">
import FileButton from './FileButton.vue'
import ToggleButton from './ToggleButton.vue'
import OpacityButton from './OpacityButton.vue'

const { texture, isMinify = false } = defineProps<{
  texture: Texture
  isMinify?: boolean
}>()
</script>

<template>
  <section class="tex-set">
    <h3>{{ texture.name }}</h3>

    <div class="btns-wrappre">
      <FileButton :texture="texture" />

      <ToggleButton v-model="texture.shouldDisplay" :disabled="!texture.src">
        <template #open>
          <IconEye />
        </template>
        <template #close>
          <IconEyeClose />
        </template>
      </ToggleButton>

      <OpacityButton
        v-if="isMinify"
        v-model="texture.isMasked"
        :disabled="!texture.src"
      />
    </div>

    <div v-if="!isMinify" class="offset-wrapper">
      <label>
        <IconHorizontal />
        <input
          v-model="texture.x"
          :disabled="!texture.src"
          type="range"
          min="-72"
          max="320"
          name="x"
        />
        <input
          v-model="texture.x"
          :disabled="!texture.src"
          type="number"
          min="-72"
          max="320"
          name="x"
        />
      </label>

      <label>
        <IconVertical />
        <input
          v-model="texture.y"
          :disabled="!texture.src"
          type="range"
          min="-72"
          max="320"
          name="y"
        />
        <input
          v-model="texture.y"
          :disabled="!texture.src"
          type="number"
          min="-72"
          max="320"
          name="y"
        />
      </label>

      <!-- <label>
        <input type="number" :disabled="!texture.src" />
      </label> -->

      <!-- <label>
        <input type="number" :disabled="!texture.src" />
      </label> -->
    </div>
  </section>
</template>

<style scoped>
.tex-set {
  display: flex;
  flex-direction: column;
  gap: 4px;

  padding: 12px;
  border: 1px solid #edf2fa;
  background-color: #fff;
  border-radius: 4px;

  z-index: 1;
}

h3 {
  transform: translateY(-4px);
  font-family: var(--font-mono);
  font-weight: bold;
  color: gray;
}

.btns-wrappre {
  display: flex;
  align-items: center;
  gap: 8px;
}

.offset-wrapper {
  display: flex;
  flex-direction: column;
  gap: 4px;

  label {
    display: flex;
    align-items: center;
    gap: 4px;

    input[type='number'] {
      width: 5ch;
      font-family: var(--font-mono);
    }
  }
}
</style>
