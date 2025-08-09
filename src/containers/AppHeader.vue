<script setup lang="ts">
import { routes } from '@/router'
import { capitalize } from '@/utils';
</script>

<template>
  <header>
    <h1><router-link to="/">CustomizeWeapon DevKit</router-link></h1>
    <nav>
      <ul>
        <li v-for="route in routes.filter(route => route.name !== 'home')">
          <router-link :to="route.path">
            {{ capitalize(route.name) }}
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  height: 48px;
}

h1 {
  font-size: 1.25rem;
  font-weight: bold;

  a {
    color: inherit;
    text-decoration: unset;
  }
}

ul {
  display: flex;
  list-style: none;
  gap: 1rem;
}
</style>
