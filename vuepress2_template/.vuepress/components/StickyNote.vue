<template>
  <div :class="classObject">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: [
    'type',
  ],
  data() {
    return {};
  },
  computed: {
    classObject() {
      return {
        'component-sticky-note': true,
        'component-sticky-note--left': this.type === 'left',
        'component-sticky-note--right': this.type === 'right',
      }
    }
  }
}
</script>


<style lang="scss">
.component-sticky-note {
  text-decoration: none;
  color: #000;
  background: #ffc;
  display: block;
  max-width: 20em;
  padding: 0.5em 1em;
  box-shadow: 5px 5px 7px -2px rgba(33, 33, 33, .5);
  margin: 0.25rem auto;
  p {
    margin: 0;
  }
  //&--left {
  //  float: left;
  //  margin: 0.5rem 3rem 0.5rem 0.5rem ;
  //}
  //&--right {
  //  float: right;
  //  margin: 0.5rem 0.5rem 0.5rem 3rem;
  //}
}

.component-sticky-note .component-ivy,
.component-sticky-note .component-kincaid {
  display: block;
}
</style>
