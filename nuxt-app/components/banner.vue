<template>
  <div class="banner">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/variables' as vars;
@use '~/assets/scss/mixins' as mix;

.banner {
  @include mix.flex-center;
  background: vars.$main-bg;
  padding: vars.$spacing-unit * 2;
  margin: vars.$spacing-unit 0;
  font-family: vars.$accent-font;
  border: vars.$border;
  text-align: center;
  
  @media (min-width: 768px) {
    padding: vars.$spacing-unit * 3;
  }
}
</style>