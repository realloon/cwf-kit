<script setup lang="ts">
definePageMeta({ layout: 'reference' })
const route = useRoute()
const { data: tag } = await useFetch(`/api/reference/tag/${route.params.id}`)
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

      <!-- enum -->
      <ul
        v-if="tag.content.type === 'array' && tag.content.items.type === 'enum'"
      >
        <li class="tag">li</li>
        <p>
          type: <code>{{ tag.content.items.ref }}</code> (enum)
        </p>
        <ul>
          <li v-for="item in tag.content.items.ref">{{ item }}</li>
        </ul>
      </ul>

      <!-- nest tags -->
      <ul
        v-if="
          tag.content.type === 'array' && tag.content.items.type === 'object'
        "
      >
        <li v-for="item in tag.content.items.properties">
          <span class="tag">{{ item.ref }}</span>
        </li>
      </ul>
    </section>

    <pre style="font-size: 12px; line-height: 1.2">{{ tag?.example }}</pre>
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
</style>
