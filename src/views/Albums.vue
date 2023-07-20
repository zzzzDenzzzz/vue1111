<template>
    <section class="albums">
        <div v-for="(albums, index) in this.albums" v-if="this.albums.length">
            <Album
                :id="albums.id"
                :title="albums.title"
            />
        </div>
    </section>
</template>

<script>
    import Album from "@/components/album/Album.vue"
    import { _getAlbums } from "@/services/index.js"

    export default {
        name: "Albums",
        components: {
            Album
        },
        async created(){
            this.albums = await this.getAlbums();
        },
        data(){
            return {
                albums: [],
            }
        },
        methods: {
            async getAlbums(){
                try {
                    const response = await _getAlbums();
                    return response.data;
                } catch (error) {
                    return [];
                }
            },
        },
    }
</script>

<style>
    .albums{
        margin: 0 auto;
        max-width: 80%;
    }
</style>