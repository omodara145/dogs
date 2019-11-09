<template>
  <div v-loading="loading" element-loading-background="rgb(255,255,255)">
    <div class="dg-header search-result" ref="header">
      <div class="dg-nav">
        <router-link to="/">
          <el-image src="../dogs.svg" class="dg-logo">
            <div slot="error" class="image-slot">
              <span>Dogs</span>
            </div>
          </el-image>
        </router-link>
        <div class="search">
          <el-select v-model="search" filterable placeholder="Search for dog by breed">
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
            @click="fetchByBreed(search)"
            type="primary"
          ></el-button>
        </div>
      </div>
    </div>
    <div class="dg-body">
      <h3>
        Search results for <strong>{{ this.$route.params.dogName }}</strong>
      </h3>
      <div
        v-lazy-container="{ selector: 'img' }"
        class="dg-masonry--container"
      >
        <el-col :xs="24" :sm="12" :md="8" v-for="(dog, index) in dogs" :key="index">
          <div class="dg-image">
            <router-link
              :to="{ name: 'about', params: { dogName: dog.split('/').slice(-2)[0] } }"
            ></router-link>
            <p class="overlay">{{ dog.split('/').slice(-2)[0] }}</p>
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
      dogs: []
    };
  },
  computed: {
    allBreeds() {
      return this.$store.getters.allBreeds;
    }
  },
  methods: {
    fetchByBreed(breed) {
      this.loading = true;
      this.$route.params.dogName = breed;
      request
        .getBreedImages(breed)
        .then(response => {
          this.dogs = response.data.message;
          setTimeout(() => {
            this.loading = false;
          }, 2500);
        })
        .catch(() => {
          this.$message.error("Unable to load images");
        });
    }
  },
  created() {
    this.fetchByBreed(this.$route.params.dogName);
  }
};
</script>
