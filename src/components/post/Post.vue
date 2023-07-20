<template>
    <div class="post">
        <div class="d-flex justify-content-between">
            <h3>
                {{ this.title }}
            </h3>
            <button type="button" class="close" @click='this.delete'>
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div v-if="this.user">
            <a :href="'mailto:' + this.user.email">{{ this.user.email }}</a>
        </div>
        <p>
            {{ this.text }}
        </p>
        <div class="d-flex justify-content-end">
            <span class="btn btn-primary" @click='this.$router.push("/news/"+this.id)'>Читать дальше</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Post",
        props: [
            'id',
            'title',
            'text',
            'user'
        ],
        methods: {
            delete(){
                this.$emit('delete')
            }
        }
    }
</script>

<style>
    .post{
        border: 1px solid black;
        padding: 15px;
        margin-top: 10px;
    }
    .post:last-child{
        margin-bottom: 10px;
    }
</style>
