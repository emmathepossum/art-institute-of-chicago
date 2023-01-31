<script lang="ts">
import ArtworkList from './components/ArtworkList.vue';
import SearchField from './components/SearchField.vue';
import type ArtworkListInterface from './interfaces/ArtworkList.interface';

export default {
  name: 'App',
  components: {
    ArtworkList,
    SearchField
  },
  data() {
    return {
      isLoaded: false,
      artworkData: {} as ArtworkListInterface,
      apiUrl: 'https://api.artic.edu/api/v1/artworks',
      apiQuery: '/search?q=',
      apiFields: '?fields=id,image_id,title,artist_display,date_display,thumbnail'
    }
  },
  methods: {
    async getArt(query: string) {
      let url = this.apiUrl+this.apiFields;
      if (query) {
        url = this.apiUrl+this.apiQuery+query+this.apiFields;
      }
      console.log(url);
      let response = await fetch(url);
      let data = await response.json();
      return data;
    },
    getData(query: string) {
      this.getArt(query).then((data) => {
        this.artworkData = data.data;
        this.isLoaded = true;
      });
    },
    handleQuery(query: string) {
      console.log(query);
      this.getData(query);
    }
  },
  created() {
    this.getData('');
  }
}
</script>

<template>
  <SearchField @queried="handleQuery" />
  <ArtworkList v-if="isLoaded" :data="artworkData" />
</template>

<style>
body {
  background-color: #252525;
  color: #fff;
}
</style>