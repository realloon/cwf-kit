<script setup lang="ts">
definePageMeta({ layout: 'reference' })
const route = useRoute()
const { data: tag } = await useFetch(`/api/reference/tag/${route.params.id}`)

const formated = await formatXml(tag.value?.example ?? '')

const enumDetail = await (async () => {
  let enumRef: string | null = null
  if (tag.value?.content.type === 'enum') {
    enumRef = tag.value.content.ref
  } else if (
    tag.value?.content.type === 'array' &&
    tag.value.content.items.type === 'enum'
  ) {
    enumRef = tag.value.content.items.ref
  }
  if (!enumRef) return
  const { data } = await useFetch(`/api/reference/enum/${enumRef}`)
  return data.value
})()
</script>

<template>
  <article>
    <h1>{{ tag?.id }}</h1>

    <section v-if="tag?.attributes">
      <h2>Attributes</h2>
      <ul>
        <li v-for="attribute in tag.attributes">{{ attribute }}</li>
      </ul>
    </section>

    <section class="description">
      <span v-if="tag?.description">{{ tag.description }}</span>
      <span class="empty" v-else>empty</span>
    </section>

    <p class="path">{{ tag?.paths.join(' > ') }}</p>

    <section v-if="tag?.parents" class="parents">
      <h2>Parents</h2>
      <ul>
        <li v-for="parent in tag.parents">
          <span class="tag">{{ parent }}</span>
        </li>
      </ul>
    </section>

    <section v-if="tag?.content" class="content">
      <h2>Content</h2>

      <template v-if="tag.content.type === 'array'">
        <ul>
          <li class="tag">li</li>

          <ul class="nest-ul" v-if="tag.content.items.type === 'enum'">
            <p>
              <span>type: </span>
              <nuxt-link :to="`/reference/enum/${tag.content.items.ref}`">
                <code>{{ tag.content.items.ref }}</code>
              </nuxt-link>
              <span> (enum)</span>
            </p>
            <ul>
              <li v-for="item in enumDetail?.values">
                <code>{{ item }}</code>
              </li>
            </ul>
          </ul>

          <!-- nest tags -->
          <ul v-else-if="tag.content.items.type === 'object'">
            <li v-for="item in tag.content.items.properties">
              <span class="tag">{{ item.ref }}</span>
              <span class="optional" v-if="!item.required">optional</span>
            </li>
          </ul>

          <p v-else>
            type: <code>{{ tag.content.items.type }}</code>
          </p>
        </ul>
      </template>

      <template v-else>
        <ul v-if="tag.content.type === 'object'">
          <li v-for="item in tag.content.properties">
            <span class="tag">{{ item.ref }}</span>
            <span class="optional" v-if="!item.required">optional</span>
          </li>
        </ul>

        <ul v-else>
          <li v-if="tag.content.type === 'enum'">
            <p>
              <span>type: </span>
              <nuxt-link :to="`/reference/enum/${tag.content.ref}`">
                <code>{{ tag.content.ref }}</code>
              </nuxt-link>
              <span> (enum)</span>
            </p>
            <ul>
              <li v-for="item in enumDetail?.values">
                <code>{{ item }}</code>
              </li>
            </ul>
          </li>

          <li v-else>
            type: <code>{{ tag.content.type }}</code>
          </li>
        </ul>
      </template>
    </section>

    <section v-if="tag?.example" class="example">
      <h2>Example</h2>
      <shiki :code="formated" lang="xml" />
    </section>
  </article>
</template>

<style scoped>
article {
  line-height: 1.5;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

h1 {
  font-family: var(--font-mono);
  font-weight: bold;
  font-size: 1.25rem;

  &::before {
    content: '<';
  }

  &::after {
    content: '>';
  }
}

.path {
  font-size: 0.875rem;
  font-family: var(--font-mono);

  width: fit-content;
  padding: 4px 8px;
  border: 1px solid #f0f0f0;
  border-radius: 4px;
}

.nest-ul {
  padding-inline-start: unset;
}

.example {
  font-size: 14px;
}

.empty {
  font-style: italic;
  color: gray;
}

.tag {
  font-family: var(--font-mono);

  &::before {
    content: '<';
  }

  &::after {
    content: '>';
  }
}

.optional {
  color: gray;
  font-size: 0.875em;
  font-family: var(--font-mono);
  margin-inline-start: 0.5em;
}
</style>
