import axios from "axios";

const apiCall = axios.create({
  baseURL: "https://dog.ceo/api"
});

export default {
  getAllBreeds() {
    return apiCall.get("breeds/list/all");
  },

  getAllBreedsImages() {
    return apiCall.get("/breeds/image/random/50");
  },

  getFourBreedImages(breed) {
    if (breed.includes("-")) {
      //breed.replace("-", "/");
      //return apiCall.get(`/breed/${breed}/images/random/4`);
    } else {
      return apiCall.get(`/breed/${breed}/images/random/4`);
    }
  },

  getBreedImages(breed) {
    return apiCall.get(`/breed/${breed}/images`);
  }
};
