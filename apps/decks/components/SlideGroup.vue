<script setup lang="ts">
withDefaults(defineProps<{ as?: string; bare?: boolean }>(), { as: "div", bare: false });
</script>

<template>
  <component :is="as" :class="{ 'slide-group-bare': bare }"><slot /></component>
</template>
