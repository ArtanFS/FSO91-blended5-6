import { createMarkup } from "./createmarkup.js";
import { isSubmit } from "./app.js";
import { observer } from "./observer.js";
import refs from "./refs.js";
import { unsplashApi } from "./app.js";

const {list, anchor} = refs;


export async function renderPage() {
    try {
      const response = await unsplashApi.getPhotos();
      if (response.data.results.length === 0) {
        list.innerHTML = '';
        return alert(`for your request ${unsplashApi.query} not found!`)
      }

      if (isSubmit) {
        alert(`We find: ${response.data.total} images!`);
      }    

      if (response.data.total > unsplashApi.per_page) {
        observer.observe(anchor);
      }
        list.insertAdjacentHTML("beforeend", createMarkup(response.data.results))
  
      if(response.data.total_pages === unsplashApi.page){
        observer.unobserve(anchor)
        alert("We're sorry, but you've reached the end of search results.")
      }
      
    } catch (error) {
  
      if(error.response.status === 500) {
        alert('oops...something went wrong. Please, try again.')
      }
      if(error.response.status === 401) {
        alert('Wrong API_KEY')
      }
      console.log(error);
    }
  }