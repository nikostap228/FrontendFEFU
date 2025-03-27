<template>
  <div class="card">
    <h3 v-if="title" class="card__title">{{ title }}</h3>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string
}>();
</script>

<style lang="scss" scoped>
@use '~/assets/scss/variables' as v;
@use '~/assets/scss/mixins' as mix;

.card {
  @include mix.card-style;
  
  &__title {
    font-family: v.$accent-font;
    margin-bottom: v.$spacing-unit;
  }
}
</style>