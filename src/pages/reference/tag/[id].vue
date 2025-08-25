<script setup lang="ts">
import { codeToHtml } from 'shiki'
import TagLink from '../components/TagLink.vue'
import Children from '../components/Children.vue'

const route = useRoute()
const { isDark } = useColorScheme()
const { tagMap } = useReferences()

const html = ref()
const tag = computed(() => tagMap.get(route.params.id as string))
const updateAt = computed(() => dateFormater.format(tag.value?.updateAt))

watchEffect(async () => {
  const currentTagId = route.params.id as string
  if (!currentTagId) return

  const currentTag = tagMap.get(currentTagId)
  if (!currentTag) return

  const formatted = await formatXml(currentTag.example)

  const hightlighted = await codeToHtml(formatted, {
    lang: 'xml',
    theme: isDark.value ? 'min-dark' : 'min-light',
  })

  html.value = hightlighted
})
</script>

<template>
  <article v-if="tag">
    <h2>{{ tag.id }}</h2>

    <p class="description">{{ tag.description }}</p>

    <section class="path">
      <p>{{ tag.path }}</p>
    </section>

    <h3>Parents</h3>
    <ul>
      <li v-for="el in tag.parents">
        <TagLink :id="el" />
      </li>
    </ul>

    <section class="children">
      <h3>Children</h3>
      <ul>
        <li v-for="el in tag.children">
          <Children :el="el" />
        </li>
      </ul>
    </section>

    <section class="example">
      <h3>Example</h3>
      <div v-html="html"></div>
    </section>

    <p>
      Update at: <data :value="tag.updateAt">{{ updateAt }}</data>
    </p>
  </article>

  <h2 v-else>404</h2>
</template>

<style scoped>
article {
  line-height: 1.5;

  display: flex;
  flex-direction: column;
  gap: 8px;
}

h2 {
  font-size: 1.25rem;
  font-weight: bold;
}

h3 {
  font-weight: bold;
}

.path {
  width: fit-content;
  padding: 4px 8px;
  border: 1px solid var(--color-ui-back);
  border-radius: 4px;

  p {
    font-family: var(--font-mono);
  }
}
</style>
