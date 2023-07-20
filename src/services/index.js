import axios from "axios"
export const apiBase = "https://jsonplaceholder.typicode.com";

const $api = axios.create({
    baseURL: apiBase,
})

export const getPosts = async () => {
    return await $api.get('/posts');
}

export const getUsers = async () => {
    return await $api.get('/users');
}

export const getPost = async (id) => {
    return await $api.get('/posts/' + id);
}

export const _getAlbums = async () => {
    return await $api.get('/albums');
}

export const _getPhotosByAlbumId = async (albumId) => {
    return await $api.get('/photos?albumId=' + albumId);
}