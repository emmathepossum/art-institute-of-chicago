<script lang="ts">

export default {
    name: 'ArtworkList',
    props: ['data'],
    methods: {
        getImgUrl(img_id: number): string {
            if (img_id !== null || img_id !== undefined) {
                return `https://www.artic.edu/iiif/2/${img_id}/full/843,/0/default.jpg`;
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
            <div class="card artwork">
                <a :href="getImgUrl(item.image_id)">
                    <img :src="getImgUrl(item.image_id)" :alt="item.thumbnail?.alt_text" class="card-img-top">
                </a>
                <div class="card-body">
                    <div class="card-title artwork__title-artwork">{{ item.title }}</div>
                    <div class="card-text artwork__title-artist">{{ item.artist_display }}</div>
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
    grid-template-columns: repeat(auto-fill, minmax(20em, 1fr));
    grid-template-rows: repeat(auto-fill, 1fr);
    margin: 5px;
}

.artwork {
    list-style: none;
    border-style: solid;
    padding: 5px;
    color: #fff;
    border-color: #d2d2d2;
    background: rgba(0, 0, 0, .25);
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
