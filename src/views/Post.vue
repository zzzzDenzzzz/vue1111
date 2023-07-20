<template>
    <div class="post-page">
        <div class="post-content" v-if='this.post'>
            <h2>
                {{ this.post.title }}
            </h2>
            <p>
                {{ this.post.body }}
            </p>
        </div>
        <div class="d-flex justify-content-end">
            <span class="btn btn-primary" @click='this.$router.go(-1)'>
                Вернуться назад
            </span>
        </div>
    </div>
</template>

<script>
    import { getPost } from "@/services/index.js";

    export default {
        name: "Post",
        data(){
            return {
                post: null
            }
        },
        async created(){
            this.post = await this.getPost();
        },
        methods: {
            async getPost(){
                try {
                    const response = await getPost(this.$route.params.id);
                    return response.data;
                } catch (error) {
                    console.log(error)
                }
            }
        }
    }
</script>

<style>
    .post-page{
        margin: 0 auto;
        max-width: 80%;
        padding: 15px;
        border: 1px solid black;
        margin-top: 20px;
        margin-bottom: 20px;
    }
</style>
