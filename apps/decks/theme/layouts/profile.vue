<template>
  <SlideFrame v-bind="$attrs">
    <div class="slide-profile">
      <div class="profile-photo"><slot name="photo" /></div>
      <div class="profile-details"><slot /></div>
    </div>
  </SlideFrame>
</template>
