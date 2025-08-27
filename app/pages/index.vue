<script lang="ts" setup></script>

<template>
  <section class="banner">
    <img src="/icon.avif" alt="" />
    <h1>CustomizeWeaponFramework</h1>

    <nav>
      <common-button>
        <nuxt-link>Wiki</nuxt-link>
      </common-button>
      <common-button>
        <nuxt-link>Guide</nuxt-link>
      </common-button>
      <common-button>
        <nuxt-link to="reference">API Reference</nuxt-link>
      </common-button>
    </nav>
  </section>
</template>

<style scoped>
.banner {
  margin-top: 24px;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 168px;
    aspect-ratio: 1 / 1;
  }

  h1 {
    font-size: 2.25rem;
    font-family: monospace;
  }

  nav {
    margin-top: 24px;

    display: flex;
    align-items: baseline;
    gap: 1rem;
  }
}
</style>
