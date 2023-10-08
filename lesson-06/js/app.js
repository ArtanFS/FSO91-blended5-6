import { UnsplashAPI } from "./unsplash-api.js";
import refs from "./refs.js";
import { createMarkup } from "./createmarkup.js";

const { form, list, anchor} = refs;

const unsplashApi = new UnsplashAPI(12);
const observer = new IntersectionObserver(
  (entries, observer) => {
    if (entries[0].isIntersecting) {
      loadMoreData();
    }
  },
  {
    root: null,
    rootMargin: "300px",
    threshold: 1,
  }
);

form.addEventListener("submit", onSubmit);

async function onSubmit(event) {
  event.preventDefault();
  unsplashApi.page = 1;
  const searchQuery = event.target.elements["user-search-query"].value.trim();
  if (!searchQuery) {
    list.innerHTML = "";
    return alert("Your query is empty");
  }
  unsplashApi.query = searchQuery;

  try {
    const response = await unsplashApi.getPhotos();
    alert(`We find: ${response.data.total} images!`);
    list.innerHTML = createMarkup(response.data.results);
    if (response.data.total > unsplashApi.per_page) {
    observer.observe(anchor);
  }
  } catch (error) {
    if (error.response.status === 403){

      list.innerHTML = "";
      alert(`for your request ${unsplashApi.query} not found!`)
    }

    if(error.response.status === 500) {
      alert('oops...something went wrong. Please, try again.')
    }
    if(error.response.status === 401) {
      alert('Wrong API_KEY')
    }
    console.log(error);
  }
}

async function loadMoreData() {
  try {
    if(unsplashApi.page > 1) {
    const response = await unsplashApi.getPhotos();
    list.insertAdjacentHTML("beforeend", createMarkup(response.data.results))

    if(response.data.total_pages === unsplashApi.page){
      observer.unobserve(anchor)
      return alert("We're sorry, but you've reached the end of search results.")
    }
  } 
  unsplashApi.page +=1;
  } catch (error) {
    console.log(error);
  }
}

// "We're sorry, but you've reached the end of search results.".