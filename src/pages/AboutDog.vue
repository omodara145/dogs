<template>
  <div>
    <h1>Test</h1>
  </div>
</template>

<script>
// import request from "../../services/request.js";

export default {
  name: "About Dog",
  data() {
    return {
      logo: "./dogs.svg",
      headerImage: "./dog3.jpg",
      dogBreed: "",
      dogs: [
        "./dog1.jpg",
        "./dog2.jpg",
        "./dog3.jpg",
        "./dog1.jpg",
        "./dog2.jpg",
        "./dog3.jpg",
        "./dog1.jpg",
        "./dog2.jpg",
        "./dog3.jpg"
      ]
    };
  },
  methods: {},
  created() {}
};
</script>
