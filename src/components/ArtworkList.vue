<script lang="ts">

export default {
    name: 'ArtworkList',
    props: ['data'],
    methods: {
        getImgUrl(id: number): string {
            if (id !== null) {
                return `https://www.artic.edu/iiif/2/${id}/full/843,/0/default.jpg`;
            } else {
                return window.location.href;
            }
        }
    }
}
</script>


<template>
    <div class="artwork-list">
        <li v-for="item in data" class="artwork-list__item">
            <div class="artwork">
                <a :href="getImgUrl(item.image_id)">
                    <img :src="getImgUrl(item.image_id)" :alt="item.thumbnail?.alt_text" />
                </a>
                <div class="artwork__title">
                    <div class="artwork__title-artwork">{{ item.title }}</div>
                    <div class="artwork__title-artist">{{ item.artist_display }}</div>
                </div>
            </div>
        </li>
    </div>
</template>


<style scoped>
.artwork-list {
    display: grid;
    justify-content: center;
    gap: 10px;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(6, 1fr);
    margin: 5px;
}

.artwork {
    list-style: none;
    border-style: solid;
    border-color: #d2d2d2;
    border-width: 2px;
    padding: 5px;
}

li {
    list-style: none;
}

img {
    max-width: 100%;
    max-height: 100%;
    display: block;
}

.artwork__title {
    text-align: center;
}

.artwork__title-artwork {
    font-size: 20px;
    margin-bottom: 5px;
    color: #fff;
    font-weight: bold;
}
.artwork__title-artist {
    color: #d2d2d2;
}

:link {
    color: inherit;
}
</style>
