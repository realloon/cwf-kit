<script setup lang="ts">
import introduce from '@/contents/introduce.md?raw'
import Header from './components/Header.vue'
import { useHead } from '@vueuse/head'
definePage({ path: '/' })

useHead({
  meta: [
    {
      name: 'description',
      content:
        'Customize Weapon mod build-in framework: CustomizeWeaponFramework',
    },
  ],
})
</script>

<template>
  <Header />
  <Markdown :markdown="introduce" />
</template>
