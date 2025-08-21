<script setup lang="ts">
import { useDefDatabase } from './hooks/useDefDatabase'

const { readDefDatabaseByJson } = useDefDatabase()
readDefDatabaseByJson()
</script>

<template>
  <router-view />
</template>
