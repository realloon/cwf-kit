/// <reference types="vite/client" />
/// <reference types="wicg-file-system-access" />
/// <reference types="unplugin-vue-router/client" />

declare module 'virtual:generated-layouts' {
  import { RouteRecordRaw } from 'vue-router'
  export function setupLayouts(routes: RouteRecordRaw[]): RouteRecordRaw[]
}
