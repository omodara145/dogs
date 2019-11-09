import Vue from "vue";
import Vuex from "vuex";
import request from "../../services/request.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dogs: [],
    allBreeds: []
  },
  mutations: {
    SET_ALL_DOGS(state, dogs) {
      dogs.forEach(dog => {
        state.dogs.push(dog);
      });
    },
    SET_ALL_BREEDS(state, allBreeds) {
      state.allBreeds = allBreeds;
    }
  },
  actions: {
    setDogs({ commit }) {
      request
        .getAllBreedsImages()
        .then(response => {
          const dogs = response.data.message;
          commit("SET_ALL_DOGS", dogs);
        })
        .catch();
    },
    setAllBreeds({ commit }) {
      request
        .getAllBreeds()
        .then(response => {
          const breeds = response.data.message;
          commit("SET_ALL_BREEDS", Object.keys(breeds));
        })
        .catch();
    }
  },
  getters: {
    dogs: state => state.dogs,
    allBreeds: state => state.allBreeds
  },
  modules: {}
});
