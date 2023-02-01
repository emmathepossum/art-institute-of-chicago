import type ArtworkListInterface from '../interfaces/ArtworkList.interface';

export default {
    apiUrl: 'https://api.artic.edu/api/v1/artworks',
    apiQuery: '/search?q=',
    apiFields: '?fields=id,image_id,alt_image_ids,title,artist_display,date_display,thumbnail',

    async getArt(ids?: number[]): Promise<ArtworkListInterface> {
        let url = this.apiUrl + this.apiFields;
        if (ids) {
            url = this.apiUrl + this.apiFields + '&ids=' + ids.toString();
        }
        let response = await fetch(url);
        let data = await response.json();
        return data.data;
    },

    async getQueriedIds(query: string): Promise<ArtworkListInterface[]> {
        let url = this.apiUrl + this.apiQuery + query;
        let response = await fetch(url);
        let data = await response.json();
        return data.data;
    },
}