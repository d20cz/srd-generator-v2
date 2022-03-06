<template>
    <div class="card">
        <p class="card__header">{{ header }}</p>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: [
            'header',
        ],
    }
</script>


<style scoped lang="scss">
.card {
  padding: 0.1rem 1.5rem;
  padding-bottom: 1rem;
  margin: 1rem 0;
  background-color: var(--card-bg-color);
  border-color: var(--card-red-border-color);
  border-width: 0.2rem;
  border-style: dashed;
  border-radius: 0.5rem;

  .card__header {
    font-weight: 600;
    margin-bottom: -0.4rem;
  }
}
</style>