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
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur</p>
      </div>
    </div>
  </div>
</template>

<script>
// import request from "../../services/request.js";

export default {
  name: "AboutDog",
  data() {
    return {
      loading: false,
      logo: "./dogs-two.svg",
      dogName: this.$route.params.dogName,
      dogBreed: ["./dog1.jpg", "./dog2.jpg", "./dog3.jpg", "./dog2.jpg"]
    };
  },
  methods: {
    goBack() {
      //
    }
  },
  created() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 2500);
  }
};
</script>
