<script setup lang="ts">
interface XmlElement {
  id: string
  type: 'tag' | 'LiWithClass'
  path: string
  description: string
  valueType: 'class' | 'enum'
  attributes: Array<string>
  parents: Array<string>
  children: Array<string>
  example: string
}

interface Attribute {
  name: string
  value: string | number | boolean
}

const dynamicTraits: XmlElement = {
  id: 'DynamicTraits',
  type: 'LiWithClass',
  path: 'Defs > ThingDef > comps > li[Class="CWF.CompProperties_DynamicTraits"]',
  description: '为武器添加武器模块支持',
  valueType: 'class',
  attributes: [],
  parents: ['comps'],
  children: ['supportParts', 'defaultWeaponTraitDefs'],
  example:
    '<li Class="CWF.CompProperties_DynamicTraits">\n<supportParts>\n<li>Muzzle</li>\n<li>Barrel</li>\n<li>Receiver</li>\n<li>Trigger</li>\n<li>Stock</li>\n<li>Grip</li>\n<li>Sight</li>\n<li>Magazine</li>\n<li>Underbarrel</li>\n<li>Ammo</li>\n</supportParts>\n</li>',
}

const supportParts: XmlElement = {
  id: 'supportParts',
  type: 'tag',
  path: 'Defs > ThingDef > comps > li[Class="CWF.CompProperties_DynamicTraits" > supportParts]',
  description: '武器支持的改装部件',
  valueType: 'enum',
  attributes: [],
  parents: ['comps'],
  children: ['supportParts', 'defaultWeaponTraitDefs'],
  example:
    '<supportParts><li>Muzzle</li><li>Barrel</li><li>Receiver</li><li>Trigger</li><li>Stock</li><li>Grip</li><li>Sight</li><li>Magazine</li><li>Underbarrel</li><li>Ammo</li></supportParts>',
}
</script>

<template>
  <section>
    <h2>
      <span class="name">{{ dynamicTraits.id }}</span>
      <span class="value-type">{{ dynamicTraits.valueType }}</span>
    </h2>

    <p class="path">{{ dynamicTraits.path }}</p>
    <p>{{ dynamicTraits.description }}</p>

    <h3>父元素</h3>
    <ul>
      <li v-for="el in dynamicTraits.parents">{{ el }}</li>
    </ul>

    <h3>子元素</h3>
    <ul>
      <li v-for="el in dynamicTraits.children">{{ el }}</li>
    </ul>

    <h3>示例</h3>
    <pre>{{ dynamicTraits.example }}</pre>
  </section>
</template>

<style scoped>
section {
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
