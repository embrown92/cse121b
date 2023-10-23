import { searchForm, showMoreBtn, page, searchImages, reset } from './imageSearch.js';


async function awaitSearchImages() {
    const result = await searchImages();
    //console.log(result);
};


showMoreBtn.style.display = "block";

searchForm.addEventListener("submit", (e) => {
    reset();
    e.preventDefault();
    let page = 1;
    searchImages();
});

// show more pages
showMoreBtn.addEventListener("click", () => {
    searchImages();
    page++;
});


awaitSearchImages();