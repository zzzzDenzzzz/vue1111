<template>
    <div class="photo">
        <div class="d-flex justify-content-between">
            <h3>
                {{ title }}
            </h3>
        </div>
        <img :src="this.image" alt="">
    </div>
</template>

<script>
    export default {
        name: "Photo",
        props: [
            'title',
            'image',
            'id'
        ],
    }
</script>

<style>
    .photo{
        border: 1px solid black;
        padding: 15px;
        margin-top: 10px;
    }
    .photo:last-child{
        margin-bottom: 10px;
    }
</style>