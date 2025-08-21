<script setup lang="ts">
import icon from '@/assets/imgs/icon.avif'
</script>

<template>
  <section class="header">
    <img class="icon" :src="icon" alt="" />
    <p class="title">CustomizeWeaponFramework</p>

    <div>
      <button @click="$router.push('/guide')">Guide</button>
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

  button {
    padding: 0.5em 1em;
    background-color: #f1f1f1;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      background-color: #e5e5e5;
    }
  }
}
</style>
