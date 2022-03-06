<template>
    <div class="component-example">
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
    .component-example {
        border-left: 0.2rem solid blueviolet;
        padding-left: 1rem;
        color: blueviolet;
    }
</style>
