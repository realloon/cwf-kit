<script setup lang="ts"></script>

<template>
  <header>
    <h1>
      <nuxt-link to="/">Customize Weapon</nuxt-link>
      <icon name="mdi:dev-to" style="transform: translateY(0.1em)" />
    </h1>

    <nav>
      <ul>
        <li><nuxt-link to="reference">API</nuxt-link></li>
        <li><nuxt-link to="offset-calc">offset-calc</nuxt-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  box-sizing: border-box;
  width: var(--width-max);
  height: 48px;
  padding-inline: var(--padding-page);

  display: flex;
  align-items: center;
  gap: 1rem;
}

h1 {
  font-size: 1.25rem;
  font-family: var(--font-serif);

  display: flex;
  align-items: center;
  gap: 0.25rem;
}

ul {
  list-style: none;

  display: flex;
  gap: 1rem;
}
</style>
