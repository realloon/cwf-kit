<script setup lang="ts">
import NavItem from './components/NavItem.vue'

const isSticky = ref(false)
const observerTarget = useTemplateRef('observerTarget')

onMounted(() => {
  if (!observerTarget.value) return

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      isSticky.value = !entry.isIntersecting
    })
  })

  observer.observe(observerTarget.value)
})
</script>

<template>
  <div ref="observerTarget"></div>
  <header :class="isSticky && 'is-sticky'">
    <section class="left">
      <h1><router-link to="/">Customize Weapon</router-link></h1>
      <IconDev class="dev-icon" />
    </section>

    <section class="right">
      <ul>
        <li>
          <NavItem name="Guide" to="/guide"><IconBook /></NavItem>
        </li>
        <li>
          <NavItem name="API" to="/reference"><IconNote /></NavItem>
        </li>
        <li>
          <NavItem name="Modules" to="/modules">
            <IconList style="transform: scale(1.1)" />
          </NavItem>
        </li>
        <li>
          <NavItem name="Offset-calc" to="/offset-calc">
            <IconTexture />
          </NavItem>
        </li>
      </ul>
    </section>
  </header>
</template>

<style scoped>
header {
  --width: min(1080px, 100%);
  height: 48px;
  padding-inline: calc((100% - var(--width)) / 2 + 16px);
  margin-inline: -16px; /* body padding */
  margin-bottom: 16px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: sticky;
  top: 0;

  background-color: var(--color-page);

  &.is-sticky {
    box-shadow: 0 1px 5px #00000026;
  }
}

.left,
.right {
  display: flex;
  align-items: center;
}

h1 {
  font-size: 1.25rem;
  font-weight: bold;
}

.dev-icon {
  font-size: 1.5rem;
  margin-left: 4px;
  transform: translateY(-1px);
}

ul {
  display: flex;
  gap: 2px;

  list-style: none;
  padding-inline-start: 0;
}
</style>
