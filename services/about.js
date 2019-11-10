import axios from "axios";

export default {
  getInfo(breed) {
    return axios.get(
      `https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search=${breed}+dog&limit=1&format=json`
    );
  }
};
