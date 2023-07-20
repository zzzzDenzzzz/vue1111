<template>
    <section class="posts">
        <div v-for="(post, index) in this.posts" v-if="this.posts.length">
            <Post
                @delete="this.deletePost(post.id)"
                :id="post.id"
                :title="post.title"
                :text="post.body"
                :user="post.user"
            />
        </div>
        <div v-else>
            <EmptySection text="Еще нет ни одного поста!"/>
        </div>
        <div class="addForm">
            <div class="border rounded p-3">
                <div class="form-group">
                    <label for="exampleFormControlInput1">
                        Название поста <span class='text-danger'>*</span>
                    </label>
                    <input :class='{ "with-error": this.error.title }' v-model='this.title' type="text" class="form-control">
                    <small v-if='this.error.title' class="form-text text-danger">Заполните заголовок</small>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">
                        Текст <span class='text-danger'>*</span>
                    </label>
                    <textarea :class='{ "with-error": this.error.text }' v-model='this.text' class="form-control"></textarea>
                    <small v-if='this.error.text' class="form-text text-danger">Заполните текст</small>
                </div>
                <button class="btn btn-primary" @click="createPost">
                    Отправить
                </button>
            </div>
        </div>
    </section>
</template>

<script>
    import Post from "@/components/post/Post.vue"
    import EmptySection from "@/components/EmptySection.vue";
    import { getPosts, getUsers } from "@/services/index.js"

    export default {
        name: "News",
        components: {
            Post,
            EmptySection
        },
        async created(){
            this.posts = await this.getPosts();
            this.users = await this.getUsers();
            this.mappingUsersWithPosts();
        },
        data(){
            return {
                title: "",
                text: "",
                error: {
                    title: false,
                    text: false,
                },
                posts: [],
            }
        },
        methods: {
            async getPosts(){
                try {
                    const response = await getPosts();
                    return response.data;
                } catch (error) {
                    return [];
                }
            },
            async getUsers(){
                try {
                    const response = await getUsers();
                    return response.data;
                } catch (error) {
                    return [];
                }
            },
            mappingUsersWithPosts(){
                this.posts.forEach(post => {
                    post.user = this.users.find(u => u.id == post.userId);
                });
            },
            createPost(){
                if(this.text && this.title){
                    this.posts.push({
                        title: this.title,
                        body: this.text
                    });

                    this.title = "";
                    this.text = "";

                    this.error.title = false;
                    this.error.text = false;
                }else{
                    this.error.title = !this.title;
                    this.error.text = !this.text;
                }
            },
            deletePost(id){
                this.posts = this.posts.filter(post => post.id != id);
            }
        },
        watch: {
            title(value){
                this.error.title = false;
            },
            text(value){
                this.error.text = false;
            }
        }
    }
</script>

<style>
    .posts{
        margin: 0 auto;
        max-width: 80%;
    }
    .addForm{
        margin-top: 15px;
        margin-bottom: 15px;
    }
</style>
