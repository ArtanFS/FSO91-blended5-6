export class UnsplashAPI {
  #BASE_URL = "https://api.unsplash.com";
  #API_KEY = "LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc";

  constructor(perPage) {
    this.query = null;
    this.page = 1;
    this.per_page = perPage;
  }

  getPhotos() {
    return axios.get(`${this.#BASE_URL}/search/photos`, {
      params: {
        query: this.query,
        page: this.page,
        per_page: this.per_page,
        client_id: this.#API_KEY,
      },
    });
  }
}
