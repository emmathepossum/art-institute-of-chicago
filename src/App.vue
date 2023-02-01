<script lang="ts">
import ArtworkList from './components/ArtworkList.vue';
import SearchField from './components/SearchField.vue';
import ChicagoArtAPI from './services/ChicagoArtAPI';
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
      isEmpty: false,
      artworkData: {} as ArtworkListInterface
    }
  },
  methods: {
    getData(ids?: number[]) {
      ChicagoArtAPI.getArt(ids).then((data) => {
        this.artworkData = data;
        this.isLoaded = true;
        this.isEmpty = false;
      });
    },
    handleQuery(query: string) {
      ChicagoArtAPI.getQueriedIds(query).then((data) => {
        let ids = data.map((art: ArtworkListInterface) => art.id);
        if(ids.length) {
          this.getData(ids);
        } else {
          this.artworkData = {} as ArtworkListInterface;
          this.isEmpty = true;
        }
      });
    }
  },
  created() {
    this.getData();
  }
}
</script>

<template>
  <SearchField @queried="handleQuery" />
  <div v-if="isEmpty">There are no results for this query</div>
  <ArtworkList v-if="isLoaded" :data="artworkData" />
</template>

<style>
body {
  background-color: #252525;
  color: #fff;
}
</style>