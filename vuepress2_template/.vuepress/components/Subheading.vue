<template>
  <div class="component-subheading">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: [],
  data() {
    return {};
  }
}
</script>


<style scoped lang="scss">
.component-subheading {
  color: #999999;
  font-size: 140%;
  font-weight: 500;
  margin-top: -1rem;
}
</style>
