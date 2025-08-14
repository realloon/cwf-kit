<script setup lang="ts">
import { ref, useTemplateRef, onMounted } from 'vue'
import { parse } from 'marked'
const { markdown, hasToc = false } = defineProps<{
  markdown: string
  hasToc?: boolean
}>()

interface Title {
  title: string
  target: HTMLHeadingElement
}

const articleRef = useTemplateRef('article')
const toc = ref<Title[]>([])

onMounted(() => {
  const article = articleRef.value
  if (!article) return

  const titles = article.querySelectorAll('h2')
  titles.forEach(title => {
    title.id = title.textContent ?? ''
    toc.value.push({
      title: title.textContent ?? '',
      target: title,
    })
  })
})
</script>

<template>
  <article class="markdown">
    <section v-html="parse(markdown)" ref="article"></section>
    <aside class="toc" v-if="hasToc">
      <h2>Content</h2>
      <ul>
        <li
          v-for="title in toc"
          @click="title.target.scrollIntoView({ behavior: 'smooth' })"
        >
          {{ title.title }}
        </li>
      </ul>
    </aside>
  </article>
</template>

<style scoped>
article {
  display: flex;
  align-items: flex-start;
  gap: 40px;

  line-height: 1.5;
  font-family: 'LXGW Wenkai', sans-serif;
}

article:deep() {
  h1 {
    font-size: 1.25rem;
    font-weight: bold;
  }

  h2 {
    font-weight: bold;
  }

  p {
    margin-block-end: 0.5rem;
  }

  ul,
  ol {
    padding-inline-start: 2rem;
  }
}

.toc {
  position: sticky;
  top: 16px;
  flex-shrink: 0;
  flex-basis: 14rem;

  ul {
    padding-inline-start: 0;
    list-style-type: none;
  }

  li {
    font-weight: bold;
    padding-block: 0.2em;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
