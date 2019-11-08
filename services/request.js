import axios from "axios";

const apiCall = axios.create({
  baseURL: "https://dog.ceo/api"
});

export default {
  getAllBreeds() {
    return apiCall.get("breeds/list/all");
  },

  getDogImages() {
    return apiCall.get("/breeds/image/random/50");
  }
};
