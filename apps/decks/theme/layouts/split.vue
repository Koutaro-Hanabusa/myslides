<template>
  <SlideFrame v-bind="$attrs" variant="split">
    <div class="split-copy"><slot /></div>
    <aside class="split-image"><slot name="right" /></aside>
  </SlideFrame>
</template>
