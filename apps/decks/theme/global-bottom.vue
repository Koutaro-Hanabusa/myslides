<script setup lang="ts">
import { onMounted, onUnmounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();

function notifyParent() {
  if (window.parent !== window) {
    window.parent.postMessage(
      { type: "myslides:slide", hash: `#${route.fullPath}` },
      window.location.origin,
    );
  }
}
function navigate(event: MessageEvent) {
  if (event.origin !== window.location.origin || event.source !== window.parent) return;
  if (
    event.data?.type === "myslides:navigate" &&
    /^#\/\d+(?:\?clicks=\d+)?$/.test(event.data.hash)
  ) {
    router.replace(event.data.hash.slice(1));
  }
}
watch(() => route.fullPath, notifyParent);
onMounted(() => {
  window.addEventListener("message", navigate);
  notifyParent();
});
onUnmounted(() => window.removeEventListener("message", navigate));
</script>

<template><span /></template>
