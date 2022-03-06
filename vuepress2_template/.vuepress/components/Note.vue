<template>
    <span class="component-note">
        <slot></slot>
    </span>
</template>

<script>
export default {
  name: 'Note',
  props: [],
  data() {
    return {};
  }
}
</script>


<style scoped lang="scss">
.component-note {
  display: inline-block;
  padding: 0 0.2rem;
  border-radius: 40%;
  border: 0.2rem solid darkred;
}
</style>
