<template>
    <div class="empty">
        {{ this.text }}
    </div>
</template>

<script>
    export default {
        name: "EmptySection",
        props: ['text'],
    }
</script>

<style>
    .empty{
        margin-top: 10px;
        margin-bottom: 10px;
        padding: 15px;
        text-align: center;
    }
</style>