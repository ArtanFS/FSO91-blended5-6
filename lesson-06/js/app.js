import { UnsplashAPI } from "./unsplash-api.js";

const unsplashApi = new UnsplashAPI(12);

unsplashApi.getPhotos().then(console.log);
