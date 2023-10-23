import { searchForm, page, searchImages, reset } from './imageSearch.js';


async function awaitSearchImages() {
    const result = await searchImages();
    //console.log(result);
};

searchForm.addEventListener("submit", (e) => {
    reset();
    e.preventDefault();
    let page = 1;
    searchImages();
});



awaitSearchImages();