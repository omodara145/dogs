<template>
  <div>
    <div class="dg-header" ref="header">
      <el-image
        :src="headerImage"
        fit="cover"
        class="dg-header--image"
      ></el-image>
      <div class="dg-nav">
        <router-link to="/">
          <el-image src="../dogs.svg" class="dg-logo">
            <div slot="error" class="image-slot">
              <span>Dogs</span>
            </div>
          </el-image>
        </router-link>
      </div>
      <div class="dg-header--content">
        <h1>Everything about dogs</h1>
        <div class="search">
          <el-select v-model="dogBreed" filterable placeholder="Search for dog by breed">
            <el-option
              v-for="(dog, index) in allBreeds"
              :key="index"
              :label="dog"
              :value="dog"
            >
            </el-option>
          </el-select>
          <el-button
            icon="el-icon-search"
            @click="fetchByBreed"
            type="primary"
          ></el-button>
        </div>
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
      <div
        v-lazy-container="{ selector: 'img' }"
        class="dg-masonry--container"
        v-loading="fetchingImages"
        element-loading-background="rgb(255,255,255)"
      >
        <el-col :xs="24" :sm="12" :md="8" v-for="(dog, index) in allDogs" :key="index">
          <div class="dg-image">
            <router-link
              :to="{
                name: 'about',
                params: { dogName: dog.split('/').slice(-2)[0] }
              }"
            ></router-link>
            <p class="overlay">{{ dog.split("/").slice(-2)[0] }}</p>
            <img :data-src="dog" />
          </div>
        </el-col>
      </div>
      <div class="show-more" v-if="dogStore !== 0">
        <el-button
          type="primary"
          @click="fetchMoreImages"
          v-loading="showingMore"
          element-loading-background="rgb(255,255,255)"
          >Show more</el-button
        >
      </div>
    </div>
    <div class="back-to-top">
      <i class="el-icon-caret-top"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      headerImage: "./dog3.jpg",
      dogBreed: "",
      fetchingImages: false,
      showingMore: false,
      dogStore: this.$store.getters.dogs.length
    };
  },
  computed: {
    allDogs() {
      return this.$store.getters.dogs;
    },
    allBreeds() {
      return this.$store.getters.allBreeds;
    }
  },
  methods: {
    fetchAllBreeds() {
      this.$store
        .dispatch("setAllBreeds")
        .then().catch();
    },
    fetchImages() {
      if (this.dogStore === 0) {
        this.$store
          .dispatch("setDogs")
          .then(() => {
            this.fetchMoreImages();
          })
          .catch(() => {
            this.$message.error("Unable to load images.");
          });
      }
    },
    fetchMoreImages() {
      this.showingMore = true;
      this.$store.dispatch("setDogs").then(() => {
        setTimeout(() => {
          this.showingMore = false;
        }, 1500);
      });
    },
    fetchByBreed() {
      this.$router
        .push({
          name: "search_result",
          params: {
            dogName: this.dogBreed
          }
        })
        .then(() => {
          this.dogBreed = "";
        });
    }
  },
  created() {
    this.fetchAllBreeds();
    this.fetchImages();
  }
};
</script>
