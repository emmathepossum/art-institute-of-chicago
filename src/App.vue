<script lang="ts">
import type { PropType } from 'vue';
import ArtworkList from './components/ArtworkList.vue';
import type ArtworkListInterface from './interfaces/ArtworkList.interface';

export default {
  name: 'App',
  components: {
    ArtworkList
  },
  data() {
    return {
      isLoaded: false,
      artworkData: {} as ArtworkListInterface
    }
  },
  methods: {
    async getArt() {
      let response = await fetch('https://api.artic.edu/api/v1/artworks?fields=id,image_id,title,artist_display,date_display,thumbnail');
      let data = await response.json();
      return data;
    },
    getData() {
      this.getArt().then((data) => {
        this.artworkData = data.data;
        this.isLoaded = true;
      });
    }
  },
  created() {
    this.getData();
  }
}
</script>

<template>
  <ArtworkList v-if="isLoaded" :data="artworkData"/>
</template>
