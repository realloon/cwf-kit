<script setup lang="ts">
import { codeToHtml } from 'shiki'
import { useColorScheme } from '@/hooks/useColorScheme'
// ===
import json from '@/assets/db/reference.json?raw'
const { references }: ReferenceSchema = JSON.parse(json)
// ===

const { params } = useRoute()

const xmlDoc = references.find(r => r.id === params.id)!

const { isDark } = useColorScheme()
const html = ref()

onMounted(async () => {
  const formatted = await formatXml(xmlDoc.example)
  const hightlighted = await codeToHtml(formatted, {
    lang: 'xml',
    theme: isDark.value ? 'min-dark' : 'min-light',
  })

  html.value = hightlighted
})
</script>

<template>
  <article>
    <h2>
      <span class="name">{{ xmlDoc.id }}</span>
      <span class="value-type">{{ xmlDoc.valueType }}</span>
    </h2>

    <p class="path">{{ xmlDoc.path }}</p>
    <p>{{ xmlDoc.description }}</p>

    <h3>父元素</h3>
    <ul>
      <li v-for="el in xmlDoc.parents">{{ el }}</li>
    </ul>

    <h3>子元素</h3>
    <ul>
      <li v-for="el in xmlDoc.children">{{ el }}</li>
    </ul>

    <h3>示例</h3>
    <div v-html="html"></div>
  </article>
</template>

<style scoped>
article {
  line-height: 1.5;
  font-family: 'LXGW Wenkai';
}

h2 {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;

  .name {
    font-size: 1.25rem;
    font-weight: bold;
  }

  .value-type {
    font-family: var(--font-mono);
  }
}

.path {
  font-family: var(--font-mono);
}
</style>
