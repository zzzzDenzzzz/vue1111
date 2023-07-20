<template>
    <div class="album">
        <div class="d-flex justify-content-between">
            <h3>
                {{ this.title }}
            </h3>
        </div>
        <div class="d-flex justify-content-end">
            <RouterLink to='/photos' class="btn btn-primary">
                Смотреть
            </RouterLink>
        </div>
    </div>
</template>

<script>
    import { RouterLink, RouterView } from 'vue-router'

    export default {
        name: "Album",
        props: [
            'id',
            'title',
        ],
    }
</script>

<style>
    .album{
        border: 1px solid black;
        padding: 15px;
        margin-top: 10px;
    }
    .album:last-child{
        margin-bottom: 10px;
    }
</style>