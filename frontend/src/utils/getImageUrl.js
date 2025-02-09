function getUrl(book){
    return new URL(`/src/assets/books/${book}`,import.meta.url);
}
export {getUrl}