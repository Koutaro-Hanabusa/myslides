<script setup lang="ts">
import { computed } from "vue";

defineOptions({ inheritAttrs: false });
const props = defineProps<{
  background?: string;
  backgroundColor?: string;
  contentStyle?: string;
  contentClass?: string;
  color?: string;
  variant?: string;
}>();
const backgroundStyle = computed(() => ({
  backgroundImage: props.background ? `url("${props.background}")` : undefined,
  backgroundColor: props.backgroundColor || "#191919",
}));
</script>

<template>
  <div class="myslides-layout" :style="backgroundStyle">
    <section
      class="myslides-content"
      :class="[contentClass, variant && `slide-${variant}`]"
      :style="[{ color }, contentStyle]"
    >
      <slot />
    </section>
  </div>
</template>
