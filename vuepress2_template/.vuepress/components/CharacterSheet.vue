<template>
  <div class="character-sheet">
    <div class="character-sheet__header">{{ header }}</div>
    <div class="character-sheet__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'header',
  ],
  data() {
    return {};
  }
}
</script>


<style scoped lang="scss">

.character-sheet {
  margin: 1rem 0.2rem;
  padding: 0;
  border: indigo solid 0.2rem;
  box-sizing: border-box;
  border-radius: 0 0 2rem 0;
  box-shadow: 5px 5px 10px -1px rgba(75,0,130,0.5);

  &__header {
    margin: -1px;
    padding: 0.5rem 1.5rem;
    font-size: 150%;
    font-weight: bold;
    color: white;
    background-color: indigo;
    border: 0;
  }

  &__content {
    padding: 0.5rem 1.5rem;
  }
  .fate-font {
    font-size: 130%;
  }
}
</style>
