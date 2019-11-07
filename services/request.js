import axios from "axios";

const apiCall = axios.create({
  baseURL: "https://dog.ceo/api/breeds"
});

export default {
  getAllBreeds() {
    return apiCall.get("/list/all");
  },

  getDogImages() {
    return apiCall.get("/image/random/50");
  }
};
