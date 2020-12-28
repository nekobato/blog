<template>
  <div class="container">
    <slot />
  </div>
</template>

<style lang="postcss" scoped>
@import "~/styles/breakpoints.pcss";

.container {
  width: 640px;
  margin: auto;

  @media (--viewport-sp) {
    width: 100%;
    padding: 16px;
  }
}
</style>
