<script setup lang="ts">
defineProps<{ language?: string }>();
</script>

<template>
  <div class="code-panel">
    <div v-if="language" class="code-panel-bar">
      <span>{{ language }}</span>
    </div>
    <slot />
  </div>
</template>
