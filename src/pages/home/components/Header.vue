<script setup lang="ts">
import icon from '@/assets/imgs/icon.avif'
</script>

<template>
  <section class="header">
    <img class="icon" :src="icon" alt="" />
    <p class="title">CustomizeWeaponFramework</p>

    <div>
      <text-button to="/wiki">Wiki</text-button>
      <text-button to="/guide">Guide</text-button>
      <text-button to="/reference">API Reference</text-button>
    </div>
  </section>
</template>

<style scoped>
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-block: 48px 80px;
}

.icon {
  width: 168px;
  aspect-ratio: 1 / 1;
}

.title {
  font-size: 2.25rem;
  font-weight: bold;
  font-family: var(--font-mono);
}

div {
  display: flex;
  gap: 16px;
  margin-top: 32px;
}
</style>
