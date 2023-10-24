import { showMoreBtn, searchForm, searchImages, reset } from './imageSearch.js';

// submit keyword to fetch images from api
searchForm.addEventListener("submit", (event) => {
    reset();
    event.preventDefault();
    searchImages();
});

// show more pages
showMoreBtn.addEventListener("click", () => {
    searchImages();
});

