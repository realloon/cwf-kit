<script setup lang="ts">
import { IconDev, IconBook, IconList, IconTexture } from '@/components/icons'
import NavItem from './components/NavItem.vue'
</script>

<template>
  <header>
    <section class="left">
      <h1><router-link to="/">CustomizeWeapon</router-link></h1>
      <IconDev class="dev-icon" />
    </section>

    <section class="right">
      <ul>
        <li>
          <NavItem name="Guide" to="/guide"><IconBook /></NavItem>
        </li>
        <li>
          <NavItem name="Modules" to="/modules">
            <IconList style="transform: scale(1.1)" />
          </NavItem>
        </li>
        <li>
          <NavItem name="Offset-calc" to="/offset-calc">
            <IconTexture />
          </NavItem>
        </li>
      </ul>
    </section>
  </header>
</template>

<style scoped>
header {
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-block-end: 8px;
}

.left,
.right {
  display: flex;
  align-items: center;
}

h1 {
  font-size: 1.25rem;
  font-weight: bold;
}

.dev-icon {
  font-size: 1.5rem;
  margin-left: 4px;
  transform: translateY(-1px);
}

ul {
  display: flex;
  gap: 2px;

  list-style: none;
  padding-inline-start: 0;
}
</style>
