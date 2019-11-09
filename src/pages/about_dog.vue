<template>
  <div class="dg-about" v-loading="loading" element-loading-background="rgb(255,255,255)">
    <div class="dg-logo--two">
      <router-link to="/">
        <el-image :src="logo" class="dg-logo">
          <div slot="error" class="image-slot">
            <span>Dogs</span>
          </div>
        </el-image>
      </router-link>
      <div class="go-back" @click="goBack">
        <i class="el-icon-back"></i>
      </div>
    </div>
    <div class="dg-about--dog">
      <div class="dg-about--dog__title">
        <div class="dg-about--dog__image">
          <el-carousel trigger="click" height="400px">
            <el-carousel-item v-for="(dog, index) in dogBreed" :key="index">
              <el-image :src="dog" fit="cover">
                <div slot="error" class="image-slot">
                  <span><i class="el-icon-picture"></i></span>
                </div>
              </el-image>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="dg-about--dog__name">
          <h2>{{ dogName }}</h2>
        </div>
      </div>
      <div class="dg-about--dog__content">
        <h3>About</h3>
        <p>{{ aboutBreed }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import request from "../../services/request.js";
import about from "../../services/about.js";

export default {
  name: "AboutDog",
  data() {
    return {
      loading: false,
      logo: "./dogs-two.svg",
      dogName: this.$route.params.dogName,
      dogBreed: [],
      aboutBreed: ""
    };
  },
  methods: {
    goBack() {
      this.$router.push({ name: "home" });
    },
    fetchBreedImages() {
      this.loading = true;
      request
        .getFourBreedImages(this.dogName)
        .then(response => {
          this.dogBreed = response.data.message;
          this.fetchInfo();
        })
        .catch();
    },
    fetchInfo() {
      about
        .getInfo(this.dogName)
        .then(response => {
          this.aboutBreed = response.data[2][0];
          this.loading = false;
        })
        .catch();
    }
  },
  created() {
    if (this.$route.params.dogName) {
      this.fetchBreedImages();
    } else {
      this.$router.push({ name: "home" });
    }
  }
};
</script>
