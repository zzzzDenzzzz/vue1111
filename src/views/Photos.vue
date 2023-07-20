<template>
    <section class="photos">
        <div v-for="(photos, index) in this.photos" v-if="this.photos.length">
            <Photo
                :id="photos.id"
                :title="photos.title"
                :image="photos.thumbnailUrl"
                :albumId="photos.albumId"
            />
        </div>
    </section>
</template>

<script>
    import Photo from "@/components/photo/Photo.vue"
    import { _getPhotosByAlbumId, _getAlbums } from "@/services/index.js"

    export default {
        name: "Photos",
        components: {
            Photo
        },
        async created(){
            this.photos = await this.getPhotos();
            this.album = await this.getAlbums();
        },
        data(){
            return {
                id: 1,
                photos: [],
            }
        },
        methods: {
            async getPhotos(){
                try {
                    const response = await _getPhotosByAlbumId(this.id);
                    console.log(response)
                    return response.data;
                } catch (error) {
                    console.log(error)
                    return [];
                }
            },
            async getAlbums(){
                try {
                    const response = await _getAlbums();
                    console.log(response.data)
                    return response.data;
                } catch (error) {
                    console.log(error)
                    return [];
                }
            },
        },
    }
</script>

<style>
    .photos{
        margin: 0 auto;
        max-width: 80%;
    }
</style>