<script setup lang="ts">
import { computed } from "vue";
const props = defineProps<{
  background?: string;
  backgroundColor?: string;
  contentStyle?: string;
  contentClass?: string;
}>();
const backgroundStyle = computed(() => ({
  backgroundImage: props.background ? `url("${props.background}")` : undefined,
  backgroundColor: props.backgroundColor || "#191919",
}));
</script>

<template>
  <div class="myslides-layout" :style="backgroundStyle">
    <section class="myslides-content" :class="contentClass" :style="contentStyle">
      <slot />
    </section>
  </div>
</template>
