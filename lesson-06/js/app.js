import { UnsplashAPI } from "./unsplash-api.js";
import refs from "./refs.js";
import { renderPage } from "./render-page.js";


const { form, list } = refs;
export let isSubmit = true;
let isFirstLoad = true;

export const unsplashApi = new UnsplashAPI(12);


form.addEventListener("submit", onSubmit);


function onSubmit(event) {
  event.preventDefault();
  isFirstLoad = true;
  isSubmit = true;
  list.innerHTML = '';
  unsplashApi.page = 1;
  
  const searchQuery = event.target.elements["user-search-query"].value.trim();
  if (!searchQuery) {
    list.innerHTML = "";
    return alert("Your query is empty");
  }

  unsplashApi.query = searchQuery;

  renderPage();
}

export function loadMoreData() {
  if ( isFirstLoad ) {
    return isFirstLoad = false;
  }
  isSubmit = false;
  unsplashApi.page +=1;
  renderPage()
}

