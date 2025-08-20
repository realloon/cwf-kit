<script setup lang="ts">
import { parse } from 'marked'
import { codeToHtml } from 'shiki'

const { markdown, hasToc = false } = defineProps<{
  markdown: string
  hasToc?: boolean
}>()

interface Title {
  id: string
  title: string
  target: HTMLHeadingElement
}

const html = ref('')
const articleRef = useTemplateRef('article')
const toc = ref<Title[]>([])
const activeTitleId = ref('')

let observer: IntersectionObserver | null = null

onMounted(async () => {
  const doc = document.createElement('article')
  doc.innerHTML = await parse(markdown)

  const pres = doc.querySelectorAll('pre')

  await Promise.all(
    Array.from(pres).map(async pre => {
      const codeEl = pre.querySelector('code')
      if (!codeEl) return

      const lang = codeEl.classList.value.replace('language-', '') || 'txt'
      const code = codeEl.textContent ?? ''

      pre.outerHTML = await codeToHtml(code, {
        lang,
        theme: 'min-light',
      })
    })
  )

  html.value = doc.innerHTML

  await nextTick()

  const article = articleRef.value
  if (!article) return

  const observerCallback: IntersectionObserverCallback = entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activeTitleId.value = entry.target.id
      }
    })
  }

  const observerOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: '-49px 0px -90% 0px',
    threshold: 0,
  }

  observer = new IntersectionObserver(observerCallback, observerOptions)
  const titles = article.querySelectorAll('h2')

  titles.forEach(title => {
    const id = title.textContent ?? ''
    title.id = id

    toc.value.push({
      id,
      title: id,
      target: title,
    })

    observer?.observe(title)
  })
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

<template>
  <article class="markdown">
    <section v-html="html" ref="article"></section>
    <aside class="toc" v-if="hasToc">
      <h2>Content</h2>
      <ul>
        <li
          v-for="title in toc"
          @click="title.target.scrollIntoView({ behavior: 'smooth' })"
          :class="activeTitleId === title.id && 'is-active'"
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
    font-size: 1.5rem;
    font-weight: bold;
  }

  h2 {
    font-size: 1.25rem;
    font-weight: bold;
    scroll-margin-top: 49px;
  }

  h3 {
    font-weight: bold;
  }

  p {
    margin-block-end: 0.5rem;

    code {
      font-style: italic;
    }
  }

  ul,
  ol {
    padding-inline-start: 2rem;
    
    li::marker {
      font-family: var(--font-mono);
    }
  }

  blockquote {
    margin: 0;
    padding-inline-start: calc(1em - 4px);
    border-inline-start: 4px solid #efefef;
  }

  pre {
    background-color: #fff;
    margin-block-end: 0.5rem;
  }

  a {
    color: #0e0ebd;
  }
}

.toc {
  position: sticky;
  top: 57px;
  flex-shrink: 0;
  flex-basis: 14rem;

  ul {
    padding-inline-start: 0;
    list-style-type: none;

    &:where(:hover li) {
      color: var(--color-font);
    }
  }

  li {
    color: gray;
    font-size: 0.875rem;
    padding: 0.5em 1em;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.2s;

    &.is-active {
      color: var(--color-font);
      background-color: #efefef;
    }

    &:hover {
      color: #0769da;
    }
  }
}
</style>
