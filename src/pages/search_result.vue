<template>
  <div>
    <div class="dg-header search-result" ref="header">
      <div class="dg-nav">
        <router-link to="/">
          <el-image src="../dogs.svg" class="dg-logo">
            <div slot="error" class="image-slot">
              <span>Dogs</span>
            </div>
          </el-image>
        </router-link>
        <el-input
          placeholder="Search for dogs by breed"
          v-model="search"
          class="search-result--input"
          @keyup.enter.native="fetchByBreed"
        >
          <el-button
            slot="append"
            icon="el-icon-search"
            @click="fetchByBreed"
          ></el-button>
        </el-input>
      </div>
    </div>
    <div class="dg-body" v-loading="loading">
      <h3>
        Search results for <strong>{{ dogBreed }}</strong>
      </h3>
      <div
        v-lazy-container="{ selector: 'img' }"
        class="dg-masonry--container"
        v-loading="fetchingImages"
        element-loading-background="rgb(255,255,255)"
      >
        <el-col :span="8" v-for="(dog, index) in dogsTest" :key="index">
          <div class="dg-image">
            <router-link
              :to="{ name: 'about', params: { dogName: 'dogName' } }"
            ></router-link>
            <p class="overlay">dogName</p>
            <img :data-src="dog" />
          </div>
        </el-col>
      </div>
    </div>
    <div class="back-to-top">
      <i class="el-icon-caret-top"></i>
    </div>
  </div>
</template>

<script>
import request from "../../services/request.js";

export default {
  name: "SearchResult",
  data() {
    return {
      loading: false,
      search: "",
      dogBreed: this.$route.params.dogName,
      dogs: [],
      dogsTest: [
        "./dog1.jpg",
        "./dog2.jpg",
        "./dog3.jpg",
        "./dog1.jpg",
        "./dog2.jpg",
        "./dog3.jpg",
        "./dog1.jpg",
        "./dog2.jpg",
        "./dog3.jpg"
      ],
      fetchingImages: false
    };
  },
  methods: {
    fetchImages() {},
    fetchByBreed() {
      this.fetchingImages = true;
      request
        .getBreedImages(this.dogBreed.toLowerCase())
        .then(response => {
          this.dogs = response.data.message;
          setTimeout(() => {
            this.fetchingImages = false;
          }, 1500);
        })
        .catch(() => {
          //
        });
    }
    // breedName(url) {
    //   return url.split("/").slice(-2)[0];
    // }
  },
  created() {
    this.loading = true;
    this.search = this.$route.params.dogName;
    //this.fetchImages();
  }
};
</script>
