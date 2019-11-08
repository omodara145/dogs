import Vue from "vue";
import Vuex from "vuex";
import request from "../../services/request.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dogs: []
  },
  mutations: {
    SET_ALL_DOGS(state, dogs) {
      dogs.forEach(dog => {
        state.dogs.push(dog);
      });
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
    }
  },
  getters: {
    dogs: state => state.dogs
  },
  modules: {}
});
