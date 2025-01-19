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
    gap: 20px;
    grid-template-columns: 1fr 1fr 1fr 1fr auto;
}

.artwork {
    width: 350px;
    height: 600px;
    box-shadow: 5px 2px 2px var(--bs-border-color-translucent);
}

.artwork:hover {
    transform: scale(1.05);
    border-width: 2px;
}

li {
    list-style: none;
}

img {
    height: 400px;
    padding: 5px;
    object-fit: contain;
}

.artwork__title-artwork {
    font-size: 16px;
    margin-bottom: 5px;
    font-weight: bold;
}

.artwork__title-artist {
    font-size: 14px;
}

:link {
    color: inherit;
}
</style>
