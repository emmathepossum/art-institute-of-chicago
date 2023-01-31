export default interface ArtworkList {
    id: number,
    image_id: number,
    title: string,
    artist_display: string,
    data_display: string,
    thumbnail: { alt_text: string }
}