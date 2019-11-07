<template>
  <div>
    <div class="dg-header">
      <el-image
        :src="headerImage"
        fit="cover"
        class="dg-header--image"
      ></el-image>
      <div class="dg-nav">
        <router-link to="/">
          <el-image :src="logo" class="dg-logo">
            <div slot="error" class="image-slot">
              <span>Dogs</span>
            </div>
          </el-image>
        </router-link>
      </div>
      <div class="dg-header--content">
        <h1>Everything about dogs</h1>
        <el-input
          placeholder="Search for dogs by breed"
          suffix-icon="el-icon-search"
          v-model="dogBreed"
          class="dg-header--search__input"
        >
        </el-input>
        <p>
          <span>Suggested:</span>
          affenpinscher, african, bulldog, germanshepherd
        </p>
      </div>
    </div>
    <div class="dg-body">
      <h3>
        Featured Dogs Images
      </h3>
      <div v-lazy-container="{ selector: 'img' }" class="dg-masonry--container">
        <el-col :span="8" v-for="(dog, index) in dogs" :key="index">
          <div class="dg-image">
            <router-link to="/about"></router-link>
            <p class="overlay">Dog Name</p>
            <img :data-src="dog" />
          </div>
        </el-col>
      </div>
    </div>
  </div>
</template>

<script>
import request from "../../services/request.js";

export default {
  name: "Home",
  data() {
    return {
      logo: "./dogs.svg",
      headerImage: "./dog3.jpg",
      dogBreed: "",
      dogs: [],
      dogsTest: [],
      fetchingImages: false
    };
  },
  methods: {
    fetchImages() {
      this.fetchingImages = true;
      request
        .getDogImages()
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
    this.fetchImages();
  }
};
</script>
