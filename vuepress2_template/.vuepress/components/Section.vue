<template>
    <span class="component-section">
        <slot></slot>
    </span>
</template>

<script>
    export default {
        name: 'Section',
        props: [],
        data() {
            return {};
        }
    }
</script>


<style lang="scss">
    .component-section {
        color: indigo;
        font-size: 120%;
        font-weight: bold;
    }
</style>
